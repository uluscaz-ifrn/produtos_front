<script setup lang="ts">
import ListarProdutos from '../components/ListarProdutos.vue'
import Form from '../components/Form.vue'
import { cadastrarProduto, produtos, carregarProdutos, excluirProduto } from '@/services/produtoService'
import { onMounted } from 'vue'

async function cadastrar(produto: { nome: string; preco: number }) {
  try {
    await cadastrarProduto(produto)
    alert('Produto cadastrado com sucesso!')
   carregarProdutos()
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error)
    alert('Erro ao cadastrar produto')
  }
}
onMounted(carregarProdutos)
</script>
<template>
  <Form @submitProduto="cadastrar" />
  <ListarProdutos @excluir="excluirProduto" :Produtos="produtos"/>
</template>
