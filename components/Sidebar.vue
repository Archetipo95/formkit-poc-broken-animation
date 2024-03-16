<script setup lang="ts">
import type { SidebarProps } from './Sidebar.props'

const { id } = defineProps<SidebarProps>()

const { isDialogOpen, closeDialog } = useDialog(id)
</script>

<template>
  <Transition>
    <div v-show="isDialogOpen">
      <div class="alpha_layer fixed inset-0 z-[999] bg-white/80" />

      <Transition
        appear
        enter-active-class="transition-transform duration-500 ease-in"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform ease-out"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-show="isDialogOpen"
          class="fixed inset-0 z-[999] grid grid-cols-12"
          @click.stop="closeDialog()"
        >
          <div class="col-span-full !col-end-[-1] md:col-span-6 lg:col-span-4">
            <div
              class="border-primitives-grey-100 flex h-screen flex-col border-l bg-white"
              @click.stop="() => {}"
            >
              <div class="sticky top-0 h-[100px] border">HEADER</div>

              <div class="flex-1 overflow-y-auto">
                <slot name="body" />
              </div>

              <div class="sticky bottom-0 left-0 right-0 h-[100px] border">
                FOOTER
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
