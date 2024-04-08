<script setup lang="ts">
import structureData from '../../../../public/data/vsc-portfolio.json'
import type { VscThemeDataType } from '@/types/portfolio'
import { inject, ref, computed } from 'vue'

const selectedFiles = ref(inject('selectedFiles') as VscThemeDataType[])
const openingFile = ref(inject('openingFile') as VscThemeDataType)

const selectFile = (file: VscThemeDataType) => {
  openingFile.value = file
}
</script>
<template>
  <div
    id="list-files-wrapper"
    class="w-[calc(100% - 200px)] overflow-y-hidden overflow-x-auto flex justify-start bg-[#121212]"
  >
    <div
      v-for="(file, index) in selectedFiles"
      :key="index"
      :class="[
        openingFile.id === file.id ? 'bg-[#1f1f1f]' : 'bg-[#121212] border-b',
        ' p-6 px-12 text-[#dddddd] flex items-center gap-10 border-r border-solid border-[#3d3b3b] cursor-pointer'
      ]"
      @click="selectFile(file)"
    >
      <span v-html="file.icon" class="mb-1"></span>
      <span class="text-14">{{ file.name }}</span>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  background: none;
  display: none;
}
</style>
