import styled from '@emotion/styled'
import { device } from '../../styles/utils'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`
export const Input = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--main_gray);
  font-family: Montserrat;

  ${device.sm`
    max-width: 30rem;
  `}

  &[type='submit'] {
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
    &:focus {
      background-color: var(--main_pink);
      border: 1px solid transparent;
      color: var(--secondary_white);
    }
  }
`
