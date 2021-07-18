import { css } from '@emotion/react'

const colors = css`
  --main_black: #000;
  --main_white: #fff;
  --main_gray: #f0f0f0;
  --main_pink: #ff1787;
  --main_yellow: #e4f70c;
  --main_green: #06ccb5;
  --main_dark_blue: #19141c;
  --secondary_white: #f4f4f4;
  --main_blur: rgba(0, 0, 0, 0.8);
  --secondary_blur: rgba(255, 255, 255, 0.7);
  --pink_blur: rgba(148, 18, 87, 0.7);
`

const sizes = {
  sm: '500px',
  md: '769px',
  lg: '972px',
  xl: '1200px',
}

const device = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export { colors, sizes, device }
