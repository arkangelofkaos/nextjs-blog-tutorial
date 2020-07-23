import {useState} from "react"
import Link from 'next/link'

const FirstPostCounter = () => {
    const [count, setCount] = useState(1)
    return <>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </>
}

export default FirstPostCounter