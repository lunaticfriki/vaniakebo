import styled from '@emotion/styled'

const FooterContainer = styled.footer`
  display: grid;
  place-items: center;
`
const FooterSignature = styled.i`
  font-size: clamp(0.7rem, 4vw, 0.8rem);
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <FooterSignature>@lunaticfriki, {year}</FooterSignature>
    </FooterContainer>
  )
}

export default Footer
