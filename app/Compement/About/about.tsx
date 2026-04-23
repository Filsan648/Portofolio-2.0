import me from "../../asset/me.png";
import ButtonStyle1 from "~/utils/Buttonstyle1";
import ButtonStyle2 from "~/utils/Buttonstyle2";
function Aboutme(){
return (<div className="lg:px-24  flex lg:flex-row flex-col-reverse  lg:gap-40 gap-11 "> 
<div>
<p className="text-6xl text-black/90 font-meduim leading-snug py-9">
It's so nice to<br/> meet you, I'm <br/>Filsan :)

</p>
<div className="flex gap-4 ">
  <ButtonStyle1 text="LinkedIn" />
<ButtonStyle2 text="GitHub" />

</div>
</div><div className="lg:w-96 w-full h-96 ">
<img src={me} alt="Filsan" className="w-full h-full object-cover" />
</div>
</div>)
}
export default Aboutme;



