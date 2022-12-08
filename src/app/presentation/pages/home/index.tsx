import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imageAnimaJus from '../../../../assets/anima-jus-1.png'
import { Article } from '../../components/shared/article'
import { SectionHero } from '../../components/shared/section-hero'
import imageArticle1 from "../../../../assets/images/rights1.jpg"
import imageArticle2 from "../../../../assets/images/rights2.jpg"
import { articles } from "../../../data"

export function Home() {
  return (
    <Fragment>
      <SectionHero />
      {
        articles.map(article => <Article image={imageArticle1} title={article.title} description={article.description} authors={article.authors}/> )
      }
    </Fragment>
  )
}