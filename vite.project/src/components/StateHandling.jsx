import { useState } from 'react'

function StateHandling() {
	const [count,setCount] = useState(100);

    function increment(){
        setCount(count+20);
    }

    function decrement(){
        setCount(count-10);
    }

    

	return (
        <div>StateHandling
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
		
	)
}

export default StateHandling
