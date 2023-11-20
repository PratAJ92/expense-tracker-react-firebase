import React, { useEffect, useState } from 'react'
import {useTransaction} from '../../hooks/useTransaction'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firestore-config'
import {useNavigate, Navigate} from 'react-router-dom'

export const Main = () => {

  console.log('1st line Main.js')
  const [description, setDescription] = useState('')
  const [transactionAmount, setTransactionAmount] = useState('')
  const [transactionType, setTransactionType] = useState('expense')

  const navigate = useNavigate()

  const {addTransaction, transactions, transactionTotals} = useTransaction()
  const { totalBalance, totalIncome, totalExpense } = transactionTotals
  const {displayName, photoURL} = useGetUserInfo()

  useEffect(() => {
    if(localStorage.getItem('AUTH') === null)
      navigate('/')
  }, [])
  // OR
  // if(localStorage.getItem('AUTH') === null)
  //   return <Navigate to='/'/>
  
  const onAddTransaction = (e) => {
    e.preventDefault()
    console.log(`Description: ${description} | TransactionAmount: ${transactionAmount} | TransactionType: ${transactionType}`)
    addTransaction({description, transactionAmount, transactionType})
    setDescription('')
    setTransactionAmount('')
  }

  const userSignout = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div>
        <h3>{displayName}'s Expense Tracker</h3>
        <img src={photoURL} style={{borderRadius: '50%', border: '4px solid green', width: '10%'}}/>
        <button onClick={userSignout}>Sign out</button>
      </div>
      <h3>Total Balance</h3>
      {
        totalBalance >= 0 ? (<p>${totalBalance}</p>) : <p>-${totalBalance * -1}</p>
      }

      <h4>Income</h4>
      <p>${totalIncome}</p>

      <h4>Expense</h4>
      <p>${totalExpense}</p>

      <form onSubmit={e => onAddTransaction(e)}>
        <input type='text' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)}/>
        <input type='text' placeholder='Amount' value={transactionAmount} onChange={e => setTransactionAmount(e.target.value)}/>

        <label>
          <input type='checkbox' value='expense' checked={transactionType === 'expense'} onChange={e => setTransactionType(e.target.value)}/>
          Expense 
        </label>
        <label>
          <input type='checkbox' value='income' checked={transactionType === 'income'} onChange={e => setTransactionType(e.target.value)}/>
          Income 
        </label>
        <button>Add Transaction</button>
      </form>

      <h4>Transactions</h4>
      <ul>
        {
          transactions.map((transaction) => {
            const {id, userID, description, transactionAmount, transactionType, createdAt} = transaction
            return (
              <li key={id}>
                <p>{description}</p>
                <p style={{color: transactionType==='expense'? 'red' : 'green'}}>{transactionType}</p>
                <h4>${transactionAmount}</h4>
              </li>
            )
        })}
      </ul>
    </div>
  )
}