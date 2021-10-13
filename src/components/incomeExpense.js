import React from 'react'
import {useGlobalContext} from "./globalState";
export const IncomeExpense = () => {
    const {transactions} = useGlobalContext();
    const amounts = transactions.map((transaction)=>{return transaction.amount})
    const income = amounts.filter(item=>item>0).reduce((total,item)=>(total += item),0).toFixed(2)
    const expense = amounts.filter(item=>item<0).reduce((total,item)=>(total += item),0).toFixed(2)
    const Expense = Math.abs(expense);
    return (
        <>
              <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">-${Expense}</p>
        </div>
      </div>
        </>
    )
}
