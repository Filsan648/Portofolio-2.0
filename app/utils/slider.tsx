
import image from '../asset/bulkdemos.png';

const images=[image , image , image , image , image , image , image , image , image , image , image , image , image , image , image , image , image , image , image , image ];

function Slider (){
    return( <div> 
        { images.map((item,index)=>(
            <div key={index} className="rounded-2xl bg-gray-200/75 p-6 overflow-hidden">
            <img className="w-full h-72 rounded-2xl object-cover" src={item} alt={`Image ${index + 1}`} />
          </div>
        ))}
    </div> )
}
export default Slider;
