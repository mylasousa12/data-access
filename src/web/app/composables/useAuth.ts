interface RegisterPayload {
    email: string
    password: string
    name: string
    address: string
    number: number
    cep: string
    complement?: string
    state: string
    cpf: string
}

export const useAuth = () => {
    const {$api} = useNuxtApp() as any

    const token = useCookie<string | null>('auth_token', {
        maxAge: 86400,
        sameSite: 'lax',
        path: '/'
    })

    const userName = useState<string | null>('auth_user_name', () => null)

    const isAuthenticated = computed(() => !!token.value)

    async function fetchUser() {
        if (!token.value) return
        try {
            const {data} = await $api.get('/user/me', {
                headers: {Authorization: `Bearer ${token.value}`}
            })
            userName.value = data.user.name
        } catch (e: any) {
            if (e?.response?.status === 401) {
                token.value = null
                userName.value = null
            }
        }
    }

    async function login(email: string, password: string) {
        const {data} = await $api.post('/auth/login', {email, password})
        token.value = data.token
        userName.value = data.user.name
        return data
    }

    async function register(payload: RegisterPayload) {
        const {data} = await $api.post('/auth/register', payload)
        return data
    }

    async function forgotPassword(email: string) {
        const {data} = await $api.post('/auth/forgot-password/request', {email})
        return data
    }

    async function resetPassword(resetToken: string, password: string) {
        const {data} = await $api.post('/auth/forgot-password', {token: resetToken, password})
        return data
    }

    function logout() {
        token.value = null
        userName.value = null
        return navigateTo('/login')
    }

    return {token, userName, isAuthenticated, fetchUser, login, register, forgotPassword, resetPassword, logout}
}
