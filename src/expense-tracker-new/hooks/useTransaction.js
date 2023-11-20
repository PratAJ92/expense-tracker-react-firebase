import React, { useEffect, useState } from 'react'
import { collection, addDoc, query, serverTimestamp, where, onSnapshot, orderBy } from 'firebase/firestore'
import { firestore } from '../config/firestore-config'
import { useGetUserInfo } from './useGetUserInfo'

export const useTransaction = () => {

  const [transactions, setTransactions] = useState([])
  const [transactionTotals, setTransactionTotals] = useState({
    totalBalance: 0.0,
    totalIncome: 0.0,
    totalExpense: 0.0
  })
  const { userID, isAuthenticated } = useGetUserInfo()

  const collectionTransactionRef = collection(firestore, 'transactions')

  // Add Transaction
  const addTransaction = async ({ description, transactionAmount, transactionType }) => {
	  console.log(`In addTransactions() | UserID: ${userID} | Description: ${description} | TransactionAmount: ${transactionAmount} | TransactionType: ${transactionType}`)
	  await addDoc(collectionTransactionRef, { userID, description, transactionAmount, transactionType, createdAt: serverTimestamp() })
  }

  // Get Transactions
  const getTransactions = async () => {
    console.log('In getTransaction()')
    let unsubscribe;
    try {
      
      const queriedTransactions = query(collectionTransactionRef, where('userID', '==', userID), orderBy('createdAt'))
      unsubscribe = onSnapshot(queriedTransactions, (snapshot) => {
        let docs = [];
        let totalExpense = 0, totalIncome = 0, totalBalance = 0;
        console.log('onSNAPshot triggered')
        snapshot.forEach((doc) => {
          
          const data = doc.data()
          const id = doc.id
          docs.push({...data, id})

          if(data.transactionType === 'expense') {
            totalExpense += Number(data.transactionAmount)
          } else {
            totalIncome += Number(data.transactionAmount)
          }

        })

        setTransactions(docs)
        totalBalance = totalIncome - totalExpense
        console.log(`totalExpense ${totalExpense} | totalIncome ${totalIncome} | totalBalance ${totalBalance}`)
        setTransactionTotals({
          totalBalance,
          totalIncome,
          totalExpense
        })

      })
      
    } catch (error) {
      console.log(error)
    }

    return () => unsubscribe()

  }

  useEffect(() => {
    if(isAuthenticated) {
      getTransactions()
    }
  }, [])

  return { addTransaction, transactions, transactionTotals }

}
