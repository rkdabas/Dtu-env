// import { useEffect, useState } from "react";

// function Slider({images, title}) {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

//     function setSlider(number) {
//         console.log('number', number);
//         console.log('index', slideIndex);
        
//         if (slideIndex === 0 && number === -1) {
//             console.log('1');
//             console.log(images.length)
//             setSlideIndex(images.length -1);
//             return
//         }

//         if (slideIndex === images.length -1 && number === 1) {
//             setSlideIndex(0);
//             return
//         }

//         else {
//             let newNumber = slideIndex + number
//             setSlideIndex(newNumber)
//             return

//         }
//     }

//     useEffect(() => {
//         // console.log(slideIndex);
//         // console.log(activeSlide);
//         // setActiveSlide(images[slideIndex])

//         const timer = setTimeout(() => {
//             setActiveSlide(images[slideIndex])
//         }, 100);

//         return () => clearTimeout(timer);
//     }, [slideIndex, images]);

//     return (
//     <div id="slider" className="flex flex-col items-center justify-center h-screen ">
//         {/* <h1 className="text-2xl font-bold text-slate-700 mb-4">{title}</h1> */}
//         {images &&
//         <>
//             <div className="slider-container flex flex-col items-center justify-center w-screen h-full -mb-20 ">
//                 {/* <h1 className="text-slate-700 text-2xl font-bold mb-6">{title}</h1> */}
//                 <div className="slider-img max-w-screen-lg	 w-full h-4/5 rounded-md overflow-hidden shadow-xl flex justify-center items-center ">
//                     <img
//                     className="shadow-lg object-fit h-full w-full"
//                     src={activeSlide}
//                     alt={`Img ${activeSlide}`}/>
//                 </div>
//                 <a className="btn-prev text-3xl absolute bg-slate-300 left-5 w-10 h-10 sm:left-16 text-current p-6 rounded-full shadow-xl hover:cursor-pointer items-center justify-center flex"
//                 onClick={() => setSlider(-1)}>&lt;
//                 </a>
//                 <a className="btn-next text-3xl absolute bg-slate-300 right-5 w-10 h-10 sm:right-16 text-current p-6 rounded-full shadow-lg hover:cursor-pointer items-center justify-center flex -mt-2"
//                     onClick={() => setSlider(1)}>&gt;
//                 </a>
//             </div>
//         </>}
//     </div> );
// }

// export default Slider;

import { useEffect, useState } from "react";

function Slider({ images, title }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

  function setSlider(number) {
    if (slideIndex === 0 && number === -1) {
      setSlideIndex(images.length - 1);
    } else if (slideIndex === images.length - 1 && number === 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((prevIndex) => prevIndex + number);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlider(1); // Auto-increment slideIndex after the timeout
    }, 5000); // Change the timeout duration to 5000 milliseconds (5 seconds)

    return () => clearTimeout(timer);
  }, [slideIndex, images]);

  useEffect(() => {
    setActiveSlide(images[slideIndex]);
  }, [slideIndex, images]);

  return (
    <div id="slider" className="flex flex-col items-center justify-center h-screen ">
          {/* ... your existing JSX ... */}
                 {/* <h1 className="text-2xl font-bold text-slate-700 mb-4">{title}</h1> */}
         {images &&
         <>
             <div className="slider-container flex flex-col items-center justify-center w-screen h-full -mb-20 ">
                 {/* <h1 className="text-slate-700 text-2xl font-bold mb-6">{title}</h1> */}
                 <div className="slider-img max-w-screen-lg	 w-full h-4/5 rounded-md overflow-hidden shadow-xl flex justify-center items-center ">
                     <img
                     className="shadow-lg object-fit h-full w-full"
                     src={activeSlide}
                     alt={`Img ${activeSlide}`}/>
                 </div>
                 <a className="btn-prev text-4xl absolute left-32 w-10 h-10 text-red-900 p-6 rounded-full shadow-xl hover:cursor-pointer items-center justify-center flex"
                 onClick={() => setSlider(-1)}>&lt;
                 </a>
                 <a className="btn-next text-4xl absolute  right-36 w-10 h-10  text-red-900 rounded-full shadow-lg hover:cursor-pointer items-center justify-center flex -mt-2"
                     onClick={() => setSlider(1)}>&gt;
                 </a>
             </div>
         </>}
    </div>
  );
}

export default Slider;
