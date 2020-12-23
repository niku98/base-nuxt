import { TranslateResult } from 'vue-i18n'

export interface NavBarItem {
  title: string | TranslateResult
  to: string
  exact?: boolean
  children?: NavBarItem
}
