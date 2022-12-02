import imageArticle from "../../../../../assets/images/rights1.jpg"

export function Article() {
  return (
      <div className="container">
        <div className="article d-flex flex-md-row flex-column align-items-center shadow-sm aj-bg-light">
          <div className="article-image">
            <img src={imageArticle} alt="Imagem de artigo" />
          </div>
          <div className="article-info p-3">
            <div className="article-info__publication mb-2 text-muted small">
              <span className="article-info__author d-none d-sm-inline me-1 fw-bold">
                Júlio César
              </span>
              <time className="article-info__date" dateTime="2022-11-30T02:13:05+00:00">
                  30 de novembro de 2022
              </time>
            </div>
            <h2 className="article-info__title h4 h3-md h4-lg">Direito, Estado e Sociedade</h2>
            <p className="article-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum nunc, laoreet eget rhoncus vitae, interdum in eros. Duis fringilla elit massa, nec dictum ligula commodo a. </p>
          </div>
        </div>
      </div>
  )
}
