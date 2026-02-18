// import axios from "axios"

// const API_URL = "https://brachydactylous-unparenthetically-braeden.ngrok-free.dev/rag"

// export async function queryRAG(query: string, top_k = 2) {
//   const res = await axios.post(API_URL, {
//     query,
//     top_k
//   })

//   return res.data
// }

import axios from "axios"

const API_URL="https://brachydactylous-unparenthetically-braeden.ngrok-free.dev/rag"

export async function askLegal(query: string, top_k = 2) {
  const res = await axios.post(API_URL, { query, top_k })
  return res.data
}
