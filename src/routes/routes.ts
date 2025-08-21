import { createBrowserRouter } from "react-router"
import {
  HomePage,
  HomeLayout,
  PluginDetails,
  PluginsPage,
  PluginsLayout,
  DocsPage,
  DocsLayout,
  DocDetails,
  TutorialOverview,
  TutorialLayout,
  TutorialDetails,
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
      {
        path: "tutorial",
        Component: TutorialLayout,
        children: [
          { index: true, Component: TutorialOverview },
          { path: ":tutorialId", Component: TutorialDetails },
        ],
      },
    ],
  },
])

export default router
