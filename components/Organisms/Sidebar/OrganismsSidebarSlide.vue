<script setup lang="ts">
import type { SideSlideProps } from './OrganismsSidebarSlide.props'

const { id, disableClickToCloseOutside } = defineProps<SideSlideProps>()

const emit = defineEmits([
  'sidebar-closed',
  'action-button-click',
  'primary-click',
  'secondary-click',
])

const { statusDialog, closeDialog } = useDialog(id)

const canBeClosed = ref(false)

const closeSideSlide = () => {
  if (canBeClosed.value) {
    canBeClosed.value = false
    closeDialog()
    emit('sidebar-closed')
  }
}

// close dialog when clicking outside
const handleClickOnAlphaLayer = () => {
  if (disableClickToCloseOutside) return
  closeSideSlide()
}
</script>

<template>
  <HeadlessTransitionRoot
    :show="statusDialog"
    as="template"
    :class="{ 'pointer-events-none': !canBeClosed }"
    appear
  >
    <HeadlessDialog>
      <HeadlessTransitionChild
        as="template"
        enter="ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
        @after-enter="canBeClosed = true"
      >
        <div
          class="alpha_layer fixed inset-0 z-[999] opacity-80"
          :class="{
            'bg-white': !isAlphaLayerTransparent,
          }"
        />
      </HeadlessTransitionChild>

      <HeadlessTransitionChild
        as="template"
        enter="transition-transform ease-out delay-200"
        enter-from="translate-x-full"
        enter-to="translate-x-0"
        leave="transition-transform ease-out"
        leave-from="translate-x-0"
        leave-to="translate-x-full"
      >
        <div
          class="grid-container fixed inset-0 z-[999]"
          @click.stop="handleClickOnAlphaLayer"
        >
          <div class="col-span-full !col-end-[-1] md:col-span-6 lg:col-span-4">
            <HeadlessDialogPanel
              class="border-primitives-grey-100 flex h-screen flex-col border-l bg-white"
            >
              <div class="positive-margin sticky top-0 h-[100px]">Header</div>

              <div class="positive-margin flex-1 overflow-y-auto p-[1px]">
                <slot name="body" />
              </div>

              <div class="sticky bottom-0 left-0 right-0 h-[100px]">Footer</div>
            </HeadlessDialogPanel>
          </div>
        </div>
      </HeadlessTransitionChild>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
