import { Link } from "react-router-dom";

export function NavBar() {

  const menuItems = [
    {
      label: "Início",
      path: "/"
    },
    {
      label: "Sobre",
      path: "/about"
    },
    {
      label: "Contato",
      path: "/contact"
    },
  ]
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link to={"/"} className="navbar-brand"> <span className='aj-text-gold'>Ânima</span><span className='aj-text-red'>Jus</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              menuItems.map(item => (
                <li className="nav-item" key={menuItems.indexOf(item)}>
                  <Link to={item.path} className="nav-link aj-text-gold aj-nav-link" >{item.label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}