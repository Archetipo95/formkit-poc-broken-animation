export const useDialog = (id: string = '') => {
  const dialogs = useState(
    'useDialog__dialogs',
    () => ({}) as Record<string, boolean>
  )

  const dialogID = ref(id)

  const initDialog = () => {
    dialogs.value[dialogID.value] =
      dialogID.value in dialogs.value ? dialogs.value[dialogID.value] : false
  }

  const isDialogOpen = computed(() => {
    return dialogs.value[dialogID.value]
  })

  const setDialog = (id: string, state: boolean) => {
    if (id in dialogs.value) {
      dialogs.value[id] = state
    }
  }

  const openDialog = (id?: string) => {
    const dialogToOpen = id ? id : unref(dialogID)
    Object.keys(dialogs.value).includes(dialogToOpen) &&
      setDialog(dialogToOpen, true)
  }

  const closeDialog = (id?: string) => {
    const dialogToOpen = id ? id : unref(dialogID)
    Object.keys(dialogs.value).includes(dialogToOpen) &&
      setDialog(dialogToOpen, false)
  }

  initDialog()

  return {
    isDialogOpen,
    openDialog,
    closeDialog,
  }
}
