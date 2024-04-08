<script setup lang="ts">
import structureData from '../../../../public/data/vsc-portfolio.json'
import { computed, ref, type Ref, inject } from 'vue'
import type { VscThemeDataType } from '@/types/portfolio'

const heightOfBar = computed(() => {
  return window.innerHeight - 26
})

const structureList: Ref<VscThemeDataType[]> = ref(structureData.structure)
structureList.value.map((item: any) => {
  if (item.is_directory) {
    item.expanded = true
  }
})

const shownStructureList = computed(() => {
  return structureList.value.filter((data: any) => {
    const parentIndex = structureList.value.findIndex((item: any) => item.id === data.parent_id)
    if (parentIndex !== -1) {
      if (
        structureList.value[parentIndex].expanded != undefined &&
        !structureList.value[parentIndex].expanded
      ) {
        return false
      }
    }
    return true
  })
})

const selectedFiles = ref(inject('selectedFiles') as VscThemeDataType[])
const openingFile = ref(inject('openingFile') as VscThemeDataType)
const handleClick = (data: any) => {
  if (data.is_directory) {
    data.expanded = !data.expanded
  } else {
    openingFile.value = data
    const index = selectedFiles.value.findIndex((item: VscThemeDataType) => item.id === data.id)
    if (index === -1) {
      selectedFiles.value.push(data)
    }
  }
}
</script>
<template>
  <div
    class="vscode-folder-structure w-[200px] bg-[#121212] border-r-[0.1px] border-solid border-[#3d3b3b] overflow-auto"
    :style="`height: ${heightOfBar}px`"
  >
    <div class="text-[#dddddd] flex justify-between items-center px-24 pt-12 pb-6">
      <div class="text-14">EXPLORER</div>
      <div><i class="fa-light fa-ellipsis"></i></div>
    </div>
    <div class="text-[#dddddd] flex justify-start items-center gap-8 px-4 pt-8">
      <i class="fa-light fa-angle-down"></i>
      <span class="text-14 font-700">{{ structureData.project_name }}</span>
    </div>
    <div
      v-for="(data, index) in shownStructureList"
      :key="index"
      :style="`padding-left: ${22 * data.level}px`"
      class="text-[#dddddd] flex justify-start items-center gap-8 py-3 hover:bg-[#353434] hover:cursor-pointer"
      @click="handleClick(data)"
    >
      <i class="fa-light fa-angle-down" v-if="data.is_directory && data.expanded"></i>
      <i class="fa-light fa-angle-right" v-else-if="data.is_directory && !data.expanded"></i>
      <span v-html="data.icon"></span>
      <span class="text-14">{{ data.name }}</span>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar-thumb {
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0.1);
}
</style>
