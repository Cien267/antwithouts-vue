<script setup lang="ts">
import VscHeadPanel from '@/components/Portfolio/VscTheme/VscHeadPanel.vue'
import VscLeftBar from '@/components/Portfolio/VscTheme/VscLeftBar.vue'
import VscFolderStructure from '@/components/Portfolio/VscTheme/VscFolderStructure.vue'
import VscCodeContent from '@/components/Portfolio/VscTheme/VscCodeContent.vue'
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
