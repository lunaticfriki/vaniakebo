import styled from '@emotion/styled'

const HeaderContainer = styled.header`
  display: grid;
  place-items: center;
  border-block-end: 1px solid var(--main_black);
`

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Vaniakebo</h1>
    </HeaderContainer>
  )
}

export default Header
