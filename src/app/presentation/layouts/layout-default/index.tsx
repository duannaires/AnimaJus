import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/shared/navbar";

export function LayoutDefault() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </Fragment>
  )
}