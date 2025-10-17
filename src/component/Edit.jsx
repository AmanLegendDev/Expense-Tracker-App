import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

const {id} = useParams()
const navigate = useNavigate()

const [income, setincome] = useState("")
const [expense, setexpense] = useState("")
const [desc, setdesc] = useState("")

    
   
useEffect(() => {
const saved = JSON.parse(localStorage.getItem("userdata")) || [];

const found = saved.find((item)=>item.id == id)

if (found){
    setincome(found.income)
    setexpense(found.expenseAmount)
    setdesc(found.description)
}
}, [id])


const handleUpdate = (e) => {
e.preventDefault()
const saved = JSON.parse(localStorage.getItem("userdata")) || [];

 const update = saved.map((item)=>
    item.id == id ? {
        ...item,
        income:Number(income),
        expenseAmount:Number(expense),
        description: desc,

    } : item,
);

localStorage.setItem("userdata",JSON.stringify(update))
alert("Amount Updated successfully")
navigate("/")

}

  return (
    
<>
      <div className="justify-center text-center align-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>

        <form onSubmit={handleUpdate}
        className="lg:col-span-1 flex justify-center">
          <div className="border-2 border-gray-300 rounded-lg p-3 focus:border-indigo-300">
            <input
              type="number"
              placeholder="Income"
              value={income}
              onChange={(e)=> setincome(e.target.value)}
              className="border-2 border-gray-300 rounded-lg focus:border-indigo-300 mb-4"
            />
            <br />

            <input
              type="number"
              placeholder="Expense Amount"
              value={expense}
              onChange={(e)=> setexpense(e.target.value)}
              
              className="border-2 border-gray-300 rounded-lg focus:border-indigo-300 mb-4"
            />
            <br />

            <input
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e)=> setdesc(e.target.value)}
              
              className="border-2 border-gray-300 rounded-lg focus:border-indigo-300 mb-4"
            />
            <br />

            <button
              type="submit"
              className="text-white bg-black p-2 rounded font-bold"
            >
              Add new transaction
            </button>
          </div>
        </form>
      </div>

      
    </>
    
    
  )
}

export default Edit