<script setup lang="ts">
import "~/scss/pages/auth/register.scss";
definePageMeta({layout: 'auth-layout-base', path: '/register'})

const {register} = useAuth()
const form = reactive({
    email: '',
    password: '',
    name: '',
    cpf: '',
    address: '',
    number: 0,
    cep: '',
    complement: '',
    state: ''
})
const error = ref('')
const success = ref(false)
const loading = ref(false)

async function handleRegister() {
    error.value = ''
    loading.value = true
    try {
        await register({
            ...form,
            number: Number(form.number),
            complement: form.complement || undefined
        })
        success.value = true
    } catch (e: any) {
        const fieldErrors = e.response?.data?.errors?.fieldErrors
        if (fieldErrors) {
            const first = Object.values(fieldErrors)[0] as string[]
            error.value = first?.[0] || 'Erro ao criar conta.'
        } else {
            error.value = e.response?.data?.message || 'Erro ao criar conta. Tente novamente.'
        }
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="auth-card auth-card--wide">
        <div class="auth-card__header">
            <h1>Criar conta</h1>
            <p>Preencha os dados para se cadastrar</p>
        </div>

        <div v-if="success" class="auth-success">
            Conta criada com sucesso!
            <NuxtLink to="/login">Fazer login</NuxtLink>
        </div>

        <form v-else class="auth-form" @submit.prevent="handleRegister">
            <div v-if="error" class="auth-form__error">{{ error }}</div>

            <fieldset class="auth-form__section">
                <legend>Dados pessoais</legend>
                <div class="auth-form__group">
                    <label for="name">Nome completo</label>
                    <input id="name" v-model="form.name" type="text" placeholder="Seu nome" required maxlength="100"/>
                </div>
                <div class="auth-form__group">
                    <label for="cpf">CPF</label>
                    <input id="cpf" v-model="form.cpf" type="text" placeholder="00000000000" required maxlength="11"/>
                </div>
                <div class="auth-form__group">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="form.email" type="email" placeholder="seu@email.com" required maxlength="100"/>
                </div>
                <div class="auth-form__group">
                    <label for="password">Senha</label>
                    <input id="password" v-model="form.password" type="password" placeholder="Mínimo 8 caracteres" required minlength="8" maxlength="100"/>
                </div>
            </fieldset>

            <fieldset class="auth-form__section">
                <legend>Endereço</legend>
                <div class="auth-form__row">
                    <div class="auth-form__group">
                        <label for="cep">CEP</label>
                        <input id="cep" v-model="form.cep" type="text" placeholder="00000000" required maxlength="8"/>
                    </div>
                    <div class="auth-form__group">
                        <label for="state">Estado</label>
                        <input id="state" v-model="form.state" type="text" placeholder="SP" required maxlength="2"/>
                    </div>
                </div>
                <div class="auth-form__group">
                    <label for="address">Endereço</label>
                    <input id="address" v-model="form.address" type="text" placeholder="Rua, Avenida..." required maxlength="255"/>
                </div>
                <div class="auth-form__row">
                    <div class="auth-form__group">
                        <label for="number">Número</label>
                        <input id="number" v-model="form.number" type="number" placeholder="0" required/>
                    </div>
                    <div class="auth-form__group">
                        <label for="complement">Complemento</label>
                        <input id="complement" v-model="form.complement" type="text" placeholder="Apto, Sala..." maxlength="255"/>
                    </div>
                </div>
            </fieldset>

            <button type="submit" class="auth-btn" :disabled="loading">
                <span v-if="loading">Criando conta...</span>
                <span v-else>Criar conta</span>
            </button>
        </form>

        <p class="auth-card__footer">
            Já tem uma conta?
            <NuxtLink to="/login">Entrar</NuxtLink>
        </p>
    </div>
</template>
