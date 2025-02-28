<script setup>
const { data, pending, error } = useFetch('/api/macacos');

// Garante que macacos seja sempre um array, evitando erros de renderização
const macacos = computed(() => data.value || []);
</script>

<template>
  <div class="background-image">
  </div>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Macacos</h1>

    <div v-if="pending">Carregando...</div>
    <div v-else-if="error" class="text-red-500">Erro ao carregar os dados</div>
    <div v-else-if="macacos.length === 0">Nenhum macaco encontrado.</div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="macaco in macacos" :key="macaco.nome" class="border p-4 rounded-lg shadow">
        <img 
          v-if="macaco.image" 
          :src="macaco.image" 
          :alt="macaco.nome" 
          class="w-full h-80 object-cover mb-2 rounded-lg"
        >
        <h2 class="text-lg font-semibold">{{ macaco.nome }}</h2>
        <p class="text-gray-600">Classe: {{ macaco.classe }}</p>
        <p class="text-gray-800 font-bold">Custo: ${{ macaco.custo }}</p>

        <h3 v-if="macaco.upgrades && macaco.upgrades.length" class="mt-2 font-semibold">Upgrades:</h3>
        <ul v-if="macaco.upgrades && macaco.upgrades.length" class="list-disc pl-4">
          <li v-for="upgrade in macaco.upgrades" :key="upgrade.nome">
            {{ upgrade.nome }} - ${{ upgrade.custo }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style>
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
