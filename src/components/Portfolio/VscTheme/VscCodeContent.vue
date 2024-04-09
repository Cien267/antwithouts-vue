<script setup lang="ts">
import structureData from '../../../../public/data/vsc-portfolio.json'
import type { VscThemeDataType } from '@/types/portfolio'
import { inject, ref, type Ref, computed } from 'vue'

const selectedFiles = ref(inject('selectedFiles') as VscThemeDataType[])
const openingFile = ref(inject('openingFile') as VscThemeDataType)

// ==================== TAB LIST ====================
const selectFile = (file: VscThemeDataType) => {
  openingFile.value = file
}

const closeFile = (file: VscThemeDataType) => {
  console.log(file)
  const index = selectedFiles.value.findIndex((item: VscThemeDataType) => item.id === file.id)
  if (index !== -1) {
    selectedFiles.value.splice(index, 1)
    if (openingFile.value.id === file.id) {
      openingFile.value = selectedFiles.value[Object.keys(selectedFiles.value).length - 1]
    }
  }
}

const hoveringFile: Ref<VscThemeDataType> = ref({
  id: 0,
  name: '',
  level: 0,
  is_directory: false,
  icon: '',
  parent_id: 0,
  content: ''
})

const setHoveringFile = (file: VscThemeDataType) => {
  hoveringFile.value = file
}

const resetHoveringFile = () => {
  hoveringFile.value = {
    id: 0,
    name: '',
    level: 0,
    is_directory: false,
    icon: '',
    parent_id: 0,
    content: ''
  }
}

const showCloseFileIcon = (file: VscThemeDataType) => {
  return hoveringFile.value.id == file.id || openingFile.value.id === file.id
}
// ==================== END TAB LIST ====================

// ==================== FILE ADDRESS ====================
const getFileAddress = () => {
  let file = JSON.parse(JSON.stringify(openingFile.value))
  let result = [file.name] ?? []

  while (true) {
    let index = structureData.structure.findIndex(
      (item: VscThemeDataType) => item.id === file.parent_id
    )
    console.log(123)
    if (index !== -1) {
      let parent = structureData.structure[index]
      result.unshift(parent.name)
      file = parent
    } else {
      break
    }
  }
  return result.join(' > ')
}
// ==================== END FILE ADDRESS ====================

// ==================== FILE CONTENT ====================
const content = ref(null)
const countContentLines = computed(() => {
  if (content.value) {
    return content.value.clientHeight / 20
  }
  return 0
})
// ==================== END FILE CONTENT ====================
</script>
<template>
  <div>
    <div class="overflow-y-hidden overflow-x-auto flex justify-start bg-[#121212]">
      <div
        v-for="(file, index) in selectedFiles"
        :key="index"
        :class="[
          openingFile.id === file.id
            ? 'bg-[#1f1f1f] pb-7 border-t border-t-[#5454b3]'
            : 'bg-[#121212] border-b border-t',
          ' p-6 px-12 text-[#dddddd] flex items-center gap-10 border-r border-solid border-[#3d3b3b] cursor-pointer hover:bg-[#1f1f1f]'
        ]"
        @click="selectFile(file)"
        @mouseover="setHoveringFile(file)"
        @mouseleave="resetHoveringFile"
      >
        <span v-html="file.icon" class="mb-1"></span>
        <span class="text-14" :class="showCloseFileIcon(file) ? '' : 'pr-23'">{{ file.name }}</span>
        <i
          :class="[
            showCloseFileIcon(file) ? '' : 'hidden',
            'fa-light fa-xmark text-12 p-2 hover:bg-[#474747] hover:rounded-5'
          ]"
          @click.stop
          @click="closeFile(file)"
        ></i>
      </div>
      <div class="w-full border-b border-solid border-[#3d3b3b]"></div>
    </div>
    <div class="text-[#bab9b9] px-16 py-4 text-14">{{ getFileAddress() }}</div>
    <div class="flex justify-start items-start">
      <div class="flex flex-col justify-start items-center text-[#8e8c8c] text-14 px-20">
        <span v-for="i in countContentLines">{{ i }}</span>
      </div>
      <div v-html="openingFile.content" ref="content"></div>
      <!-- <div class="flex flex-col justify-start items-start text-14 text-[#dddddd] pr-20">
        <div>Hi there!</div>
        <br />
        <div>
          My name is Kiên and I am Vietnamese. The word 'ant', translated From English to
          Vietnamese, is 'kiến'. However if you don't type 's' on your unicode keyboard, my name
          comes out. That's this website address. :D
        </div>
        <br />
        <div>
          As a Web Developer specializing in PHP Laravel and Vue.js, I bring a wealth of experience
          in developing robust and user-friendly web applications. With a solid foundation in
          backend development using Laravel and frontend expertise in Vue.js, I am adept at creating
          seamless and responsive digital experiences. My track record includes designing and
          implementing scalable solutions, integrating complex features, and ensuring optimal
          performance across platforms. Passionate about staying updated with the latest
          technologies and best practices, I thrive in dynamic environments where I can leverage my
          skills to deliver innovative solutions that meet and exceed client expectations.
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  background: none;
  display: none;
}
</style>
