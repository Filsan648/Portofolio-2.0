import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "../Compement/work/hero";
import Background from "../Generale/AuroraBackground";
import Footer from "../Generale/Footer";
import Menue from "~/Generale/Menue";
import Aboutme from "~/Compement/About/about";
import WhoAmI from "~/Compement/About/who_am_i";
import ProjectDescription from "~/Compement/work/project_description";
export function meta({}: Route.MetaArgs) {
  return [
  { title: "About Filsan Fouad | Software Engineer" },
  { 
    name: "description", 
    content: "Get to know Filsan Fouad, a software engineer skilled in full-stack development, with expertise in creating scalable applications and delivering high-quality digital experiences." 
  },
];
}

export default function About() {
  return <div className=" flex flex-col gap-40 "> <Menue />  <Aboutme/> <WhoAmI/>  <Footer /></div>;
}
