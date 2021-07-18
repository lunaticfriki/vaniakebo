import { css } from '@emotion/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../../styles/utils'
import Footer from './footer'
import Header from './header'

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 5rem 1fr 5rem;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Global
        styles={css`
          :root {
            ${colors}
          }
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          body {
            font-family: Montserrat;
            font-size: 1rem;
            font-size: 16px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: var(--main_pink);
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
