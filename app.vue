<script lang="ts" setup>
const { openDialog } = useDialog()

//openDialog('form3')
onMounted(() => {
  openDialog('form1')
})
</script>

<template>
  <div>
    <div
      class="inline-flex flex-col gap-4 p-2 text-white [&>button]:bg-black [&>button]:p-2"
    >
      <button @click="openDialog('form1')">
        open sidebar with :floating-label="true"
        <span class="text-red-600">(broken animation)</span>
      </button>

      <button @click="openDialog('form3')">
        open sidebar default (without floating-label)
      </button>

      <button @click="openDialog('normal')">
        open sidebar without FormKit
      </button>
    </div>

    <Sidebar id="form1">
      <template #body>
        <FormKit type="text" :floating-label="true" label="Label" />
      </template>
    </Sidebar>

    <Sidebar id="form3">
      <template #body>
        <FormKit type="text" label="Label" />
      </template>
    </Sidebar>

    <Sidebar id="normal">
      <template #body> Body without formkit </template>
    </Sidebar>
  </div>
</template>
