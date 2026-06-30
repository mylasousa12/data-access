<script setup lang="ts">
import {useSidebar} from "~/partials/base/Header/useSidebar";
import AppIcon from "~/partials/base/Header/components/AppIcon.vue";
import "../../../../scss/partials/Header/mobile-sidebar.scss";

const {isSidebarOpen, closeSidebar} = useSidebar();
const {isAuthenticated, userName, logout} = useAuth();

function handleLogout() {
  closeSidebar();
  logout();
}
</script>

<template>
  <Transition name="ms-overlay">
    <div v-if="isSidebarOpen" class="mobile-sidebar-overlay" @click="closeSidebar()" />
  </Transition>

  <Transition name="ms-panel">
    <aside v-if="isSidebarOpen" class="mobile-sidebar">

      <div class="mobile-sidebar__header">
        <img src="../../../../assets/images/logo_tripfy.png" alt="Tripfy" class="mobile-sidebar__logo">
        <button @click="closeSidebar()" class="mobile-sidebar__close" aria-label="Fechar menu">
          <AppIcon name="close" />
        </button>
      </div>

      <div class="mobile-sidebar__gradient-bar" aria-hidden="true" />

      <nav class="mobile-sidebar__body">

        <div v-if="isAuthenticated" class="mobile-sidebar__user-card">
          <span class="mobile-sidebar__user-avatar">{{ userName?.charAt(0).toUpperCase() }}</span>
          <div class="mobile-sidebar__user-info">
            <p class="mobile-sidebar__user-name">{{ userName }}</p>
            <p class="mobile-sidebar__user-label">Minha conta</p>
          </div>
        </div>

        <p class="mobile-sidebar__section-label" :class="{'mobile-sidebar__section-label--spaced': isAuthenticated}">Navegar</p>

        <ul class="mobile-sidebar__nav">
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="home" /></span>
              <span class="mobile-sidebar__text">Início</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="resource" /></span>
              <span class="mobile-sidebar__text">Recursos</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="help-circle" /></span>
              <span class="mobile-sidebar__text">Como funciona</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="location" /></span>
              <span class="mobile-sidebar__text">Destinos</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="price-tag" /></span>
              <span class="mobile-sidebar__text">Planos</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="about-us" /></span>
              <span class="mobile-sidebar__text">Sobre nós</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
        </ul>

        <p class="mobile-sidebar__section-label mobile-sidebar__section-label--spaced">Suporte</p>

        <ul class="mobile-sidebar__nav">
          <li class="mobile-sidebar__item">
            <NuxtLink to="#" class="mobile-sidebar__link">
              <span class="mobile-sidebar__icon-wrap"><AppIcon name="support" /></span>
              <span class="mobile-sidebar__text">Ajuda</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </NuxtLink>
          </li>
        </ul>

        <template v-if="isAuthenticated">
          <p class="mobile-sidebar__section-label mobile-sidebar__section-label--spaced">Conta</p>

          <ul class="mobile-sidebar__nav">
            <li class="mobile-sidebar__item">
              <NuxtLink to="/profile" class="mobile-sidebar__link">
                <span class="mobile-sidebar__icon-wrap"><AppIcon name="user" /></span>
                <span class="mobile-sidebar__text">Meu perfil</span>
                <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
              </NuxtLink>
            </li>
            <li class="mobile-sidebar__item">
              <NuxtLink to="#" class="mobile-sidebar__link">
                <span class="mobile-sidebar__icon-wrap"><AppIcon name="plane" /></span>
                <span class="mobile-sidebar__text">Minhas viagens</span>
                <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
              </NuxtLink>
            </li>
            <li class="mobile-sidebar__item">
              <NuxtLink to="#" class="mobile-sidebar__link">
                <span class="mobile-sidebar__icon-wrap"><AppIcon name="gear" /></span>
                <span class="mobile-sidebar__text">Configurações</span>
                <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
              </NuxtLink>
            </li>
          </ul>

          <div class="mobile-sidebar__logout-wrap">
            <button class="mobile-sidebar__logout" @click="handleLogout()">
              <span class="mobile-sidebar__icon-wrap mobile-sidebar__icon-wrap--danger"><AppIcon name="close" /></span>
              <span class="mobile-sidebar__text">Sair</span>
              <span class="mobile-sidebar__chevron" aria-hidden="true">›</span>
            </button>
          </div>
        </template>

      </nav>

      <div v-if="!isAuthenticated" class="mobile-sidebar__footer">
        <p class="mobile-sidebar__footer-tagline">Pronto para a próxima aventura?</p>
        <NuxtLink to="#" class="mobile-sidebar__cta">
          <span>Começar agora</span>
          <span class="mobile-sidebar__cta-arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </div>

    </aside>
  </Transition>
</template>
