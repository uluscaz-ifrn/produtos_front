<script setup lang="ts">
import { ref } from 'vue'

// Emitir o produto preenchido para o componente pai
const emit = defineEmits<{
  (e: 'submitProduto', produto: { nome: string; preco: number }): void
}>()

const produto = ref({ nome: '', preco: 0 })

function emitirProduto() {
  emit('submitProduto', { ...produto.value })
  produto.value.nome = ''
  produto.value.preco = 0
}
</script>
<template>
  <form @submit.prevent="emitirProduto">
    <input type="text" class="form-control mb-2" placeholder="Produto" v-model="produto.nome" />
    <input type="number" class="form-control mb-2" placeholder="Preço" v-model="produto.preco" />
    <input type="submit" value="Cadastrar" class="btn btn-primary" />
  </form>
</template>
<style scoped>
form {
  width: 50%;
  margin: 20px auto;
  text-align: center;
}
</style>
