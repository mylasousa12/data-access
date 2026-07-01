<script setup lang="ts">
import "~/scss/pages/auth/forgot-password/request/forgot-password.scss";
definePageMeta({layout: 'auth-layout-base', path: '/forgot-password'})

const {forgotPassword} = useAuth()
const email = ref('')
const error = ref('')
const success = ref(false)
const loading = ref(false)

async function handleSubmit() {
    error.value = ''
    loading.value = true
    try {
        await forgotPassword(email.value)
        success.value = true
    } catch (e: any) {
        error.value = e.response?.data?.error || 'Erro ao enviar e-mail. Tente novamente.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="auth-card">
        <div class="auth-card__header">
            <h1>Esqueceu a senha?</h1>
            <p>Enviaremos um link para redefinir sua senha</p>
        </div>

        <div v-if="success" class="auth-success">
            E-mail enviado! Verifique sua caixa de entrada.
        </div>

        <form v-else class="auth-form" @submit.prevent="handleSubmit">
            <div v-if="error" class="auth-form__error">{{ error }}</div>

            <div class="auth-form__group">
                <label for="email">E-mail</label>
                <input id="email" v-model="email" type="email" placeholder="seu@email.com" required/>
            </div>

            <button type="submit" class="auth-btn" :disabled="loading">
                <span v-if="loading">Enviando...</span>
                <span v-else>Enviar link</span>
            </button>
        </form>

        <p class="auth-card__footer">
            <NuxtLink to="/login">Voltar para o login</NuxtLink>
        </p>
    </div>
</template>
