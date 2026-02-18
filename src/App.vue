<!-- <template>
  <div class="bg-white">
  <CompareCard />
  </div>
  <ChatWidget />
  
</template>

<script setup lang="ts">
import ChatWidget from "./components/ChatWidget.vue"
import CompareCard from "./components/CompareCard.vue"
</script> -->
<template>
  <ChatWidget />
  <div>
    <!-- Navbar -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <img src="C:\Users\User\Desktop\legrag\src\assets\logo.png" alt="Logo" class="h-10 w-10 rounded-lg" />
            <span class="text-2xl font-bold text-gray-900">LexRetrieve</span>
          </div>
          <div class="hidden md:flex space-x-4">
            <NuxtLink to="/chat" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Chat</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div class="flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div class="relative">
            <img 
              src="C:\Users\User\Desktop\legrag\src\assets\lawlogo.jpg" 
              alt="IPC Multimodal RAG" 
              class="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl ring-4 ring-white/50"
            />
          </div>
        </div>
        <div class="lg:col-start-2">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            IPC Legal Assistant with Multimodal RAG
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Retrieve accurate Indian Penal Code (IPC) sections using advanced multimodal RAG, combining text and structured data for grounded, hallucination-reduced responses.
          </p>
        </div>
      </div>
    </section>

    <!-- CompareCard -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CompareCard />
      </div>
    </section>

    <!-- Results Table -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Performance Results</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white shadow-xl rounded-2xl border border-gray-200">
            <thead>
              <tr class="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
                <th class="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Metric</th>
                <th class="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">RAG (Ours)</th>
                <th class="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Baseline</th>
                <th class="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Improvement</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <!-- <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Top-1 Accuracy</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.667</td>
                <td class="px-6 py-4 text-center text-lg text-red-600">0.500</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">+0.167</td>
              </tr> -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Top-1 Accuracy</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.83</td>
                <td class="px-6 py-4 text-center text-lg text-red-600">0.500</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">66%</td>
              </tr>
              <!-- <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Exact Match Accuracy</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.167</td>
                <td class="px-6 py-4 text-center">-</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">N/A</td>
              </tr> -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Avg Precision</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.9</td>
                <td class="px-6 py-4 text-center text-lg text-red-600">0.389</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">+0.511</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Avg Recall</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.867</td>
                <td class="px-6 py-4 text-center text-lg text-red-600">0.33</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">+0.537</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Avg F1</td>
                <td class="px-6 py-4 text-center text-2xl font-bold text-green-600">0.853</td>
                <td class="px-6 py-4 text-center text-2xl text-red-600">0.3</td>
                <td class="px-6 py-4 text-center text-2xl font-bold text-emerald-600">+0.553</td>
              </tr>
              <!-- <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">MRR</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.667</td>
                <td class="px-6 py-4 text-center">-</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">N/A</td>
              </tr> -->
              <!-- <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Grounded Answer Rate</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0.667</td>
                <td class="px-6 py-4 text-center">-</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">N/A</td>
              </tr> -->
              <tr class="hover:bg-gray-50 bg-red-50">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Hallucination Rate</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-green-600">0</td>
                <td class="px-6 py-4 text-center text-2xl font-bold text-red-600">0.500</td>
                <td class="px-6 py-4 text-center text-lg font-bold text-emerald-600">-0.500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ChatWidget from "./components/ChatWidget.vue"
import CompareCard from "./components/CompareCard.vue"
// No props/state needed; add if CompareCard requires props
</script>
