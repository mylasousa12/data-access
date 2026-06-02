<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import "../../scss/partials/header.scss";
import {useLanguage} from "~/partials/Header/buttonLanguage";

const isOpen = ref(false);

const {selectedLanguage, selectLanguage, languages} = useLanguage();

function handleSelect(code: string) {
  selectLanguage(code)
  isOpen.value = false
}

</script>

<template>
  <header>
    <div class="container">
      <div id="logo">
        <a href="#"><img src="../../assets/images/logo_tripfy.png" alt="logo"></a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Recursos</a></li>
          <li><a href="#">Como funciona</a></li>
          <li><a href="#">Destinos</a></li>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </nav>
      <div>
        <button @click="isOpen = !isOpen">
          <img src="../../assets/icons/globe.svg" alt="language">
          <span>{{ selectedLanguage }}</span>
          <img src="../../assets/icons/arrow-down.svg" alt="arrow" class="arrow" :class="{open:isOpen}">
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
        <button id="login"><a href="#">Entrar</a></button>
        <button id="register"><a href="#">Criar conta</a></button>
      </div>
    </div>
  </header>
</template>
