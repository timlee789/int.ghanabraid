import React from 'react';
import cla from '../styles/form.module.css';

import Image from 'next/image';


function Softjumbo( ) {
   
  return (
    
    <div className={cla.main}> 
  
     <div className={cla.phototitle}>AD Country</div>
    
    <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/country.jpg' alt='banner' width='800px' height='1071px' className={cla.image}/>
       <div className={cla.videotitle}>AD Country</div>
       </div>
     
      
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><Image alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" width='180px' height='60px' /></a>
      </div>
      </div>
       </div>
       </div>
    
  )
}

export default Softjumbo;