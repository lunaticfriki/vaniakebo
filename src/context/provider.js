import { useState } from 'react'
import VaniaContext from '.'

const VaniaState = ({ children }) => {
  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)

  return (
    <VaniaContext.Provider
      value={{
        budget,
        setBudget,
        rest,
        setRest,
        showQuestion,
        setShowQuestion,
        expenses,
        setExpenses,
        expense,
        setExpense,
        createExpense,
        setCreateExpense,
      }}
    >
      {children}
    </VaniaContext.Provider>
  )
}

export default VaniaState
