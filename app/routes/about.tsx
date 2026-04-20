import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "../Compement/work/hero";
import Background from "../Generale/AuroraBackground";
import Footer from "../Generale/Footer";
import Menue from "~/Generale/Menue";
import Aboutme from "~/Compement/About/about";
import WhoAmI from "~/Compement/About/who_am_i";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <div className=" flex flex-col gap-40 "> <Menue />   <Aboutme /><WhoAmI /><Footer /></div>;
}
