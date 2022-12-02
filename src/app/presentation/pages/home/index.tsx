import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imageAnimaJus from '../../../../assets/anima-jus-1.png'
import { Article } from '../../components/shared/article'
import { SectionHero } from '../../components/shared/section-hero'
import imageArticle1 from "../../../../assets/images/rights1.jpg"
import imageArticle2 from "../../../../assets/images/rights2.jpg"

export function Home() {
  return (
    <Fragment>
      <SectionHero />
      <Article image={imageArticle1} title='Direito, Estado e Sociedade'/>
      <Article image={imageArticle2} title='A luta pela igualdade em um país historicamente desigual'/>
    </Fragment>
  )
}