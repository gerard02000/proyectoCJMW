import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Carrusel = () => {
  return (
    <div className="slide-container lg:h-[100vh] sm:h-[50vh] sm:bg-cover lg:bg-cover">
      <Slide
        autoplay={true}
        cssClass="&quot;slider&quot;"
        onChange={function noRefCheck() { }}
        onStartChange={function noRefCheck() { }}
        pauseOnHover={false}
      >

        <div className="each-slide-effect lg:h-[100vh] sm:h-[50vh]">
          <div className=" lg:object-cover lg:object-center  sm:object-cover sm:object-center lg:w-full lg:h-full sm:h-full sm:w-full" >
            <img src="4.jpg" alt="" className='aspect-auto lg:object-cover lg:object-center lg:h-full lg:w-full sm:w-full sm:h-[50vh] sm:object-cover sm:object-center' />
          </div>
        </div>
        <div className="each-slide-effect lg:h-[100vh] sm:h-[50vh]">
          <div className=" lg:object-cover lg:object-center  sm:object-cover sm:object-center lg:w-full lg:h-full sm:h-full sm:w-full" >
            <img src="salon.jpg" alt="" className='aspect-auto lg:object-cover lg:object-center lg:h-full lg:w-full sm:w-full sm:h-[50vh] sm:object-cover sm:object-center' />
          </div>
        </div>
        <div className="each-slide-effect lg:h-[100vh] sm:h-[50vh]">
          <div className=" lg:object-cover lg:object-center  sm:object-cover sm:object-center lg:w-full lg:h-full sm:h-full sm:w-full" >
            <img src="4.jpg" alt="" className='aspect-auto lg:object-cover lg:object-center lg:h-full lg:w-full sm:w-full sm:h-[50vh] sm:object-cover sm:object-center' />
          </div>
        </div>
        <div className="each-slide-effect lg:h-[100vh] sm:h-[50vh]">
          <div className=" lg:w-full lg:h-full sm:h-full sm:w-full" >
            <img src="salon.jpg" alt="" className=' lg:object-cover lg:object-center lg:h-full lg:w-full sm:w-full sm:h-full sm:object-cover sm:object-center' /> 
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Carrusel;