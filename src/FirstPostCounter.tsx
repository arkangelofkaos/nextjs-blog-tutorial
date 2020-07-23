import {useState} from "react"

const FirstPostCounter = () => {
    const [count, setCount] = useState(1)
    return <>
        <h1>First Post</h1>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count+1)}>+1</button>
    </>
}

export default FirstPostCounter