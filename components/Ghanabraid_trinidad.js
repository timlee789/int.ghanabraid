import React from 'react';
import cla from '../styles/form.module.css';
import Image from 'next/image';
import Head from 'next/head'

function Ghanabraid( ) {
  
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
       <Image src='https://bijouxhair.com/tim/landing2/cutenbeauty.jpg' alt='banner' width='800px' height='400px' className={cla.image}/>
       </div>
     </div>
     <div className={cla.wrapper}><h1 className={cla.coming}>Free Giveaway in Trinidad</h1></div>
       <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/TrinidadEvent.jpg' alt='banner' width='800px' height='1229px' className={cla.image}/>
       {/* <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div> */}
       </div>
     </div>
     <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/stores.jpg' alt='banner' width='800px' height='350px' className={cla.image}/>
       {/* <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div> */}
       </div>
     </div>
    <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid is Highend Braid</div>
       </div>
     </div>
       
       <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/3xghanacolor.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>Over 50 different colors</div>
       </div>
     </div>
       <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto5.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 100% Kanekalon </div>
       </div>
     </div>
     <div className={cla.album}>
       <div className={cla.box} >
       <Image src='https://bijouxhair.com/tim/landing2/3xghana12.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 100% Kanekalon </div>
       </div>
     </div>
       
       <div className={cla.album}>
       <div className={cla.box} > 
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/uDyX878Q8mc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Wynwood Miami FL</div>
       </div>
       </div>
       <div className={cla.album}>
       <div className={cla.box} > 
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/dr8M6brJB4s?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Bahamas</div>   
       </div>
       </div>
       <div className={cla.album}>
       <div className={cla.box} > 
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/mnM5Noi_W7c?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Kingston Jamaica</div>
       </div>
       </div>
       <div className={cla.album}>
       <div className={cla.box} > 
       <iframe width="100%" height="315" src="https://www.youtube.com/embed/xN0WFhVQxV0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Miami Beach</div>
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

export default Ghanabraid