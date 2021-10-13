import React ,{useContext} from 'react'
import {useGlobalContext} from "./globalState"

export const TransactionList = () => {
    const {transactions,removeItem} = useGlobalContext();
    return (
        <>
            <h3>History</h3>
      <ul id="list" className="list">
          {transactions.map((transaction)=> 
           {
             const {text,amount,id} = transaction  
             const sign = transaction.amount < 0 ? "-" : "+";
             const color = transaction.amount < 0 ? "minus" : "plus"
               return  <li key={id} className={color}>
          {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn" 
          onClick={()=>removeItem(id)}>x</button>
        </li>
 } )}
          
      </ul>
        </>
    )
}
