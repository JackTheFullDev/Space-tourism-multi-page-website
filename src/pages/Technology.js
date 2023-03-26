import './Technology.css'
import Vehicle from  "./assets/technology/image-launch-vehicle-portrait.jpg"
import Spaceport from "./assets/technology/image-spaceport-portrait.jpg";
import Capsule from "./assets/technology/image-space-capsule-portrait.jpg"
import { useState } from 'react';



export const Technology = (technology) =>
{
  const technologyContent=technology.technologyData;
  const [technologyData , setTechnologyData] = useState();
return<div className="technology">
  <p className='hello-page-p'><span className='number-page-span'>03</span> Space Launch 101</p>
  <section className='main-technology-container'>
  <div className='buttons-technology-switch'>
    <button className='switcher-technology'>1</button>
    <button className='switcher-technology'>2</button>
    <button className='switcher-technology'>3</button>
  </div>
  <div className='text-technology'>
    <p id="title-technology">The terminology...</p>
    <h2 id="name-technology">{technologyContent[0].name}</h2>
    <p id="description-technology">{technologyContent[0].description}</p>
  </div>
  <div className='img-technology'>
    <img src={Vehicle} alt="Launch vehicle"></img>
  </div>
  </section>
</div>
}