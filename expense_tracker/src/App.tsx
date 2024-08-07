import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { ExpenseFormData } from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groseries" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Entertainement" },
    { id: 4, description: "ddd", amount: 10, category: "Other" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleFormSubmit = (data: ExpenseFormData) => {
    console.log("Received data:", data);
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={handleFormSubmit} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
