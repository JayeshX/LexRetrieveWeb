export interface Citation {
  id: string
}
export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  citations?: string[]
}

// export interface Message {
//   id: string
//   role: 'user' | 'assistant'
//   content: string
//   citations?: string[]
//   timestamp: number
// }

export interface ChatSession {
  id: string
  title: string
  messages: Message[]
}
