export  default (state , action) =>{
 switch(action.type){
case "REMOVE_ITEM" : 
  let newItem = state.transactions.filter((item)=>item.id !== action.payload)
  return {...state,transactions:newItem};
case "ADD_ITEM" :
    let newItems = {id: new Date().getTime().toString(),
    text:action.payload.text,amount:parseInt(action.payload.amount) }
    console.log(newItems)
    return {...state,transactions:[newItems,...state.transactions]}
    
    
  


    default: 
    return state
 }
}