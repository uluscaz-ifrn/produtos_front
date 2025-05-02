import axios from 'axios'
const baseUrl = 'http://localhost:3000/produtos'
export async function listarProdutos() {
  const resultado = await axios.get(baseUrl)
  const produtos = resultado.data
  return produtos
}
export async function cadastrarProduto(produto: { nome: string; preco: number }) {
  const resultado = await axios.post(baseUrl, produto)
  const produtoCadastrado = resultado.data
  return produtoCadastrado
}
export async function excluirProduto(id: number) {
  const resultado = await axios.delete(`${baseUrl}/${id}`)
  return resultado.data
}
