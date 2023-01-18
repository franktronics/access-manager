import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const api = import.meta.env.VITE_API_HOST

function App() {
  const [data, setData] = useState({
    test: ''
  })
  useEffect(() => {
    fetch(`${api}api/test`)
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
      setData((data) => {return {
        ...data,
        test: res
      }})
    })
  }, [])

  return (
    <div className="App">
      <h2>API LINK: {api}</h2>
      <h3>{JSON.stringify(data)}</h3>
      hello
    </div>
  )
}

export default App
