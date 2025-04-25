import React, { useState, useRef } from "react";
import Input from "./Input";
import SelectMenu from "./SelectMenu";

const ExpenseForm = ({ expense, setExpense, setExpenses }) => {

  // Using controlled Component
  // const [expense, setExpense] = useState({
  //   title: "",
  //   category: "",
  //   amount: ""
  // })

  // Using useRef() Hook 
  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();
  // titleRef.style.backgroundColor = "red";

  // Form Validation
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [{required: true, message: "Please enter title"}, {minLength: 5, message: "Title should be at least 5 characters long"}],
    category: [{required: true, message: "Please select a category"}],
    amount: [{required: true, message: "Please enter an amount"}]
  }

  const validateForm = (FormData) => {
    const errorsData = {}

    Object.entries(FormData).forEach(([key,value]) => {
      validationConfig[key].some((rule) => {
        if(rule.required && !value){
          errorsData[key] = rule.message;
          return true
        }
        if(rule.minLength && value.length < 5){
          errorsData[key] = rule.message;
          return true
        }
      })
    })

    setErrors(errorsData);
    return errorsData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // setExpenses((prevState) => [...prevState, {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID()
    // }])

    const validateResult = validateForm(expense);
    if(Object.keys(validateResult).length) return

    setExpenses((prevState) => [...prevState, {...expense, id: crypto.randomUUID()}])
    setExpense({
      title: "",
      category: "",
      amount: ""
    })
  };


  const handleChange = (e) => {
    const {name, value} = e.target;
    setExpense((prevState) => ({...prevState, [name]: value}))

    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input label="Title" id='title' name='title' value={expense.title} onChange={handleChange} error={errors.title} />
      <SelectMenu label='Category' id='category' name='category' value={expense.category} onChange={handleChange} options={["Grocery", "Clothes", "Bills", "Medicine", "Education"]} defaultOption="Select Category" error={errors.category} />
      <Input label="Amount" id='amount' name='amount' value={expense.amount} onChange={handleChange} error={errors.amount} />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;

{/* ref={categoryRef} */}