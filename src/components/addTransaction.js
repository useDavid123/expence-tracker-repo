import React,{useState} from 'react'
import {useGlobalContext} from "./globalState";

export const AddTransaction = () => {
  const {addTransactions} = useGlobalContext();
    const [text , setText] = useState('')
    const [amount , setAmount] = useState(0)

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!text){
        return
      }
      addTransactions(text,amount)
      setText('');
      setAmount(0);
    }
    return (
        <>
            <h3>Add new transaction</h3>
      <form  onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}   placeholder="Enter text..."  />
        </div>
        <div class="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
