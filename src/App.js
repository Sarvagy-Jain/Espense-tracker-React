import './App.css';
import {Header} from './components/Header';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Transactionlist }from './components/Transactionlist';
import {AddTransaction} from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import  {Balance } from './components/Balance';

function App() {
  return (
 <GlobalProvider>
  <Header/>
  <div className="container">
    <Balance/>
    <IncomeExpenses/>
    <Transactionlist/>
    <AddTransaction/>
  </div>
 </GlobalProvider>
  );
}

export default App;
