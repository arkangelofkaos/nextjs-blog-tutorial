const FirstPost = () => {
    const [count, setCount] = React.useState(1)
    return <>
        <h1>First Post</h1>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count+2)}>+2</button>
    </>
}

export default FirstPost