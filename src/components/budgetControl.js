import { useState, useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import { checkBudget } from '../helpers'
import VaniaContext from '../context'
import { device } from '../styles/utils'

const BudgetControlContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`
const BudgetControlItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--main_gray);
  font-family: Montserrat;

  ${device.sm`
    max-width: 30rem;
  `}

  &:nth-of-type(2) {
    font-weight: 600;
    background-color: var(${(props) => props.color});
    border: 1px solid transparent;
    color: ${(props) =>
      props.color === '--main_pink' || props.color === '--main_green'
        ? 'var(--secondary_white)'
        : 'var(--main_dark_blue)'};
  }
`
const BudgetControlItem = styled.p``

const BudgetControl = () => {
  const { budget, rest } = useContext(VaniaContext)
  const [colorState, setColorState] = useState('')

  useEffect(() => {
    setColorState(checkBudget(budget, rest))
  }, [colorState, budget, rest])

  return (
    <BudgetControlContainer>
      <BudgetControlItemContainer>
        <BudgetControlItem>Pressupost:</BudgetControlItem>
        <BudgetControlItem>{budget}€</BudgetControlItem>
      </BudgetControlItemContainer>
      <BudgetControlItemContainer color={colorState}>
        <BudgetControlItem>Restant:</BudgetControlItem>
        <BudgetControlItem>{rest}€</BudgetControlItem>
      </BudgetControlItemContainer>
    </BudgetControlContainer>
  )
}

export default BudgetControl
