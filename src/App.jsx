import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [output, setOutput] = useState('')

  const hitApi = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      setOutput(JSON.stringify(res.data, null, 2))
    } catch (err) {
      setOutput('API failed')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Courier Change Panel</h2>
      <button onClick={hitApi}>Test API</button>
      <pre>{output}</pre>
    </div>
  )
}
