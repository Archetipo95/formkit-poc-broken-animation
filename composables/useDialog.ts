export const useDialog = (id: string = '') => {
  const _Dialogs = useState('useDialog__dialogs', () => ({}) as any)

  const dialogId: Ref<string> = id ? ref(id) : ref('')

  const statusDialog =
    computed<boolean>(
      () => _Dialogs.value[unref(dialogId) as keyof typeof _Dialogs]
    ) ?? false

  const initDialog = () => {
    _Dialogs.value[unref(dialogId)] =
      unref(dialogId) in _Dialogs.value
        ? _Dialogs.value[unref(dialogId)]
        : false
  }

  const switchDialogState = (id: string, state: boolean) => {
    if (id in _Dialogs.value) {
      _Dialogs.value[id] = state
    }
  }

  const openDialog = (id?: string) => {
    const dialogToOpen = typeof id === 'string' ? id : unref(dialogId)
    Object.keys(_Dialogs.value).includes(dialogToOpen) &&
      switchDialogState(dialogToOpen, true)
  }

  const closeDialog = (id?: string) => {
    const dialogToOpen = typeof id === 'string' ? id : unref(dialogId)
    Object.keys(_Dialogs.value).includes(dialogToOpen) &&
      switchDialogState(dialogToOpen, false)
  }

  initDialog()

  return {
    statusDialog,
    openDialog,
    closeDialog,
  }
}
