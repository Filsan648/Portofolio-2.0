import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "../Compement/work/hero";
import Direction from "../Compement/direction";
import Project from "~/Compement/work/project";
import Footer from "../Generale/Footer";
import Menue from "~/Generale/Menue";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Filsan's Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className=" flex flex-col gap-40 "> <Menue />  <Hero /><Direction /><Project /><Footer /></div>;
}
