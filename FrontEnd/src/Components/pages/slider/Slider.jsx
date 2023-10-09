import React from 'react';
import '../../../assets/styles/slider.scss';
import mercedes from '../../../assets/images/mercedes.jpg';
import opel from '../../../assets/images/opel.jpg';
import audi from '../../../assets/images/audi.jpg';


function Slider() {
  let sections = document.querySelectorAll('section');
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
  
      if (top >= offset && top < offset + height) {
        sec.classList.add('show-animate');
      } else {
        sec.classList.remove('show-animate');
    }
    })
  }
  return (
    <div className='wrapper'>
      <section className='sec-1 show-animate'>
        <h1 className='animate'>Hi, I'm Petoyan</h1>
        <p className='animate'>Animation on Scroll using HTML CSS and Js React</p>
      </section>

      <section className='sec-2'>
        <h1 className='animate'>Keep Scrolling</h1>
        <p className='animate'>Animation on Scroll using HTML CSS and Js React</p>
      </section>

      <section className='sec-3'>
        <h1 className='animate'>Nice!</h1>
        <p className='animate'>Animation on Scroll using HTML CSS and Js React</p>
      </section>

      <section className='sec-4'>
        <h1 className='animate'>Very Good!<span className='showRight-animate'></span></h1>
        <p className='animate'>Animation on Scroll using HTML CSS and Js React<span className='showRight-animate'></span></p>
      </section>

      <section className='sec-5'>
        <div className="images">
          <img className='animate' src={mercedes} alt="bmw"/>
          <img className='animate' src={opel} alt="opel"/>
          <img className='animate' src={audi} alt="audi"/>
        </div>
      </section>
    </div>
  )
}

export default Slider