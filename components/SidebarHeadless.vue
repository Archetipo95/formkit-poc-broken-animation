<script setup lang="ts">
import type { SidebarProps } from './Sidebar.props'

const { id } = defineProps<SidebarProps>()

const { isDialogOpen, closeDialog } = useDialog(id)
</script>

<template>
  <HeadlessTransitionRoot :show="isDialogOpen" as="template">
    <HeadlessDialog>
      <HeadlessTransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="alpha_layer fixed inset-0 z-[999] bg-white/80"></div>
      </HeadlessTransitionChild>

      <div
        class="fixed inset-0 z-[999] grid grid-cols-12"
        @click.stop="closeDialog()"
      >
        <div class="col-span-full !col-end-[-1] md:col-span-6 lg:col-span-4">
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-in"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="duration-300 ease-out"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <HeadlessDialogPanel
              class="flex h-dvh flex-col border border-l bg-white"
              @click.stop="() => {}"
            >
              <div class="sticky top-0 h-[100px] border">HEADER</div>

              <div class="flex-1 overflow-y-auto">
                <slot name="body" />
              </div>

              <div class="sticky bottom-0 left-0 right-0 h-[100px] border">
                FOOTER
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
