import { useContext, useEffect } from 'react'
import Layout from './components/layout'
import Question from './components/question'
import ExpenseForm from './components/expenseForm'
import List from './components/list'
import BudgetControl from './components/budgetControl'
import VaniaContext from './context'

function App() {
  const {
    budget,
    rest,
    showQuestion,
    expense,
    expenses,
    setExpenses,
    setCreateExpense,
    setRest,
    createExpense,
  } = useContext(VaniaContext)

  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, expense])
      setCreateExpense(false)
      const restExpense = rest - expense.quantity
      setRest(restExpense)
    }
  }, [
    expense,
    createExpense,
    expenses,
    rest,
    budget,
    setCreateExpense,
    setExpenses,
    setRest,
  ])

  return (
    <Layout>
      <h3>Despeses mensuals</h3>
      {showQuestion ? (
        <Question />
      ) : (
        <>
          <ExpenseForm />
          {expenses.length > 0 && <List />}
          <BudgetControl />
        </>
      )}
    </Layout>
  )
}

export default App
