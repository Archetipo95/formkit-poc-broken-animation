<script lang="ts" setup>
import type { InputsTextFieldsProps } from '@design-system/components/Inputs/InputsTextFields.props'

const inputsTextFieldsProps: InputsTextFieldsProps = {
  label: 'Label',
  name: 'name',
}

const { openDialog } = useDialog()

openDialog('form')
</script>

<template>
  <div>
    <div class="flex gap-4">
      <button class="bg-black p-2 text-white" @click="openDialog('form')">
        open form dialog
      </button>

      <button class="bg-black p-2 text-white" @click="openDialog('normal')">
        open normal dialog
      </button>
    </div>

    <p v-for="i in 20" :key="i" class="mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
      sapiente debitis, velit eius ducimus, labore minus dolores, fuga quisquam
      ad assumenda veritatis nisi. Suscipit porro illum accusantium a omnis!
    </p>

    <OrganismsSidebarSlide id="form">
      <template #body>
        <FormKit type="form">
          <InputsTextFields v-bind="inputsTextFieldsProps" />
        </FormKit>
      </template>
    </OrganismsSidebarSlide>

    <OrganismsSidebarSlide id="normal">
      <template #body> THIS IS A NORMAL DIALOG </template>
    </OrganismsSidebarSlide>
  </div>
</template>
