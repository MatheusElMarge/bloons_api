<template>
  <div class="background-image">
  </div>
  <div class="relative overflow-hidden">
    <!-- Balões flutuantes -->
    <div v-for="(balloon, index) in balloons" :key="index" class="balloon"
         :style="getBalloonStyle(index)">
      <img :src="balloon.src" alt="Balloon" class="w-16 h-16 opacity-75" />
    </div>

    <UContainer class="py-10 text-center relative z-10">
      <!-- Título e Descrição -->
      <h1 class="text-4xl font-bold mb-4">Bloons Td6 Project</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard v-for="item in items" :key="item.title" class="p-4 hover:scale-105 transition">
          <template #header>
            <UIcon :name="item.icon" class="w-10 h-10 text-primary" />
          </template>
          <h2 class="text-xl font-semibold">{{ item.title }}</h2>
          <p class="text-gray-500 dark:text-gray-400">{{ item.description }}</p>
          <template #footer>
            <UButton :to="item.link" variant="outline" block>
              Acessar
            </UButton>
          </template>
        </UCard>
      </div>

      <!-- Botão Chamativo -->
      <div class="mt-8">
        <UButton to="/macacos" size="lg" variant="solid">Ver Todos os Macacos</UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const items = [
  {
    title: 'Classes',
    description: 'Descubra as classes disponíveis no jogo.',
    link: '/classes',
    icon: 'i-heroicons-academic-cap',
  },
  {
    title: 'Sprites',
    description: 'Visualize os sprites dos personagens.',
    link: '/sprites',
    icon: 'i-heroicons-photo',
  },
  {
    title: 'Macacos',
    description: 'Veja a lista completa de macacos.',
    link: '/macacos',
    icon: 'i-heroicons-light-bulb',
  },
];

const balloons = [
  { src: '/images/dart_monkey.jpg' },
  { src: '/images/bomber.jpg' },
  { src: '/images/dart_monkey.jpg' },
  { src: '/images/dart_monkey.jpg' },
  { src: '/images/dart_monkey.jpg' },
];

// Gera estilos aleatórios para os balões
const getBalloonStyle = (index) => {
  const delay = Math.random() * 5;  // Tempo de delay para a animação
  const left = Math.random() * 100; // Posição aleatória horizontal
  const size = Math.random() * 30 + 50; // Tamanho aleatório do balão
  const speed = Math.random() * 5 + 5; // Velocidade da animação

  return {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animation: `floatBalloon ${speed}s linear ${delay}s infinite`,
    zIndex: 9999, // Garante que os balões fiquem acima de outros elementos
  };
};
</script>

<style scoped>
/* Animação dos balões subindo */
@keyframes floatBalloon {
  0% {
    transform: translateY(100vh); /* Início fora da tela, na parte inferior */
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh); /* Subindo até fora da tela, na parte superior */
    opacity: 0;
  }
}

/* Estilo dos balões */
.balloon {
  position: absolute;
  bottom: -50px; /* Inicia fora da tela, na parte inferior */
  animation-timing-function: linear;
  z-index: 9999; /* Faz os balões ficarem acima de tudo */
}

/* Fundo com imagem e efeito blur */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/meadow.webp'); /* Substitua pelo caminho correto da imagem */
  background-size: cover;
  background-position: center;
  filter: blur(10px); /* Ajuste o valor do blur conforme necessário */
  z-index: -1; /* Garantir que o fundo fique atrás do conteúdo */
}
</style>
