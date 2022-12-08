import { Link } from "react-router-dom"
import { slugify } from "../../../../utils"

interface ArticleProps {
  title: string
  description: string
  image: string
  authors: string[]
  publication: string
}

export function Article({ title, description, image, authors, publication }: ArticleProps) {


  return (
      <div className="container mb-4">
        <div className="article d-flex flex-md-row flex-column align-items-center shadow-sm aj-bg-light">
          <div className="article-image">
            <img src={image} alt="Imagem de artigo" />
          </div>
          <div className="article-info p-3">
            <div className="article-info__publication mb-2 text-muted small">
              <span className="article-info__author d-none d-sm-inline me-1 fw-bold authors">
                Por <span className="aj-text-red ">{authors.join(", ")}</span>
              </span>
              <div>
                <time className="article-info__date" dateTime="2022-11-30T02:13:05+00:00">
                    {publication}
                </time>
              </div>
            </div>
            <Link to={`articles/${slugify(title)}`} className="aj-link text-black">
              <h2 className="article-info__title h4 h3-md h4-lg">{title}</h2>
              <p className="article-info__description">{description}</p>
            </Link>
          </div>
        </div>
      </div>
  )
}
