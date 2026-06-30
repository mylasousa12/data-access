<script setup lang="ts">
import "./scss/app.scss";

const {isAuthenticated, fetchUser} = useAuth()

onMounted(async () => {
    if (isAuthenticated.value) await fetchUser()
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
