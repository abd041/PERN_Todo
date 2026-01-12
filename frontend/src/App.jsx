import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [description, setDescription] = useState("")
  const [todos, setTodos] = useState([]);
  const [editTools, setEditTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editedText, seTEditedText] = useState("");


  const gettodos = async () => {
    try{
      const res = await axios.get("http://localhost:5000/todos");
      setTodos(res.data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
   gettodos()
  },[])

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/todos" , {
        description,
        completed:true,
      });
      setDescription("")
    }
    catch(error){
      console.error(error)
    }

  }


  return (
    <>
      <div className='min-h-screen min-w-full w-screen bg-gray-800 flex justify-center items-center'>
        <div className='bg-gray-50 rounded-2xl shadow-xl max-w-lg p-8'>
          <h1 className='text-2xl font-bold'>Todo List</h1>
          <form  onSubmit={onSubmitForm} className='flex items-center gap-2 shadow-sm border border-black'>
            <input type='text' className='flex-1 outline-none px-3 py-2 text-gray-600 placeholder-gray-400' value={description} onChange={(e)=>setDescription(e.target.value) } placeholder='What needs to be done?' required />
          <button className='bg-blue-500 px-4 py-2 font-medium outline-none border-none'> Add task</button>
          </form>

          <div>
            {
              todos.map((todo) =>{
                return(
                  <div>
                    <button className={`h-6 w-6 border-2 rounded-full flex items-center justify-center ${todo.completed ? "bg-green-500 border-green-500 text-white" : "border-gray-800"}`}>

                    </button>
                                    <div>{todo.description}</div>
 
                  </div>
                 )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
