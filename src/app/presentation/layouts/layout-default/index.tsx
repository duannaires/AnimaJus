import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/shared/navbar";
import { NavBarTop } from "../../components/shared/navbar-top";

export function LayoutDefault() {
  return (
    <Fragment>
      <header className="mt-0">
        <NavBarTop />
        <NavBar />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </Fragment>
  )
}