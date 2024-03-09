<script setup lang="ts">
import type { InputsTextFieldsProps } from './InputsTextFields.props'
import type { FormKitNode } from '@formkit/core'

const props = withDefaults(defineProps<InputsTextFieldsProps>(), {
  invalidValue: false,
  validationVisibility: 'blur', //same as formkit default
  mask: '',
})

const emit = defineEmits<{
  (e: 'confirm', value?: string): void | string
  (e: 'remove'): void
}>()

const formkitRef = ref<null | { node: FormKitNode }>(null)

const node = computed(() => {
  return formkitRef.value?.node
})

// Password related methods
const isPasswordVisible = ref<null | boolean>(null)

const togglePasswordType = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const deleteValue = () => {
  node.value?.reset()
  emit('remove')
}
</script>

<template>
  <FormKit
    ref="formkitRef"
    :mask="mask"
    :tokens="tokens"
    type="text"
    :label="label"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :help="help"
    :errors="errors"
    :validation="validation"
    :validation-rules="validationRules"
    :validation-messages="validationMessages"
    :validation-visibility="validationVisibility"
    :floating-label="true"
  >
    <template #suffixIcon="{ state, value }">
      <div class="flex items-center gap-x-2">
        <!-- <button
          v-if="type === 'password'"
          type="button"
          :aria-label="$t('show_password')"
          @click.prevent="togglePasswordType"
          @mousedown.prevent
        >
          <IconsShowPassword class="h-5 w-5" />
        </button> -->

        <div v-if="!state?.empty" class="flex items-center">
          <button
            v-if="showConfirmButton && !invalidValue && state.valid"
            :aria-label="$t('confirmFn')"
            @click="emit('confirm')"
          >
            <IconsNext class="h-5 w-5" />
          </button>

          <button
            v-if="showRemoveButton"
            type="button"
            :aria-label="$t('removeFn')"
            @click.prevent="deleteValue"
            @mousedown.prevent
          >
            <IconsClose
              class="h-5 w-5"
              :class="[
                isCouponCode
                  ? 'text-neutral-black'
                  : 'text-primitives-grey-150',
              ]"
            />
          </button>

          <button v-if="invalidValue" :aria-label="$t('error')">
            <IconsWarning class="text-primitives-red h-5 w-5" />
          </button>
        </div>

        <!-- <button
          v-if="
            type === 'email' &&
            showConfirmButton &&
            !state?.empty &&
            state.valid
          "
          :aria-label="$t('confirm')"
          @click="emit('confirm', value)"
        >
          <IconsNext class="h-5 w-5" />
        </button> -->

        <IconsWarning
          v-if="
            showFeedbackIcons && state?.rules && !state.valid && state?.blurred
          "
          class="text-primitives-red h-5 w-5"
        />
      </div>
    </template>
    <template #help>
      <span
        class="text-primitives-black text-link-8 block w-full text-right underline"
      >
        {{ help }}
      </span>
    </template>
  </FormKit>
</template>

<style lang="scss" src="@design-system/assets/css/floatingLabelFormkit.scss" />
