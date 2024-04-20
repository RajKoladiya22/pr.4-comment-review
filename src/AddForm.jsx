import { useState } from "react";

export const AddForm = ({ getdata }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [input, setInpurt] = useState([{}])

  const handalSubmit = (e) => {
    e.preventDefault();
    // const newTask =
    // {
    //   id: Math.floor(Math.random() * 100),
    //   task: task,
    //   date: date
    // };

    // getdata(newTask);
    setTask("");
    setDate("");
  };

  const AddCom = () => {
    let com = {
      id : Math.floor(Math.random()*100),
      name : "",
      phone : ""
    }
    setInpurt([...input,com])
  }

  const DelCom = (id) => {
    console.log(id);
    // let d = input.filter((val)=>{
    //   return val.id != id
    // });
    let e = input.slice(1, id)
    setInpurt(e)
  }
  return (
    <div align="center">
      
      {
        input.map((val,i) => {
          return(
            <form onSubmit={handalSubmit}>
        <input
          type="text"
          // onChange={(e) => setTask(e.target.value)}
          // value={task}
        />
        <input
          type="date"
          // onChange={(e) => setDate(e.target.value)}
          // value={date}
        />
        {/* <input type="submit" value="submit" /> */}
        {i ===0 ? (<button onClick={()=>{AddCom()}}>Add</button>) : (<button className="del" onClick={()=>{DelCom(val.id)}}>Delete</button>)}
      </form>
          )
        })}
    </div>
  );
};


