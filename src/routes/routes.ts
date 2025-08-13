import { createBrowserRouter } from "react-router"
import { Documentation, Home, HomeLayout, Plugins, Tutorial } from "../pages"

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "docs", Component: Documentation },
      { path: "tutorial", Component: Tutorial },
      { path: "plugins", Component: Plugins },
    ],
  },
])

export default router
