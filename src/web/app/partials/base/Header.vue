<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {useLanguage} from "./Header/useLanguage";
import MobileSidebar from "~/partials/base/Header/components/MobileSidebar.vue";
import {useSidebar} from "~/partials/base/Header/useSidebar";
import AppIcon from "~/partials/base/Header/components/AppIcon.vue";

const {isSidebarOpen, toggleSidebar} = useSidebar()
const {isAuthenticated, userName, logout} = useAuth()
const firstName = computed(() => userName.value?.split(' ')[0] ?? '')

const isOpen = ref(false)
const isUserMenuOpen = ref(false)
const userMenuRef = ref<HTMLElement | null>(null)
const {selectedLanguage, selectLanguage, languages} = useLanguage()

function handleSelect(code: string) {
  selectLanguage(code)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
    isUserMenuOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))

</script>

<template>
  <header>
    <div class="container">
      <div id="logo">
        <NuxtLink to="/home"><img src="/images/logo_tripfy.png" alt="logo"></NuxtLink>
      </div>

      <button id="menu-mobile-button" @click="toggleSidebar()">
        <AppIcon name="menu"/>
      </button>

      <MobileSidebar :is-open="isSidebarOpen"/>

      <nav>
        <ul>
          <li><a href="#">Recursos</a></li>
          <li><a href="#">Como funciona</a></li>
          <li><a href="#">Destinos</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </nav>
      <div>

        <button @click="isOpen = !isOpen">
          <AppIcon name="globe"/>
          <span>{{ selectedLanguage }}</span>
          <AppIcon name="arrow-down" class="arrow" :class="{open:isOpen}"/>
        </button>
        <ul v-if="isOpen">
          <li v-for="language in languages"
              :key="language.code"
              @click="handleSelect(language.code)">
            {{ language.label }}
          </li>
        </ul>
      </div>

      <div>
        <template v-if="isAuthenticated">
          <div id="user-menu" ref="userMenuRef">
            <button id="user-btn" @click="isUserMenuOpen = !isUserMenuOpen">
              <span class="user-btn__avatar">{{ userName?.charAt(0).toUpperCase() }}</span>
              <span class="user-btn__name">{{ firstName }}</span>
              <AppIcon name="arrow-down" class="arrow" :class="{open: isUserMenuOpen}"/>
            </button>
            <ul v-if="isUserMenuOpen" class="user-dropdown">
              <li class="user-dropdown__item">
                <NuxtLink to="/profile" class="user-dropdown__link">
                  <span class="user-dropdown__icon-wrap"><AppIcon name="user"/></span>
                  <span>Meu perfil</span>
                  <span class="user-dropdown__chevron">›</span>
                </NuxtLink>
              </li>
              <li class="user-dropdown__item">
                <a href="#" class="user-dropdown__link">
                  <span class="user-dropdown__icon-wrap"><AppIcon name="plane"/></span>
                  <span>Minhas viagens</span>
                  <span class="user-dropdown__chevron">›</span>
                </a>
              </li>
              <li class="user-dropdown__item">
                <a href="#" class="user-dropdown__link">
                  <span class="user-dropdown__icon-wrap"><AppIcon name="gear"/></span>
                  <span>Configurações</span>
                  <span class="user-dropdown__chevron">›</span>
                </a>
              </li>
              <li class="user-dropdown__divider"></li>
              <li class="user-dropdown__item user-dropdown__item--logout" @click="logout()">
                <span class="user-dropdown__icon-wrap user-dropdown__icon-wrap--danger"><AppIcon name="close"/></span>
                <span>Sair</span>
                <span class="user-dropdown__chevron">›</span>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <button id="login"><NuxtLink to="/login">Entrar</NuxtLink></button>
          <button id="register"><NuxtLink to="/register">Criar conta</NuxtLink></button>
        </template>
      </div>

    </div>
  </header>
</template>
