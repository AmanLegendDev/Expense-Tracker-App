import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";

const ShowData = ({ data = [], setData }) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = data && data.length > 0 ? data: JSON.parse(localStorage.getItem("userdata") || "[]");
    setTransactions(saved);

    const incomeSum = saved.reduce(
      (acc, curr) => acc + Number(curr.income || 0),
      0
    );
    const expenseSum = saved.reduce(
      (acc, curr) => acc + Number(curr.expenseAmount || 0),
      0
    );

    setTotalIncome(incomeSum);
    setTotalExpense(expenseSum);
  }, [data]);

  const handleDelete = (id) => {
    const update = transactions.filter((t)=> t.id !== id)
    setTransactions(update)
    localStorage.setItem("userdata",JSON.stringify(update))
    if(setData) setData(update)
  }

  return (
    <>
      <div className="flex justify-center text-center mt-10 gap-4 mb-4">

        <div className="border-2 border-gray-300 p-2 px-4 rounded">
          <h1>Expense</h1>
          <p className="text-xl font-bold text-red-700">₹{totalExpense}</p>
        </div>

        <div className="border-2 border-gray-300 p-2 px-4 rounded">
          <h1>Income</h1>
          <p className="text-xl font-bold text-green-700">₹{totalIncome}</p>
        </div>

        <div className="border-2 border-gray-300 p-2 px-4 rounded">
          <h1>Balance</h1>
          <p className="text-xl font-bold text-blue-700">
            ₹{totalIncome - totalExpense}
          </p>
        </div>
      </div>

      <h1 className="text-center text-lg font-semibold mt-6 mb-3">
        Transactions
      </h1>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions found.</p>
      ) : (
        transactions.map((item) => (
          <div key={item.id} className="flex justify-center mb-2">
            <div className="border-2 border-gray-300 p-2 px-4 rounded flex justify-between w-[400px] items-center">
              <div>
                <div className="font-semibold">
                  {item.description || "No Description"}
                </div>
                <div className="text-sm text-gray-500">
                  Income: ₹{item.income} · Expense: ₹{item.expenseAmount}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`font-bold ${
                    item.expenseAmount > 0
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  ₹{item.expenseAmount || item.income}
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
                <Link to={`/edit/${item.id}`}>
                <button

                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    
    </>
  );
};

export default ShowData;