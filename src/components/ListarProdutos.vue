<script lang="ts" setup>
import { listarProdutos } from '@/services/produtoService'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Produto } from '../types/index'
import { ref, onMounted } from 'vue'

let produtos = ref<Produto[]>([])

const emit = defineEmits<{
  (e: 'excluir', id: number): void
}>()

async function excluir(id: number) {
  try {
    emit('excluir', id)
    alert('Produto excluído com sucesso!')
    await carregarProdutos()
  } catch (error) {
    console.error('Erro ao excluir produto:', error)
    alert('Erro ao excluir produto')
  }
}
async function carregarProdutos() {
  try {
    produtos.value = await listarProdutos()
  } catch {
    console.error('Erro ao listar produtos:', Error)
  }
}
onMounted(carregarProdutos)
</script>
<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Produto</th>
        <th>Preço</th>
        <th>Deletar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, indice) in produtos" :key="indice">
        <td>{{ p.nome }}</td>
        <td>{{ p.preco }}</td>
        <td>
          <button class="btn btn-danger" @click="excluir(p.id)">Deletar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
