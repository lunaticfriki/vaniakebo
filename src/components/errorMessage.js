import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ErrorMessageContainer = styled.p`
  color: var(--main_dark_blue);
  border: 1px solid var(--main_pink);
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
`

const ErrorMessage = ({ message }) => {
  return <ErrorMessageContainer>{message}</ErrorMessageContainer>
}

export default ErrorMessage

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}
