import './Crew.css'
import { Swiper, SwiperSlide } from "swiper/react";

import hurley from "./assets/crew/image-douglas-hurley.png"
import mark from "./assets/crew/image-mark-shuttleworth.png"
import victor from "./assets/crew/image-victor-glover.png"
import anousheh from "./assets/crew/image-anousheh-ansari.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


export const Crew = (crewData) =>
{
    const personData=crewData.crewData;
   
  
return<div className="crew">
  <p className='hello-page-p'><span className='number-page-span'>02</span> Meet Your Creew</p>
  
    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       <SwiperSlide className='crew-content'>
        <div  className='crew-member'>
        <div>
        <p className='profession'>{personData[0].role}</p> 
        <p className='name'>{personData[0].name}</p> 
        <p className='person-description'>{personData[0].bio}</p> 
        </div>
        <img src={hurley}></img>
        </div>
        </SwiperSlide>
        <SwiperSlide className='crew-content'>
        <div  className='crew-member'>
        <div>
        <p className='profession'>{personData[1].role}</p> 
        <p className='name'>{personData[1].name}</p> 
        <p className='person-description'>{personData[1].bio}</p> 
        </div>
        <img src={mark}></img>
        </div>
        </SwiperSlide>
        <SwiperSlide className='crew-content'>
        <div  className='crew-member'>
        <div>
        <p className='profession'>{personData[2].role}</p> 
        <p className='name'>{personData[2].name}</p> 
        <p className='person-description'>{personData[2].bio}</p> 
        </div>
        <img src={victor}></img>
        </div>
        </SwiperSlide>
        <SwiperSlide className='crew-content'>
        <div  className='crew-member'>
        <div>
        <p className='profession'>{personData[3].role}</p> 
        <p className='name'>{personData[3].name}</p> 
        <p className='person-description'>{personData[3].bio}</p> 
        </div>
        <img src={anousheh}></img>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
}