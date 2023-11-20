import React from 'react'
import { useState } from 'react'

import { useAddTransaction } from '../../hook/useAddTransaction'

export const MainApp = () => {

  const [description, setDescription] = useState('')
  const [transactionAmount, setTransactionAmount] = useState(0.0)
  const [transactionType, setTransactionType] = useState('')
  
  const {} = useAddTransaction(description, transactionAmount, transactionType)

  return (
    <div style={{textAlign: 'center'}}>
      <div>MainApp</div>
      <h2>Your Balance</h2>
      <h4>$0.00</h4>

      <h3>Income</h3>
      <h5>$0.00</h5>

      <h3>Expense</h3>
      <h5>$0.00</h5>

      <form>
        <input type='text' placeholder='Description' onChange={e => setDescription(e.target.value)}></input>
        <input type='text' placeholder='Amount' onChange={e => setTransactionAmount(e.target.value)}></input>
        <label htmlFor='expenseRadio'>
          <input type='radio' id='expenseRadio' value='expense' onChange={e => setTransactionType(e.target.value)}/>
          Expense
        </label>
        <label htmlFor='incomeRadio'>
          <input type='radio' id='incomeRadio' value='income' onChange={e => setTransactionType(e.target.value)}/>
          Income
        </label>
        <button>Add Transaction</button>
      </form>

      <div className='transctions'>
        <h4>Transactions</h4>
      </div>

    </div>
    
  )
}