import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "../Compement/work/hero";
import Direction from "../Compement/direction";
import Project from "~/Compement/work/project";
import Footer from "../Generale/Footer";
import Menue from "~/Generale/Menue";

export function meta({}: Route.MetaArgs) {
  return [
  { title: "Filsan Fouad | Full-Stack Developer Portfolio" },
  { 
    name: "description", 
    content: "Discover the portfolio of Filsan Fouad, a passionate full-stack developer specializing in modern web applications, UI/UX design, and innovative digital solutions." 
  },
];
}

export default function Home() {
  return <div className=" flex flex-col gap-40 bg-white "> <Menue />  <Hero /><Direction /><Project /><Footer /></div>;
}
