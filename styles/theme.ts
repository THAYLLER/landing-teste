import { theme } from '@chakra-ui/react'

const Customtheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600
  },
  radii: {
    ...theme.radii
  },
  fontSize: {
    ...theme.fontSizes
  },
  colors: {
    ...theme.colors,
    primary: {
      700: '#fff'
    }
  }
}

export default Customtheme
