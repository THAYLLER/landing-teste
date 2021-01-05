import '@emotion/react'

import theme from '../styles/theme'

type ThemeType = typeof theme

declare module '@emotion/react' {
  export type Styled = ThemeType
}
