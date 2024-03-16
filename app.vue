<script lang="ts" setup>
const { openDialog } = useDialog()

openDialog('form3')
</script>

<template>
  <div>
    <div class="inline-flex gap-4 p-2 text-white">
      <div
        class="inline-flex flex-col gap-4 [&>button]:bg-black [&>button]:p-2"
      >
        <button @click="openDialog('form1')">
          open sidebar with :floating-label="true"
        </button>

        <button @click="openDialog('form2')">
          open sidebar default (without floating-label)
        </button>

        <button @click="openDialog('no-form')">
          open sidebar without FormKit
        </button>
      </div>
      <div
        class="inline-flex flex-col gap-4 [&>button]:bg-black [&>button]:p-2"
      >
        <button @click="openDialog('form1-headless')">
          open headless sidebar with :floating-label="true"
          <span class="text-red-600">(broken animation)</span>
        </button>

        <button @click="openDialog('form2-headless')">
          open headless sidebar default (without floating-label)
        </button>

        <button @click="openDialog('no-form-headless')">
          open headless sidebar without FormKit
        </button>
      </div>
    </div>

    <div>
      <Sidebar id="form1">
        <template #body>
          <FormKit type="text" :floating-label="true" label="Label" />
        </template>
      </Sidebar>

      <Sidebar id="form2">
        <template #body>
          <FormKit type="text" label="Label" />
        </template>
      </Sidebar>

      <Sidebar id="no-form">
        <template #body> Body without formkit </template>
      </Sidebar>
    </div>
    <div>
      <SidebarHeadless id="form1-headless">
        <template #body>
          <FormKit type="text" :floating-label="true" label="Label" />
        </template>
      </SidebarHeadless>

      <SidebarHeadless id="form2-headless">
        <template #body>
          <FormKit type="text" label="Label" />
        </template>
      </SidebarHeadless>

      <SidebarHeadless id="no-form-headless">
        <template #body> Body without formkit </template>
      </SidebarHeadless>
    </div>
  </div>
</template>
