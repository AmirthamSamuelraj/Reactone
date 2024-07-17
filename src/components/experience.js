import hlogo from '../assets/images/hlogo.png';
import clogo from '../assets/images/clogo.png';
import rlogo from '../assets/images/rlogo.png';
import python from '../assets/images/python.png';
import blogo from '../assets/images/blogo.png';
import flogo from '../assets/images/flogo.png';
import sqllogo from '../assets/images/sqllogo.png';
import Expimg from './expimg';

const Experience = () => {
   return ( 
       <section className='bg-light p-3'>
       <div className="container  ">
           <h1 className='text-dark text-center p-3'>Experience</h1>
       <div className="row ">
           <div className="col-12 col-md-6 p-4 mt-2 expcont">
    
               <img src={hlogo} alt="" className='img-fluid   custom-size slogo custom-card  ms-4  mb-2'/>
               <img src={clogo} alt="" className='img-fluid custom-size custom-card  ms-5 mb-2 '/>
               <img src={rlogo} alt="" className='img-fluid  custom-size   custom-card   ms-4 mb-2   '/>
               <img src={blogo} alt="" className='img-fluid  custom-size slogo custom-card ms-5 '/>
               <img src={python} alt="" className='img-fluid custom-size blogo custom-card  ms-5 mb-2'/>
               <img src={sqllogo} alt="" className='img-fluid  custom-size blogo  custom-card  ms-5  '/>
               <img src={flogo} alt="" className='img-fluid   custom-size  custom-card ms-5 '/>
               
           </div>
           <div className="col-12 col-md-6 p-4 mt-2">
           <Expimg/>
           </div>
       </div>
       </div>
       </section>
   );
}

export default Experience;