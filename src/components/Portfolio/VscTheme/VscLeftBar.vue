<script setup lang="ts">
import { computed } from 'vue'
const heightOfBar = computed(() => {
  return window.innerHeight - 26
})
</script>

<template>
  <div
    class="vscode-left-bar bg-[#121212] text-[gray] text-14 border-r-[0.1px] border-solid border-[#3d3b3b] flex justify-between flex-col items-center"
    :style="`height: ${heightOfBar}px`"
  >
    <div class="flex justify-between flex-col items-center">
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <i class="fa-light fa-files text-30 text-400"></i>
      </div>
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <i class="fa-light fa-magnifying-glass rotate-90 text-30 text-400"></i>
      </div>
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <i class="fa-light fa-code-branch text-30 text-400"></i>
      </div>
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
          />
        </svg>
      </div>
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            d="M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"
          />
        </svg>
      </div>
    </div>
    <div class="flex justify-between flex-col items-center">
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <i class="fa-light fa-circle-user text-30 text-400"></i>
      </div>
      <div class="p-14 cursor-pointer hover:text-[#dddddd]">
        <i class="fa-light fa-gear text-30 text-400"></i>
      </div>
    </div>
  </div>
</template>
