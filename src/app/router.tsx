import React from "react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import { navLinks } from "../features/models/router";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        {
          navLinks?.length && navLinks?.map((
            {
              id,
              path,
              title
            }
          ) => {
            return (
              <Link
                key={id}
                to={path}
                className="[&.active]:font-bold"
              >
                {title}
              </Link>)
          })
        }
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <LoginPage />,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
};

export default router
