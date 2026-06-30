<template>
  <div class="auth-layout">
    <div class="auth-layout__brand">
      <NuxtLink to="/home">
        <img src="~/assets/images/logo_tripfy.png" alt="Tripfy" />
      </NuxtLink>
    </div>
    <main class="auth-layout__content">
      <slot />
    </main>
  </div>
</template>
