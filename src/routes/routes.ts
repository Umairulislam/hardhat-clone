import { createBrowserRouter } from "react-router"
import {
  Documentation,
  Home,
  HomeLayout,
  PluginDetails,
  Plugins,
  PluginsLayout,
  Tutorial,
} from "../pages"

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "hardhat-runner/plugins",
        Component: PluginsLayout,
        children: [
          {
            index: true,
            Component: Plugins,
          },
          { path: ":pluginId", Component: PluginDetails },
        ],
      },
      { path: "docs", Component: Documentation },
      { path: "tutorial", Component: Tutorial },
    ],
  },
])

export default router
