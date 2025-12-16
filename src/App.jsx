import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [result, setResult] = useState('')

  const callApi = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      setResult(JSON.stringify(res.data, null, 2))
    } catch (e) {
      setResult('API error')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Courier Change Panel</h1>
      <button onClick={callApi}>Test API</button>
      <pre>{result}</pre>
    </div>
  )
}
