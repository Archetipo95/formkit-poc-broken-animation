import {
  createFloatingLabelsPlugin,
  createAutoAnimatePlugin,
} from '@formkit/addons'
import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme'
import '@formkit/addons/css/floatingLabels'

export default defineFormKitConfig(() => {
  return {
    plugins: [createAutoAnimatePlugin(), createFloatingLabelsPlugin()],
    icons: {
      ...genesisIcons,
    },
    config: {
      rootClasses,
    },
  }
})
