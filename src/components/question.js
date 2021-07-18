import { useContext, useState } from 'react'
import ErrorMessage from './errorMessage'
import { Form, Input } from './commons/form'
import VaniaContext from '../context'

const Question = () => {
  const { setBudget, setRest, setShowQuestion } = useContext(VaniaContext)
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value, 10))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (quantity < 1 || isNaN(quantity)) {
      setError(true)
      return
    }
    setError(false)
    setBudget(quantity)
    setRest(quantity)
    setShowQuestion(false)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage message="El pressupost no es correcte" />}
      <Input
        type="number"
        placeholder="Introdueix el teu pressupost"
        onChange={handleChange}
      />
      <Input type="submit" value="Afegir" />
    </Form>
  )
}

export default Question
