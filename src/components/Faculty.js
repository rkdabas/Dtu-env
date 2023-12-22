import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from './images/faculty/img1.jpg';
import Img2 from './images/faculty/img2.jpg';
import Img4 from './images/faculty/img4.jpg';
import Img5 from './images/faculty/img5.jpg';
import Img6 from './images/faculty/img6.jpg';
import Img7 from './images/faculty/img7.jpg';

export default function Faculty() {
  return (
    <div className="pt-14 max-w-5xl mx-28">
      <h2 className='-mt-8 justify-center items-center flex flex-row font-sans font-medium shadow-lg bg-gray-50'>REGULAR FACULTY</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        
                                                              {/* Faculty Card 1 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img1} alt="Faculty 1" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/anil_k_haritash.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Dr Anil Kumar Haritash
              </Link>
            </p>
            <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>HEAD OF THE DEPARTMENT</span>
              </p>
            </div>
            <p className='px-2'> 
              <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'>Professor</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>M.Sc., M.Tech., Ph.D.</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'>Environmental microbiology, Bioremediation</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>akharitash@dce.ac.in</a><br />
            </p>
          </div>
        </div>

                                                              {/* Faculty Card 2 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img2} alt="Faculty 2" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/sksingh.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Prof. S. K. Singh
              </Link>
            </p>
            <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>PROFESSOR</span>
              </p>
            </div>
            <p className='px-2'>
              <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'>Professor</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'> B.E., M. Tech., Ph. D., FIEE, FICS, FIAH, FIE, FUWAI, FIGSM.Sc., M.Tech., Ph.D.</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'>Solid waste processing, Wastewater treatment designs, Water treatment designs, Water quality modeling, Solar detoxification, EIA & Auditing</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>sksingh@dce.ac.in</a><br />
            </p>
          </div>
        </div>

                                                              {/* Faculty Card 3 */}
                                                              <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
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
        </div>


        

                                                              {/* Faculty Card 5 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
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
        </div>
        
                                                              {/* Faculty Card 4 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img5} alt="Faculty 5" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/lovleengupta.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Dr. Lovleen Gupta
              </Link>
            </p>
            <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>ASSISTANT PROFESSOR</span>
              </p>
            </div>
            <p className='px-2'>
              <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'>Assistant Professor</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>B.E. (PEC, Chandigarh), M.S. (Lehigh University, USA), Ph.D. (IIT Delhi)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'>GHG emissions, Human Health Risk Assessment, Air quality assessment, Aerosol source apportionment, Climate Change (Focusing on carbon)</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>lgupta@dce.ac.in</a><br />
            </p> 
          </div>
        </div>


                                                            {/* Faculty Card 6 */}
        <div className="shadow-md rounded-lg overflow-hidden mb-24 bg-gray-100">
          <div className='pt-4'>
            <img src={Img7} alt="Faculty 7" className="w-full h-60 object-scale-down" />
          </div>
          <div className="py-2 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold leading-6 -mb-1 shadow-amber-200 ">
              <Link to="http://www.dtu.ac.in/Web/Departments/Environment/faculty/geetasingh.php" className="text-lg font-medium text-rose-600 hover:text-rose-500	no-underline font-sans">
                Anunay Gour
              </Link>
            </p>
            <div>
              <p className='leading-6 font-medium no-underline font-sans text-slate-800'>
                <span>ASSISTANT PROFESSOR</span>
              </p>
            </div>
            <p className='px-2'>
              <span className='font-semibold text-base leading-6 text-slate-800 '>Designation:</span> <span className='text-base leading-6 font-sans'>Assistant Professor</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Education:</span> <span className='text-base leading-6 font-sans'>PhD (Pursuing), M.E. Civil (Environment), B.E. (Civil Engineering), Dipl (Civil Engineering), AMIE</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Areas of interest:</span > <span className='text-base leading-6 font-sans'>Environmental Engineering, Water & Wastewater Engineering, Air Pollution, Environmental Impact Assessment, System Simulation & Modeling</span><br />
              <span className='font-semibold text-base  leading-6 text-slate-800'>Email:</span> <a>anunaygour@dtu.ac.in</a><br />
            </p>
          </div>
        </div>
        

      </div>
    </div>
  );
}

