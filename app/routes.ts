import { type RouteConfig, index , route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
    route("About", "routes/about.tsx"),
    route("/Project/:id", "routes/project.tsx"),

] satisfies RouteConfig;

