<script setup lang="ts">
import ListProduct from '../components/ListarProdutos.vue'
import { excluirProduto } from '@/services/produtoService'
import Form from '../components/Form.vue'
import { cadastrarProduto } from '@/services/produtoService'
async function cadastrar(produto: { nome: string; preco: number }) {
  try {
    await cadastrarProduto(produto)
    alert('Produto cadastrado com sucesso!')
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error)
    alert('Erro ao cadastrar produto')
  }
}
</script>
<template>
  <Form @submitProduto="cadastrar" />
  <ListProduct @excluir="excluirProduto" />
</template>
