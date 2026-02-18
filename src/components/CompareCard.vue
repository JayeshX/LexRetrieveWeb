<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-slate-900">Model Performance Comparison</h2>
      <p class="text-slate-500">Q: How much an offender can be fine can be extended for?</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
      
      <div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
        <div class="bg-slate-100 px-4 py-2 border-b border-slate-200">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Baseline Model</span>
        </div>
        <div class="p-6">
          <h5 class="mb-3 text-slate-800 text-xl font-semibold">Wrong Section and info</h5>
          <p class="text-slate-600 leading-relaxed font-light italic">
            "According to Section 34 of the Indian Penal Code, the maximum fine that can be imposed on an offender is ₹5,000. However, this amount can be extended up to ₹10,000 in cases where the offence is punishable with a fine that extends to ₹10,000 or more. This means that the court has the discretion to impose a fine of up to ₹10,000 in cases where the offence is punishable with a fine of ₹10,000 or more, but not exceeding ₹20,000. Beyond that, the court cannot impose a fine exceeding ₹20,000. Therefore, the maximum fine that can be extended for an offender is ₹10,000."
          </p>
          <div class="mt-6 flex items-center text-red-500 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lacks specific context
          </div>
        </div>
      </div>

      <div class="relative flex flex-col bg-white shadow-md border-2 border-indigo-500 rounded-xl overflow-hidden">
        <div class="bg-indigo-600 px-4 py-2 border-b border-indigo-700">
          <span class="text-xs font-bold uppercase tracking-wider text-white">RAG System (Augmented)</span>
        </div>
        <div class="p-6">
          <h5 class="mb-3 text-slate-800 text-xl font-semibold">Context-Aware Response</h5>
          <p class="text-slate-600 leading-relaxed font-light">
            "According to Section 63 of the Indian Penal Code, where no sum is expressed to which a fine may extend, the amount of fine to which the offender is liable is unlimited, but shall not be excessive. Therefore, the offender can be fined an unlimited amount, but the fine should not be excessive."
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md border border-indigo-100">
              Section: 63 
            </span>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md border border-indigo-100">
              Section: 65 
            </span>
          </div>
          <div class="mt-6 flex items-center text-emerald-600 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Verified by internal data
          </div>
        </div>
      </div>

    </div>

    <div class="mt-8 max-w-2xl text-center">
      <div class="inline-block px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
        <p class="text-slate-700 text-sm">
          ✨ <b>The Difference:</b> RAG retrieves data before generating, eliminating hallucinations. whereas the baseline model relies solely on its training data, thereby giving section 34 establishes the principle of joint liability and not the fine amount
        </p>
      </div>
    </div>
  </div>
</template>
