import { Link } from "react-router-dom";
import imageArticle2 from "../../../../../assets/images/discussion.jpg"
import imageArticle3 from "../../../../../assets/images/rights2.jpg"
import imageArticle4 from "../../../../../assets/images/climate.jpg"
import { articleMain } from "../../../../data";
import { slugify } from "../../../../utils";


export function SectionHero() {

  return (
    <div className="pt-4 pb-0 card-grid">
      <div className="container">
        <div className="row mb-1">
          <div className="col-lg-6">
            <article className="card card-full hover-a mb-4">
              <div className="article-image">
                <Link to={`articles/${slugify(articleMain.title)}`} className="aj-link text-black">
                  <img src={articleMain.image} alt="Imagem de artigo" loading="lazy" />
                </Link>
              </div>
              <div className="article-info p-3">
                <Link to={`articles/${slugify(articleMain.title)}`} className="aj-link text-black">
                  <h1 className="article-info__title h3-sm h1-md h3-lg aj-text-red fw-bold">
                    {articleMain.title}
                  </h1>
                </Link>
                <div className="article-info__publication mb-2 text-muted small">
                  <span className="article-info__author d-none d-sm-inline me-1 fw-bold">
                    {articleMain.authors}
                  </span>
                  <time className="article-info__date">
                      {articleMain.publication}
                  </time>
                </div>
                <p className="article-info__description">
                  {articleMain.description}
                </p>
              </div>
            </article>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <article className="card card-full hover-a mb-4 ">
              <div className="d-flex align-items-center">
                <div className="pe-2 pe-md-0">
                  <div className="">
                    <img width="180" height="137" src={imageArticle2} className="" alt="" loading="lazy" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="article-info ">
                    <h2 className="article-info__title h4 h3-md h4-lg text-wrap">
                      Regulação da mídia: censura ou instrumento a serviço da democracia?
                    </h2>
                    <div className="article-info__publication mb-2 text-muted small">
                      <span className="article-info__author d-none d-sm-inline me-1 fw-bold">
                        Júlio César
                      </span>
                      <time className="article-info__date" dateTime="2022-11-30T02:13:05+00:00">
                          30 de novembro de 2022
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              
            <article className="card card-full hover-a mb-4 ">
						  <div className="d-flex align-items-center">
                <div className="pe-2 pe-md-0">
                  <div className="">
                    <img width="180" height="137" src={imageArticle3} className="" alt="" loading="lazy" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="article-info">
                    <h2 className="article-info__title h4 h3-md h4-lg text-wrap">
                      A importância da participação política das mulheres negras 
                    </h2>
                    <div className="article-info__publication mb-2 text-muted small">
                      <span className="article-info__author d-none d-sm-inline me-1 fw-bold">
                        Júlio César
                      </span>
                      <time className="article-info__date" dateTime="2022-11-30T02:13:05+00:00">
                          30 de novembro de 2022
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              
            <article className="card card-full hover-a mb-4 ">
              <div className="d-flex align-items-center">
                <div className="pe-2 pe-md-0">
                  <div className="">
                    <img width="180"  src={imageArticle4} className="" alt="" loading="lazy" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="article-info">
                    <h2 className="article-info__title h4 h3-md h4-lg text-wrap">
                      O Brasil como estratégia para o futuro climático do planeta
                    </h2>
                    <div className="article-info__publication mb-2 text-muted small">
                      <span className="article-info__author d-none d-sm-inline me-1 fw-bold">
                        Júlio César
                      </span>
                      <time className="article-info__date" dateTime="2022-11-30T02:13:05+00:00">
                          30 de novembro de 2022
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              
          </div>
        </div>
      </div>
    </div>
  )
}
