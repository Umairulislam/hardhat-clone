import { createBrowserRouter } from "react-router"
import {
  DocsPage,
  HomePage,
  HomeLayout,
  PluginDetails,
  PluginsPage,
  PluginsLayout,
  Tutorial,
  DocsLayout,
  DocDetails,
} from "../pages"

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "hardhat-runner/plugins",
        Component: PluginsLayout,
        children: [
          {
            index: true,
            Component: PluginsPage,
          },
          { path: ":pluginId", Component: PluginDetails },
        ],
      },
      {
        path: "hardhat-runner/docs",
        Component: DocsLayout,
        children: [
          { index: true, Component: DocsPage },
          { path: "getting-started", Component: DocDetails },
        ],
      },
      { path: "tutorial", Component: Tutorial },
    ],
  },
])

export default router
