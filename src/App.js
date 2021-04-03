import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { StateProvider } from "./context/stateProvider";
import "./styles.css";

export default function App() {
  return (
    <StateProvider className="app">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </StateProvider>
  );
}
