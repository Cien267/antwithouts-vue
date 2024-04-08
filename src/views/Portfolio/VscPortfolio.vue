<script setup lang="ts">
import VscHeadPanel from '@/components/Portfolio/VscTheme/VscHeadPanel.vue'
import VscLeftBar from '@/components/Portfolio/VscTheme/VscLeftBar.vue'
import VscFolderStructure from '@/components/Portfolio/VscTheme/VscFolderStructure.vue'
import VscCodeContent from '@/components/Portfolio/VscTheme/VscCodeContent.vue'
import { ref, type Ref, provide } from 'vue'
import type { VscThemeDataType } from '@/types/portfolio'

const selectedFiles: Ref<VscThemeDataType[]> = ref([])
const openingFile: Ref<VscThemeDataType> = ref({
  id: 0,
  name: '',
  level: 0,
  is_directory: false,
  icon: '',
  parent_id: 0,
  content: ''
})
provide('selectedFiles', selectedFiles)
provide('openingFile', openingFile)
</script>

<template>
  <div class="vsc-container">
    <vsc-head-panel />
    <div class="vsc-editor flex justify-start items-start">
      <vsc-left-bar /> <vsc-folder-structure /> <vsc-code-content />
    </div>
  </div>
</template>
<style scoped>
.vsc-container {
  background-color: #1f1f1f;
}
</style>
