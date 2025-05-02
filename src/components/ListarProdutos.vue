<script lang="ts" setup>
import { carregarProdutos } from '@/services/produtoService'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Produto } from '../types/index'
defineProps <{
  Produtos: Produto[]
}>()

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
      <tr v-for="(p, indice) in Produtos" :key="indice">
        <td>{{ p.nome }}</td>
        <td>{{ p.preco }}</td>
        <td>
          <button class="btn btn-danger" @click.prevent="excluir(p.id)">Deletar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
