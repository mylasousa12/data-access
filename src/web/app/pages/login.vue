<script setup lang="ts">
definePageMeta({layout: 'auth'})

const {login} = useAuth()
const form = reactive({email: '', password: ''})
const error = ref('')
const success = ref('')
const loading = ref(false)

async function handleLogin() {
    error.value = ''
    success.value = ''
    loading.value = true
    try {
        await login(form.email, form.password)
        success.value = 'Login realizado com sucesso! Redirecionando...'
        await navigateTo('/home')
    } catch (e: any) {
        error.value = e.response?.data?.error || 'Credenciais inválidas. Tente novamente.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="auth-card">
        <div class="auth-card__header">
            <h1>Bem-vindo de volta</h1>
            <p>Entre com sua conta para continuar</p>
        </div>

        <form class="auth-form" @submit.prevent="handleLogin">
            <div v-if="error" class="auth-form__error">{{ error }}</div>
            <div v-if="success" class="auth-success">{{ success }}</div>

            <div class="auth-form__group">
                <label for="email">E-mail</label>
                <input id="email" v-model="form.email" type="email" placeholder="seu@email.com" required/>
            </div>

            <div class="auth-form__group">
                <label for="password">Senha</label>
                <input id="password" v-model="form.password" type="password" placeholder="••••••••" required/>
                <div class="auth-form__forgot">
                    <NuxtLink to="/forgot-password">Esqueceu a senha?</NuxtLink>
                </div>
            </div>

            <button type="submit" class="auth-btn" :disabled="loading">
                <span v-if="loading">Entrando...</span>
                <span v-else>Entrar</span>
            </button>
        </form>

        <p class="auth-card__footer">
            Não tem uma conta?
            <NuxtLink to="/register">Criar conta</NuxtLink>
        </p>
    </div>
</template>
