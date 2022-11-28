import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imageAnimaJus from '../../../../assets/anima-jus-1.png'

export function Home() {
  return (
    <div className='d-flex justify-content-center'>
      <img src={imageAnimaJus} className="image" alt="Imagem ÂnimaJus" />
    </div>
  )
}