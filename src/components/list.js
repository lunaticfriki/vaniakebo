import { useContext } from 'react'
import styled from '@emotion/styled'
import Expense from './expense'
import VaniaContext from '../context'
import { device } from '../styles/utils'

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  ${device.sm`
    max-width: 30rem;
  `}
`

const List = () => {
  const { expenses } = useContext(VaniaContext)
  return (
    <ListContainer>
      <h5>Llistat de despeses</h5>
      {expenses.map((expense) => (
        <Expense expense={expense} key={expense.id} />
      ))}
    </ListContainer>
  )
}

export default List
