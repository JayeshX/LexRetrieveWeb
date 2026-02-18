<template>
  <!-- FLOAT BUTTON -->
  <button
    @click="toggle"
    class="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800"
  >
    💬
  </button>

  <!-- CHAT PANEL -->
  <div
    v-if="open"
    class="fixed bottom-28 right-6 w-[420px] h-[400px] bg-white rounded-xl border border-gray-200 shadow-2xl flex flex-col z-[9999]"
  >
  <!-- HEADER -->
    <div class="p-5 border-b bg-[#DADADA] rounded-t-xl">
  <h2 class="font-semibold text-lg text-gray-900">
    Indian Legal Assistant
  </h2>
  <p class="text-sm text-gray-500">
    Ask IPC related questions
  </p>
</div>

    <!-- MESSAGES -->
    <div
  ref="scrollBox"
  class="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gray-50">

      <div
  v-for="m in messages"
  :key="m.id"
  class="flex"
  :class="m.role === 'user' ? 'justify-end' : 'justify-start'"
>
  <div
    class="
      max-w-[75%]
      rounded-2xl
      px-4 py-3
      text-sm
      shadow-sm
    "
    :class="
      m.role === 'user'
        ? 'bg-black text-white rounded-br-md'
        : 'bg-gray-100 text-gray-800 rounded-bl-md'
    "
  >
    {{ m.content }}

    <div v-if="m.citations?.length" class="mt-3 flex flex-wrap gap-2">
  <a
    v-for="c in m.citations"
    :key="c"
    :href="`https://devgan.in/ipc/section/${c}/`"
    target="_blank"
    rel="noopener noreferrer"
    class="
      px-2 py-1
      bg-indigo-50
      text-indigo-700
      text-xs
      rounded-md
      border border-indigo-100
      hover:bg-indigo-100
      transition
    "
  >
    Section {{ c }}
  </a>
</div>

  </div>
</div>


      <p v-if="loading" class="text-sm text-gray-400">AI typing...</p>
    </div>

    <!-- INPUT -->
    <form
      @submit.prevent="send"
      class="p-4 border-t flex gap-2"
    >
      <input
  v-model="text"
  placeholder="Type your legal question..."
  class="
    flex-1
    bg-white
    text-gray-900
    placeholder-gray-400
    border border-gray-300
    rounded-lg
    px-4 py-2
    text-sm
    focus:outline-none
    focus:ring-2 focus:ring-black
    focus:border-transparent
  "
/>


      <button
  class="
    bg-black text-white
    px-5 py-2
    rounded-lg
    font-medium
    hover:bg-gray-800
    active:scale-95
    transition
    disabled:opacity-50
  "
  :disabled="loading"
>
  Send
</button>

    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from "vue"
import { v4 as uuid } from "uuid"
import { askLegal } from "../services/api"
import type {Message} from "../types/chat"
// import type { Message } from "@/types/chat"

const STORAGE_KEY = "legal-widget-chat"

const open = ref(false)
const text = ref("")
const loading = ref(false)
const scrollBox = ref<HTMLDivElement | null>(null)

const messages = ref<Message[]>([])

/* ---------- LOAD / SAVE ---------- */

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) messages.value = JSON.parse(saved)

  if (messages.value.length === 0) {
    messages.value.push({
      id: uuid(),
      role: "assistant",
      content: "Hi, how can I help you today?"
    })
  }
})

watch(messages, () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value))
}, { deep: true })

/* ---------- UI ---------- */

function toggle() {
  open.value = !open.value
}

/* ---------- SEND MESSAGE ---------- */

async function send() {
  if (!text.value.trim()) return

  const userMsg: Message = {
    id: uuid(),
    role: "user",
    content: text.value
  }

  messages.value.push(userMsg)
  const query = text.value
  text.value = ""

  loading.value = true
  scrollToBottom()

  try {
    const res = await askLegal(query)

    messages.value.push({
      id: uuid(),
      role: "assistant",
      content: res.answer,
      citations: res.citations
    })
  } catch {
    messages.value.push({
      id: uuid(),
      role: "assistant",
      content: "Server error. Please try again."
    })
  }

  loading.value = false
  scrollToBottom()
}

/* ---------- SCROLL ---------- */

async function scrollToBottom() {
  await nextTick()
  scrollBox.value?.scrollTo({
    top: scrollBox.value.scrollHeight,
    behavior: "smooth"
  })
}
</script>
