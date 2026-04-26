import type { Route } from "./+types/home";
import Footer from "../Generale/Footer";
import Menue from "~/Generale/Menue";
import { useParams } from "react-router";
import ProjectDescription from "~/Compement/work/project_description";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Projects() {
       const { id } = useParams();
       const newsId = Number(id!)
  return <div className=" flex flex-col gap-40 "> <Menue />  <ProjectDescription id={newsId} /> <Footer />   </div>;
}
