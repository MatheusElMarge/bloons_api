<template>
  <UContainer>
    <UNavbar>
      <template #brand>
        <NuxtLink to="/" class="text-lg font-bold">Meu Site</NuxtLink>
      </template>
      <template #right>
        <UButton variant="ghost" to="/classes">Classes</UButton>
        <UButton variant="ghost" to="/sprites">Sprites</UButton>
        <UButton variant="ghost" to="/macacos">Macacos</UButton>
        <UButton variant="ghost" @click="toggleTheme">
          <UIcon :name="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="w-6 h-6" />
        </UButton>
      </template>
    </UNavbar>

    <!-- Conteúdo da página -->
    <main class="p-6">
      <NuxtPage />
    </main>
  </UContainer>
</template>

<script setup>
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

const toggleTheme = () => {
  colorMode.value = isDark.value ? 'light' : 'dark';
};
</script>
