<script setup lang="ts">
import "~/scss/pages/auth/forgot-password/reset-password.scss";
definePageMeta({layout: 'auth-layout-base', path: '/reset-password'})

const route = useRoute()
const {resetPassword} = useAuth()
const form = reactive({password: '', confirmPassword: ''})
const error = ref('')
const success = ref(false)
const loading = ref(false)
const resetToken = computed(() => route.query.token as string | undefined)

onMounted(() => {
    if (!resetToken.value) {
        navigateTo('/forgot-password')
    }
})

async function handleReset() {
    error.value = ''
    if (form.password !== form.confirmPassword) {
        error.value = 'As senhas não coincidem.'
        return
    }
    loading.value = true
    try {
        await resetPassword(resetToken.value!, form.password)
        success.value = true
    } catch (e: any) {
        error.value = e.response?.data?.message || 'Token inválido ou expirado.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="auth-card">
        <div class="auth-card__header">
            <h1>Nova senha</h1>
            <p>Escolha uma senha segura para sua conta</p>
        </div>

        <div v-if="success" class="auth-success">
            Senha alterada com sucesso!
            <NuxtLink to="/login">Fazer login</NuxtLink>
        </div>

        <form v-else class="auth-form" @submit.prevent="handleReset">
            <div v-if="error" class="auth-form__error">{{ error }}</div>

            <div class="auth-form__group">
                <label for="password">Nova senha</label>
                <input id="password" v-model="form.password" type="password" placeholder="Mínimo 6 caracteres" required minlength="6"/>
            </div>

            <div class="auth-form__group">
                <label for="confirm">Confirmar senha</label>
                <input id="confirm" v-model="form.confirmPassword" type="password" placeholder="Repita a senha" required/>
            </div>

            <button type="submit" class="auth-btn" :disabled="loading">
                <span v-if="loading">Alterando...</span>
                <span v-else>Alterar senha</span>
            </button>
        </form>

        <p class="auth-card__footer">
            <NuxtLink to="/login">Voltar para o login</NuxtLink>
        </p>
    </div>
</template>
