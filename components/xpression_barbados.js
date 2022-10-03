import React from 'react';
import cla from '../styles/form.module.css';
import Image from 'next/image';
import Head from 'next/head'

function xpression( ) {
  
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
      
     <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/4xxpression_head.jpg' alt='banner' width='800px' height='400px' className={cla.image}/>
       </div>
     </div>
     <div className={cla.wrapper}><h1 className={cla.coming}>Coming soon to Barbados</h1></div>
       <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/4xxpression1.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       {/* <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div> */}
       </div>
     </div>
     <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/4xxpression2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       {/* <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div> */}
       </div>
     </div>
   
       
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaspec.jpg' alt='banner' width='800px' height='206px' className={cla.image}/>
       
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><Image alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" width='180px' height='60px' /></a>
      </div>
      </div>
       </div>
    
  )
}

export default xpression