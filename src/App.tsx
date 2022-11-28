import { useState } from 'react'
import imageAnimaJus from './assets/anima-jus-1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='d-flex justify-content-center'>
          <img src={imageAnimaJus} className="image" alt="Imagem ÂnimaJus" />
      </div>
    </div>
  )
}

export default App
