import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from './images/guestFaculty/arun kumar.jpg';
import Img2 from './images/faculty/img2.jpg';
import Img3 from './images/guestFaculty/manisha sharma.jpg';
import Img4 from './images/guestFaculty/sakshi.jpg';
import Img6 from './images/faculty/img6.jpg';
import Img7 from './images/faculty/img7.jpg';

export default function Faculty() {
  return (
    <div className="pt-14 mx-28 	">
      <h2 className='-mt-8 justify-center items-center flex flex-row font-sans font-medium shadow-lg bg-gray-50'>GUEST FACULTY</h2>
      <div className="max-w-screen grid grid-cols-1 md:grid-cols-2  gap-4 pt-4">
        
                                                              {/* Faculty Card 1 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img1}  alt="Faculty 1" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/anil_k_haritash.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Arun Kumar
              </Link>
            </p>
            {/* <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>HEAD OF THE DEPARTMENT</span>
              </p>
            </div> */}
            <p className='px-2'> 
              {/* <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'></span><br /> */}
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>B.Sc.(1984), M.Tech IIT,Delhi (1996), Ph.D DTU (2023), PGD in Vastu Shastra (2013)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of Specialization:</span > <span className='text-base leading-6 font-sans'>Modelling and application of Al tool and software in pavement performance studies(ANN) and effect of wind on high rise buildings (ANSYS)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a> arunkumar.dtu@gmail.com</a><br />
            </p>
          </div>
        </div>

                                                              {/* Faculty Card 2 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img  alt="Faculty 2" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/sksingh.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Vandana
              </Link>
            </p>
            {/* <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>PROFESSOR</span>
              </p>
            </div> */}
            <p className='px-2'>
              {/* <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'></span><br /> */}
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>Ph.D in Environmental Engineering (DTU, 2019), M.A. in Sociology (IGNOU, 2012), M.E in Environmental Engineering (PEC University, 2009), M.Sc. in Environmental Science (PU, 2007), B.Sc. in Biotechnology(Kurukshetra University)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of Specialization:</span > <span className='text-base leading-6 font-sans'>Waste Water Treatment, Water Treatment, Bioremediation, Environmental chemistry, Water Pollution, Environmental Management, Environmental Monitoring</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>vandana.agrawa@gmail.com</a><br />
            </p>
          </div>
        </div>

                                                              {/* Faculty Card 3 */}
        
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img3} alt="Faculty 3" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/geetasingh.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Manisha
              </Link>
            </p>
            {/* <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>ASSISTANT PROFESSOR</span>
              </p>
            </div> */}
            <p className='px-2'>
              {/* <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'></span><br /> */}
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>PhD(DTU,2020), M.Tech(Thapar University,2011), M.Sc(GJ University of Science & Technology,2009), B.Sc(MDU,2007)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of Specialization:</span > <span className='text-base leading-6 font-sans'>Pharmaceutical Wastewater, Fenton's Process</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>manishav9@gmail.com</a><br />
            </p>
          </div>
        </div>

                                                              {/* Faculty Card 4 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img4}  alt="Faculty 4" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/lovleengupta.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Sakshi
              </Link>
            </p>
            {/* <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>ASSISTANT PROFESSOR</span>
              </p>
            </div> */}
            <p className='px-2'>
              {/* <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'></span><br /> */}
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>Doctor of Philosophy in Environmental Engineering(DTU,2021), M.Tech,Bioinformatics(DTU,2015), B.Tech,Biotechnology(Dr. B.R Ambedkar NIT, 2012)</span><br />
              {/* <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'></span><br /> */}
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a> saakshi1412@gmail.com</a><br />
            </p> 
          </div>
        </div>

                                                              {/* Faculty Card 5 */}
        {/* <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img6} alt="Faculty 6" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/geetasingh.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Dr. Rajeev Kumar Mishra
              </Link>
            </p>
            <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>ASSISTANT PROFESSOR</span>
              </p>
            </div>
            <p className='px-2'>
              <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'>Assistant Professor</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>M. Tech., PhD (IIT Roorkee)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'>Environmental implications of urban transport systems, Urban air pollution analysis & modeling, Traffic noise pollution modeling, Acoustics & barrier designing</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>rajeevkumarmishra@dtu.ac.in, rajeevmishraiitr@gmail.com</a><br />
            </p>
  
          </div>
        </div> */}

                                                              {/* Faculty Card 6 */}
        {/* <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img4} alt="Faculty 3" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/geetasingh.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Dr. Geeta Singh 
              </Link>
            </p>
            <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>ASSISTANT PROFESSOR</span>
              </p>
            </div>
            <p className='px-2'>
              <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'>Assistant Professor</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>PhD</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'>Solid waste processing, Wastewater treatment designs, Water treatment designs, Water quality modeling, Solar detoxification, EIA & Auditing</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>geeta.singh@dce.ac.in</a><br />
            </p>           
          </div>
        </div> */}

      </div>
    </div>
  );
}

