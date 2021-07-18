import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { device } from '../styles/utils'

const ExpenseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-end: 1px solid var(--main_gray);
  padding: 1rem 0;
`
const ExpenseItem = styled.p`
  margin: 0 1rem;

  ${device.sm`
    max-width: 30rem;
  `}

  &:nth-of-type(2) {
    color: var(--main_pink);
  }
`

const Expense = ({ expense }) => {
  return (
    <ExpenseContainer>
      <ExpenseItem>{expense.name}</ExpenseItem>
      <ExpenseItem>{expense.quantity}€</ExpenseItem>
    </ExpenseContainer>
  )
}

export default Expense

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
}
