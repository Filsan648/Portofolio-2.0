function Footer (){
    return(
        <div className="px-24">
              <div className="flex justify-between">
            <p className="">Thanks for reaching the bottom of this page. <br/> If you like what you seelet's connect and build , <br/>something together!</p>
       <p>   Alternatively, here's a fancy sheet of paper.  <br/><a href="/cv.pdf" download  className="text-lg text-blue-500"> Resume  </a><span className="text-xl text-blue-500"> ↗</span></p>
          </div>

             <div className="flex justify-between py-6">  
                  <div> Filsan  </div>  
                    <div className="flex  gap-4 text-black/50   text-xl"> 
                          <a className="hover:text-black" href="https://www.linkedin.com/in/filsan-fouad-youssouf-45271b285/" target="_blank" rel="noopener noreferrer">  <span className="font-bold">  Linkedin  </span> ↗  </a>  
                          <a className="hover:text-black" href="mailto:filsanfouad2002@gmail.com"> <span className="font-bold">Email  me</span> ↗</a>  
                           </div> 
                  </div> 
        
        </div>
    )
}
export default Footer;