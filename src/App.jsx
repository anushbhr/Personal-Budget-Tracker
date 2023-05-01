import Form from "./components/Form";
import ExpensesList from "./components/ExpensesList";
import BudgetInfo from "./components/BudgetInfo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BudgetInfo />
      <ExpensesList />
      <Form />
    </div>
  );
}

export default App;
