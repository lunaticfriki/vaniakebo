import { useContext, useState } from 'react'
import shortid from 'shortid'
import { Form, Input } from './commons/form'
import ErrorMessage from './errorMessage'
import VaniaContext from '../context'

const ExpenseForm = () => {
  const { setExpense, setCreateExpense } = useContext(VaniaContext)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
      setError(true)
      return
    }
    setError(false)

    const expense = {
      name,
      quantity,
      id: shortid.generate(),
    }
    setExpense(expense)
    setName('')
    setQuantity(0)
    setCreateExpense(true)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h5>Afegeix les despeses</h5>
      {error && <ErrorMessage message="Despesa incorrecta" />}
      <Input
        type="text"
        placeholder="Despesa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="0"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10) || quantity)}
      />
      <Input type="submit" value="Afegir despesa" />
    </Form>
  )
}

export default ExpenseForm
