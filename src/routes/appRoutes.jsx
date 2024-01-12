import { lazy } from "react";
import { useRoutes } from "react-router";
import Loadable from "../components/Loadable";
import EmptyLayout from "../layouts/EmptyLayout";

const TestPage = Loadable(lazy(() => import("../pages/TestPage")));
const MainPage = Loadable(lazy(() => import("../pages/MainPage")));

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <EmptyLayout />, children: [{ path: "", element: <MainPage /> }] },
    { path: "/test", element: <TestPage /> },
  ]);
}
