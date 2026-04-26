import me from "../../asset/me.png";
import Button from "~/utils/Button";
import githublogo from "../../asset/githublogos.png";
import linkedinlogo from "../../asset/linkindlogos.png";
function Aboutme(){
return (<div className="lg:px-24  flex lg:flex-row flex-col-reverse  lg:gap-40 gap-11 "> 
<div>
<p className="text-6xl text-black/90 font-meduim leading-snug py-9">
It's so nice to<br/> meet you, I'm <br/>Filsan :)

</p>
<div className="flex gap-4 ">
<Button text="LinkedIn" link="https://www.linkedin.com/in/filsan-fouad-youssouf-45271b285" image={linkedinlogo} />
<Button text="GitHub" link="https://github.com/Filsan648"  image={githublogo}/>

</div>
</div><div className="lg:w-96 w-full h-96 ">
<img src={me} alt="Filsan" className="w-full h-full object-cover" />
</div>
</div>)
}
export default Aboutme;



