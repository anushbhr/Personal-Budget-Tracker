import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import BudgetList from "./components/BudgetList";
import BudgetInfo from "./components/BudgetInfo";
function App() {
  return (
    <div>
      <BudgetInfo />
      <BudgetList />
      <Form />
    </div>
  );
}

export default App;
