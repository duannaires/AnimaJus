import { Fragment } from "react";
import { Link } from "react-router-dom";

export function NavBarTop() {

  const menuItemsTop = [
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
    <Fragment>
      <div className="navbar small">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center my-2">
            <ul className="nav">
              {
                menuItemsTop.map(item => (
                  <li className="nav-item" key={menuItemsTop.indexOf(item)}>
                    <Link to={item.path} className="nav-link aj-text-light-plus aj-nav-link ps-0" >{item.label}</Link>
                  </li>
                ))
              }
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}