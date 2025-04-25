import React, { useState } from "react";
import "./Form.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import ContextMenu from "./ContextMenu";
import expenseData from "./expenseData";
// import UseLocalStorage from "../../Hooks/UseLocalStorage";

const Form = () => {
    const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: ""
    })

  const [expenses, setExpenses] = useState(expenseData);

  // const [localData, setLocalData] = UseLocalStorage(); 

  return (
    <main className="Form">
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} />
        <ExpenseTable expenses={expenses} setExpense={setExpense} setExpenses={setExpenses} />
        <ContextMenu />
      </div>
    </main>
  );
};

export default Form;
