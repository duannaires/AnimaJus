import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../../../data";
import { slugify } from "../../../../utils";

interface ArticleDetailProps {
}

export function ArticleDetail({ }: ArticleDetailProps) {

  const { slug } = useParams()

  const article = articles.find(article => slugify(article.title) === slug)

  function render(text: string | undefined) {
    if(text) {
      return (
        <div dangerouslySetInnerHTML={{ __html: text }}/>
      );
    }
  }

  return (
    <Fragment>
      <div className="container">
        <div className='d-flex flex-column'>
          <h1 className="mt-4 aj-text-red text-center">{ article?.title }</h1>
          <div className="mt-4">
            { render(article?.content) }
          </div>
        </div>
      </div>
    </Fragment>
  )
}