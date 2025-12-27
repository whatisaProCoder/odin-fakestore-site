import { useLocation, matchPath } from "react-router";
import { routeToSection } from "../constants/navSections";

export function useActiveSection() {
  const { pathname } = useLocation();

  for (const route of routeToSection) {
    const match = matchPath(
      { path: route.path, end: route.exact ?? false },
      pathname
    );

    if (match) return route.section;
  }

  return null;
}
