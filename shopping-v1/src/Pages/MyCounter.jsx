import React, {useState} from 'react'

function MyCounter() {

    const [count, setCountFunction] = useState(0)

    function IncrementCounter(){
        setCountFunction(count+1)
        console.log(count);
        console.log("function is called Increment");
    }
        function DecrementCounter(){
        if(count<1){
                alert("Negative Numbers not allowed")
            }else{
                setCountFunction(count-1)
            }
            setCountFunction(count-1)
            console.log(count);
            console.log("function is called Decrement");
        }

            function Multiplier (){
                if(count*count>2000){
                    alert("Number greater than 2000 is not allowed")
                }else{
                setCountFunction(count*count)
                }
                console.log(count);
                console.log("function is called multiplier");
    }
  return (
    <div>
        <h2>Counter's Current Value: {count} </h2>

        <div>
            <button onClick={IncrementCounter}>Increment Button </button>
            <hr/>
            <button onClick={DecrementCounter}>Decrement Button </button>
            <hr/>
            <button onClick={Multiplier}>Multiplier Button </button>
        </div>
    </div>
  )
}

export default MyCounter