import CIMAS from '../../asset/CIMAS.png';
import Bulk from '../../asset/Bulk.png';
import Stock from '../../asset/Stock.png';
import Ai from '../../asset/Ai.png';
const data = [{
    title : "CIMAS's website",
    image :CIMAS,
    descriptin: 'Development of an innovative web solution for the Ali Sabieh Cement Plant',
    link: ''

},

{
    title : 'Weighbridge system',
    image :Bulk,
    descriptin: 'Intelligent Weighbridge System for Vehicle Weight Management',
    link: ''

},

{
    title : 'Smart Inventory: An Intelligent Stock Management System',
    image :Stock,
    descriptin: 'Smart Inventory : système intelligent de gestion des stocks',
    link: ''

},

{
    title : 'AI project',
    image :Ai,
    descriptin: 'AI Solution: Driving Innovation Through Intelligence',
    link: ''

},
]


function Project (){
return(
    <div className="lg:px-24 ">
          <div className='grid md:grid-cols-2  grid-cols-1 '>  
{data.map((item, index) => (
  <div key={index} className='m-5 '>
    
    <div className="rounded-2xl bg-gray-200/75 p-6 overflow-hidden">
      <img
        className="w-full h-72 rounded-2xl object-cover"
        src={item.image}
        alt={item.title}
      />
    </div>
  <h4 className="text-lg  text-gray-600 my-4">
    {item.title}  </h4>
    <p className="text-black/90 font-medium text-2xl ">{item.descriptin}</p>
<p className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer pt-8"> View Project  </p>


  </div>
))}

    </div>
    </div>
)
}
export default Project;