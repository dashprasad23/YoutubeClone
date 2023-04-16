import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import ShowVideo from "./components/WatchPage";
import { Suspense, lazy } from "react";
import WatchPage from "./components/WatchPage";

const VideoContainer = lazy(() => import("./components/VideoContainer"));

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <VideoContainer />
          </Suspense>
        ),
      },
      {
        path: "/watch",
        element: <WatchPage />,
      }
    ],
  },
]);

export default App;
