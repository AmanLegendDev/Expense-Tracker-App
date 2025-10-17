import React, { useEffect, useState } from 'react'
import ShowData from './ShowData';

const Expence = () => {
const [initialincome, setinitialincome] = useState("");
  const [initialamount, setinitialamount] = useState("");
  const [initialdec, setinitialdec] = useState("");
  const [data, setdata] = useState([]);

useEffect(() => {
 const saved = JSON.parse(localStorage.getItem("userdata")) || []


}, [])

const handlesubmit = (e) => {
e.preventDefault()
if(!initialincome && !initialamount && !intialdec)return;
 const alldata = {
  id:Date.now(),
  income: Number(initialincome) || 0,
  expenseAmount: Number(initialamount) || 0,
  description: initialdec || "",

 }
 const olddata = JSON.parse(localStorage.getItem("userdata")) || []

 const updatedata = [...olddata,alldata]
 localStorage.setItem("userdata",JSON.stringify(updatedata))
 setdata(updatedata)
 setinitialamount("")
 setinitialincome("")
 setinitialdec("")




}



  return (
    <>
      <div className="justify-center text-center align-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>

        <form className="lg:col-span-1 flex justify-center" onSubmit={handlesubmit}>
          <div className="border-2 border-gray-300 rounded-lg p-3 focus:border-indigo-300">
            <input
              type="number"
              placeholder="Income"
              value={initialincome}
              onChange={(e) => setinitialincome(e.target.value)}
              className="border-2 border-gray-300 rounded-lg focus:border-indigo-300 mb-4"
            />
            <br />

            <input
              type="number"
              placeholder="Expense Amount"
              value={initialamount}
              onChange={(e) => setinitialamount(e.target.value)}
              className="border-2 border-gray-300 rounded-lg focus:border-indigo-300 mb-4"
            />
            <br />

            <input
              type="text"
              placeholder="Description"
              value={initialdec}
              onChange={(e) => setinitialdec(e.target.value)}
              className="border-2 border-gray-300 rounded-lg focus:border-indigo-300 mb-4"
            />
            <br />

            <button
              type="submit"
              className="text-white bg-black p-2 rounded font-bold"
            >
              Add transaction
            </button>
          </div>
        </form>
      </div>

      <ShowData data={data} setData={setdata} />
    </>
  );
};

export default Expence;