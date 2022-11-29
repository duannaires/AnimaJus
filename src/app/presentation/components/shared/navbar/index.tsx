import { Fragment } from "react";
import { Link } from "react-router-dom";

export function NavBar() {

  const assuntos = [
    {
      text: "Constitucional",
      path: "/"
    },
    {
      text: "Administrativo",
      path: "/"
    },
    {
      text: "Civil",
      path: "/"
    },
    {
      text: "Processo Civil",
      path: "/"
    },
    {
      text: "Penal",
      path: "/"
    },
    {
      text: "Processo Penal",
      path: "/"
    }
  ]

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <Link to={"/"} className="navbar-brand"> <span className='aj-text-gold'>Ânima</span><span className='aj-text-red'>Jus</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                    <Link to={"/"} className="nav-link aj-text-gold aj-nav-link" >Início</Link>
                  </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle aj-text-gold aj-nav-link" to={"#"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Assuntos
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                    assuntos.map(item => (
                      <li key={assuntos.indexOf(item)}>
                        <Link to={item.path} className="dropdown-item aj-text-gold aj-nav-link" >{item.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="btn aj-btn-red" type="submit">Inscreva-se</button>
          </form>
        </div>
      </nav>
    </Fragment>
  )
}