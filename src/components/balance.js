import React from 'react'
import {useGlobalContext} from "./globalState";

export const Balance = () => {
    
    const {transactions} = useGlobalContext();
    const amounts = transactions.map((transaction)=>{return transaction.amount})
    const balance = amounts.reduce((total,item)=>
     (total += item)
     
    ,0
    
    ).toFixed(2)
    
    console.log(balance)
    return (
        <>
            <h4>Your balance</h4>
            <h1 id ="balance">${balance}</h1>
        </>
    )
}
