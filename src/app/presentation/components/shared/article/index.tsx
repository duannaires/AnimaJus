import imageArticle from "../../../../../assets/images/rights.jpg"

export function Article() {
  return (
      <div className="container">
        <div className="article d-flex flex-md-row flex-column align-items-center shadow-sm aj-bg-light">
          <div className="article-image">
            <img src={imageArticle} alt="Imagem de artigo" />
          </div>
          <div className="article-info p-4">
            <div className="article-info__date mb-4">
              <span>Segunda-feira, 28 de novembro de 2022</span>
            </div>
            <h1 className="article-info__title">Direito, Estado e Sociedade</h1>
            <p className="article-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum nunc, laoreet eget rhoncus vitae, interdum in eros. Duis fringilla elit massa, nec dictum ligula commodo a. </p>
          </div>
        </div>
      </div>
  )
}