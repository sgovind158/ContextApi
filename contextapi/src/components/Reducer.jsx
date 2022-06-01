import react ,{useReducer}from "react"
import './App.css';

const reducer  = (counter,action)=>{
  switch(action.type){
    case "Increment" :{
      return counter + 1;

    }

    case "Decrement" :{
      if(counter>0){
        return counter - 1;
      }else{
        return counter

      }
    
      
    }

    default:{
      return "now counter is negative"
    }
  }

}

function Reducer() {
  const [counter,dispatch] = useReducer(reducer,0)

  return (
    <div className="App">
      Counter:{counter}
      <div>
        <button onClick={()=>dispatch({type:"Increment"})} >+</button>
        <button onClick={()=>dispatch({type:"Decrement"})} >-</button>
      </div>
    
    </div>
  );
}

export default Reducer;