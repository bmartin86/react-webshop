import { Outlet } from "react-router-dom"

function MainComponent () {
  return (
    <>
      <h2>Main Component</h2>
      <Outlet />
    </>
  )
}
export { MainComponent }