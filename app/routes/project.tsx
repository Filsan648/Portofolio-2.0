import type { Route } from "./+types/home";
import Footer from "../Generale/Footer";
import Menue from "~/Generale/Menue";
import { useParams } from "react-router";
import ProjectDescription from "~/Compement/work/project_description";
import { Projects } from "~/data/DataProject";
export function meta({}: Route.MetaArgs) {
    const { id } = useParams();
       const newsId = Number(id!)
  return [
    { title: Projects[newsId].title },
    { name: "description", content: Projects[newsId].description },
  ];
}

export default function Projectes() {
       const { id } = useParams();
       const newsId = Number(id!)
  return <div className=" flex flex-col gap-40 "> <Menue />  <ProjectDescription id={newsId} /> <Footer />   </div>;
}
