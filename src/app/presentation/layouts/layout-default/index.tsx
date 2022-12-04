import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/shared/navbar";
import { NavBarTop } from "../../components/shared/navbar-top";

export function LayoutDefault() {
  return (
    <Fragment>
      <header className="aj-bg-default">
        <div className="container">
        <NavBarTop />
          <div className="border-bottom border-2 border-danger opacity-1"></div>
        <NavBar />
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </Fragment>
  )
}