import cimasdemo from '../asset/cimas_complete_website.png'
import bulkdmos from '../asset/bulkdemos.png'
import stockdemos from '../asset/stockdemos.png'
import cimas from '../asset/sains.png'
import bulk from '../asset/Bulk.png'
import stock from '../asset/Stock.png'
import ai from '../asset/AI.png'
import { StockProjectData } from './StockProjectData'
import demosai from "../asset/aidemos.png"


export  const  Projects =[ 
  {
        id: 0,
        title : "CIMAS",
        Image : cimas,
        description : "A modern website for CIMAS cement plant in Ali Sabieh",
        SUMMARY: 'Design and development of a website for CIMAS cement plant in Ali Sabieh to modernize its digital presence and better structure the presentation of its services. The result is a professional, responsive, and intuitive platform that enhances the company’s visibility and improves access to information.',
        Role : "Full-stack Developer",
        Tecnologies :" React, Node.js, React Router, Tailwind CSS, Firebase",
        Timeline : 'DECEMBER 2024-FEBRUARY 2025',
        DemoImage : cimasdemo,
        DemoVideo :null,
        livedemo :'https://cimas-dj.com/',
        githubrepos : null,
        Body:(<><div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"> 
                      <img
                      src={cimasdemo}
                      alt="Demo"
                      className="w-full h-auto"
                    /></div>  </>)

    },
     {
        id: 1,
        title : "Delivery management system",
        Image : bulk,
        description : "An intelligent delivery management system ",
        SUMMARY: 'In December 2024, the Ali Cement Factory expanded its product line by introducing bulk cement. To support this new offering, I designed and developed a bulk cement delivery management system.The system provides real-time delivery tracking, generates official delivery documents, and includes an intuitive admin dashboard for monitoring sales trends and overall performance.By automating key delivery processes, the solution significantly improved operational efficiency, reduced manual workload, and simplified delivery management.',
        Role : "Full-stack Developer",
        Tecnologies : "LARAVAL , MYSQL ,TAILWIND CSS",
        Timeline : 'DECEMBER 2024- JANUARY 2025',
        DemoImage : bulkdmos,
        DemoVideo :null,
        livedemo :null,
        githubrepos : 'https://github.com/Filsan648/Bulk',

    },
     {
        id: 2,
        title : "Stock Management System",
        Image : stock,
        description : "A smart inventory system for efficient stock management",
        SUMMARY: 'I designed and developed an AI-based application that generates images from text prompts, allowing users to transform written ideas into visual content.The system includes advanced features such as background modification and image upscaling to enhance image quality and usability.Overall, this project demonstrates the use of artificial intelligence to create a practical and creative visual generation tool.',
        Role : "Full-stack Developer",
        Tecnologies : "LARAVAL , MYSQL ,TAILWIND CSS",
        Timeline : 'JULY 2025',
        DemoImage : stockdemos,
        DemoVideo :null,
        livedemo :null,
        Body: (<div> 
            {StockProjectData.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-3xl font-extrabold text-black/90 my-8">{item.title}</h3>
                <p className="text-black/95 text-xl">{item.description}</p>
                <img src={item.image} alt={item.title} className="w-full shadow-2xl rounded-2xl h-auto mt-4" />
              </div>
            ))}
            </div>

        ),
        githubrepos :"https://github.com/Filsan648/Stockapp" ,

    },
     {
        id: 3,
        title : "AI ",
        Image : ai,
        description : "An AI solution driving innovation through intelligence",
        SUMMARY: 'Design and development of a website for CIMAS cement plant in Ali Sabieh to modernize its digital presence and better structure the presentation of its services. The result is a professional, responsive, and intuitive platform that enhances the company’s visibility and improves access to information.',
        Role : "Full-stack Developer",
        Tecnologies : " PYTHON , STREAMLIT ,BRIA AI,  IMGBB API",
        Timeline : 'JULY 2025',
        DemoImage : demosai,
        DemoVideo :null,
        Body: (<><div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"> 
                      <img
                      src={demosai}
                      alt="Demo"
                      className="w-full h-auto"
                    /></div>  </>),
        livedemo :'https://filsan648-ai-studio-main-615u6t.streamlit.app//',
        githubrepos : null,

    },

] 
