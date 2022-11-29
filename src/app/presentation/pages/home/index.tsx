import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imageAnimaJus from '../../../../assets/anima-jus-1.png'
import { Article } from '../../components/shared/article'
import { SectionHero } from '../../components/shared/section-hero'

export function Home() {
  return (
    <Fragment>
      <SectionHero />
      <Article />
    </Fragment>
  )
}