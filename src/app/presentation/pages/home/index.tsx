import { Fragment } from 'react'
import { Article } from '../../components/shared/article'
import { SectionHero } from '../../components/shared/section-hero'

import { articles } from "../../../data"

export function Home() {
  return (
    <Fragment>
      <SectionHero />
      {
        articles.map(article => <Article key={article.title} image={article.image} title={article.title} description={article.description} authors={article.authors} publication={article.publication}/>)
      }
    </Fragment>
  )
}