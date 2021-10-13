import react,{createContext,useState,useReducer , useContext , useEffect} from "react";
import Reducer from "./Reducer";





export const GlobalContext =  createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
  }
 

export const GlobalProvider = ({children}) =>{
    const getLocalStorage = () =>{
        let transactions =  localStorage.getItem("transactions")
        if(transactions){
         return  JSON.parse(localStorage.getItem("transactions"))
      
        }
        else{
          return []
        }
      }
    const initialState = {
        transactions:getLocalStorage()
    }
  const [state , dispatch] = useReducer(Reducer, initialState)

  useEffect(()=>{
    localStorage.setItem("transactions", JSON.stringify(state.transactions))
  },[initialState])

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM",payload:id})
  }
  const addTransactions =(text,amount)=>{
    dispatch({type:"ADD_ITEM",payload:{text,amount}})
    //   console.log(amount)
  }
  

    return <GlobalContext.Provider value ={{...state,transactions:state.transactions,removeItem,
    addTransactions}}>
        {children}
    </GlobalContext.Provider>
}
