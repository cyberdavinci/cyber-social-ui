import NavBar from "./nav-bar";
import SideBar from "./side-bar";
import Feed from "./feed";
import Aside from "./aside";
const Hero = () => {
  return (
    <>
        <NavBar />
        <div className="flex gap-6 relative mt-32">
          <SideBar />
          <Feed />
          <Aside />
      </div>
    </>
  )
}

export default Hero
