<script setup lang="ts">
import "~/scss/pages/profile.scss";

definePageMeta({middleware: 'auth'})

const {token} = useAuth()
const {$api} = useNuxtApp() as any

interface User {
    id: number
    name: string
    email: string
    address: string
    number: number
    cep: string
    state: string
    complement: string | null
}

const {data: user, pending, error} = await useAsyncData<User>('profile', async () => {
    try {
        const response = await $api.get('/user/me', {
            headers: {Authorization: `Bearer ${token.value}`}
        })
        return response.data.user
    } catch (e: any) {
        console.error('[Profile] status:', e?.response?.status)
        console.error('[Profile] data:', e?.response?.data)
        console.error('[Profile] message:', e?.message)
        console.error('[Profile] token value:', JSON.stringify(token.value))
        throw e
    }
}, { server: false })

const formattedCep = computed(() => {
    const cep = user.value?.cep ?? ''
    return cep.length === 8 ? `${cep.slice(0, 5)}-${cep.slice(5)}` : cep
})

</script>

<template>
    <div class="container">
        <div class="profile">
            <div v-if="pending" class="profile__loading">
                Carregando perfil...
            </div>

            <div v-else-if="error" class="profile__error">
                Erro ao carregar os dados do perfil. Tente novamente.
            </div>

            <template v-else-if="user">
                <div class="profile__hero">
                    <div class="profile__avatar">{{ user.name.charAt(0).toUpperCase() }}</div>
                    <div class="profile__hero-info">
                        <h1 class="profile__name">{{ user.name }}</h1>
                        <p class="profile__email">{{ user.email }}</p>
                    </div>
                </div>

                <div class="profile__section">
                    <p class="profile__section-title">Informações pessoais</p>
                    <div class="profile__grid">
                        <div class="profile__field">
                            <p class="profile__field-label">Endereço</p>
                            <p class="profile__field-value">{{ user.address }}</p>
                        </div>
                        <div class="profile__field">
                            <p class="profile__field-label">Número</p>
                            <p class="profile__field-value">{{ user.number }}</p>
                        </div>
                        <div class="profile__field">
                            <p class="profile__field-label">CEP</p>
                            <p class="profile__field-value">{{ formattedCep }}</p>
                        </div>
                        <div class="profile__field">
                            <p class="profile__field-label">Estado</p>
                            <p class="profile__field-value">{{ user.state.toUpperCase() }}</p>
                        </div>
                        <div class="profile__field profile__field--full" :class="{'profile__field--empty': !user.complement}">
                            <p class="profile__field-label">Complemento</p>
                            <p class="profile__field-value">{{ user.complement ?? 'Não informado' }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>