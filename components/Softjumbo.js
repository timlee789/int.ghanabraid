import React from 'react';
import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head'

function Softjumbo( ) {
   
  return (
    
    <div className={cla.main}> 
     <Head>  
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>3X Ghana Braid Giveaway Event</title>
        <meta name="description" content="3X Ghana Braid Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg" />     
        <meta property="og:title" content="3X Ghana Braid Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg"/>
        <meta property="og:description" content="3X Ghana Braid Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head> 
      
     <div className={cla.phototitle}>Realistic Soft Jumbo Braid</div>
    
    <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/softjumbo1.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>100% Kanekalon High Quality Braid</div>
       </div>
     </div>
       <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/softjumbo2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}></div>
       </div>
     </div>
       
       <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/softjumbo5.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>Over 60 different colors</div>
       </div>
     </div>
     <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/softjumbo3.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>Over 50 different colors</div>
       </div>
     </div>
       <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/softjumbo4.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}> </div>
       </div>
     </div>
       
      
     <div className={cla.album}>
       <div className={cla.box} > 
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>   </div>
       </div>
     </div>
      
       
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaspec.jpg' alt='banner' width='600px' height='200px' className={cla.image}/>
       
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><Image alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" width='180px' height='60px' /></a>
      </div>
      </div>
       </div>
    
  )
}

export default Softjumbo;