import React from 'react'
import ReactDOM from 'react-dom'
import VaniaState from './context/provider'
import App from './App'

ReactDOM.render(
  <VaniaState>
    <App />
  </VaniaState>,
  document.getElementById('root')
)
