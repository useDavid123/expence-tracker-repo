import logo from './logo.svg';
import {Header} from "./components/header"
import {Balance} from "./components/balance"
import {IncomeExpense} from "./components/incomeExpense"
import {TransactionList} from "./components/transactionList"
import {AddTransaction} from "./components/addTransaction"
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className ="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
    </>
  )
}

export default App;
