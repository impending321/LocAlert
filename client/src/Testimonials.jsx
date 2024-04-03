
// import React, { useState, useEffect } from 'react';

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [animationTimeout, setAnimationTimeout] = useState(null);
//   const [progressWidth, setProgressWidth] = useState(0);

//   useEffect(() => {
//     const testimonials = [
//         {
//           name: "Miyah Myles",
//           position: "Marketing",
//           photo:
//             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
//           text:
//             "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
//         },
//         {
//           name: "June Cha",
//           position: "Software Engineer",
//           photo: "https://randomuser.me/api/portraits/women/44.jpg",
//           text:
//             "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
//         },
//         {
//           name: "Iida Niskanen",
//           position: "Data Entry",
//           photo: "https://randomuser.me/api/portraits/women/68.jpg",
//           text:
//             "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
//         },
//         {
//           name: "Renee Sims",
//           position: "Receptionist",
//           photo: "https://randomuser.me/api/portraits/women/65.jpg",
//           text:
//             "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
//         },
//         {
//           name: "Jonathan Nunfiez",
//           position: "Graphic Designer",
//           photo: "https://randomuser.me/api/portraits/men/43.jpg",
//           text:
//             "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
//         },
//         {
//           name: "Sasha Ho",
//           position: "Accountant",
//           photo:
//             "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
//           text:
//             "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
//         },
//         {
//           name: "Veeti Seppanen",
//           position: "Director",
//           photo: "https://randomuser.me/api/portraits/men/97.jpg",
//           text:
//             "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
//         },
//       ];
//     setTestimonials(testimonials);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
//         setProgressWidth(0); // Reset progress bar width
//       }
//     }, 5000); // Change testimonial every 5 seconds

//     return () => clearInterval(interval);
//   }, [testimonials, isHovered]);

//   useEffect(() => {
//     if (!isHovered) {
//       setProgressWidth(0); // Reset progress bar width
//       const progressInterval = setInterval(() => {
//         setProgressWidth(prevWidth => prevWidth + 1); // Increase progress bar width
//       }, 50); // Increase width every 50 milliseconds

//       return () => clearInterval(progressInterval);
//     }
//   }, [isHovered]);

//   const handlePrevClick = () => {
//     setIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
//     setProgressWidth(0); // Reset progress bar width
//   };

//   const handleNextClick = () => {
//     setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
//     setProgressWidth(0); // Reset progress bar width
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (animationTimeout) {
//       clearTimeout(animationTimeout);
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (!animationTimeout) {
//       setAnimationTimeout(setTimeout(() => {
//         setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
//       }, 5000));
//     }
//   };

//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-evenly overflow-y-auto">
//       <h1 className="text-7xl">User Reviews</h1>
//       <div
//         className="testimonial-container bg-blue-600 text-white rounded-lg p-8 max-w-lg mx-auto relative"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Progress bar */}
//         <div className="progress-bar bg-white h-2 w-full rounded-md mb-4">
//           <div
//             className="progress bg-blue-400 h-full rounded-md"
//             style={{ width: `${progressWidth}%` }}
//           ></div>
//         </div>

//         {/* Testimonial content */}
//         <p className="testimonial text-lg leading-relaxed">
//           {testimonials.length > 0 && testimonials[index].text}
//         </p>

//         {/* User details */}
//         <div className="user mt-8 flex items-center">
//           <img
//             src={testimonials.length > 0 && testimonials[index].photo}
//             alt="user"
//             className="user-image h-12 w-12 rounded-full object-cover"
//           />
//           <div className="user-details ml-4">
//             <h4 className="username text-lg font-semibold">
//               {testimonials.length > 0 && testimonials[index].name}
//             </h4>
//             <p className="role">
//               {testimonials.length > 0 && testimonials[index].position}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex mt-4">
//         <button className="border border-gray-300 rounded-md px-4 py-2 mr-2 hover:bg-white hover:text-black" onClick={handlePrevClick}>Previous</button>
//         <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-white hover:text-black" onClick={handleNextClick}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animationTimeout, setAnimationTimeout] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const testimonials = [
                {
                  name: "Miyah Myles",
                  position: "Marketing",
                  photo:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
                  text:
                    "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
                },
                {
                  name: "June Cha",
                  position: "Software Engineer",
                  photo: "https://randomuser.me/api/portraits/women/44.jpg",
                  text:
                    "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
                },
                {
                  name: "Iida Niskanen",
                  position: "Data Entry",
                  photo: "https://randomuser.me/api/portraits/women/68.jpg",
                  text:
                    "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
                },
                {
                  name: "Renee Sims",
                  position: "Receptionist",
                  photo: "https://randomuser.me/api/portraits/women/65.jpg",
                  text:
                    "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
                },
                {
                  name: "Jonathan Nunfiez",
                  position: "Graphic Designer",
                  photo: "https://randomuser.me/api/portraits/men/43.jpg",
                  text:
                    "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
                },
                {
                  name: "Sasha Ho",
                  position: "Accountant",
                  photo:
                    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
                  text:
                    "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
                },
                {
                  name: "Veeti Seppanen",
                  position: "Director",
                  photo: "https://randomuser.me/api/portraits/men/97.jpg",
                  text:
                    "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
                },
              ];
    setTestimonials(testimonials);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        setProgressWidth(0); // Reset progress bar width
      }
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials, isHovered]);

  useEffect(() => {
    if (!isHovered) {
      setProgressWidth(0); // Reset progress bar width
      const progressInterval = setInterval(() => {
        setProgressWidth(prevWidth => prevWidth + 1); // Increase progress bar width
      }, 50); // Increase width every 50 milliseconds

      return () => clearInterval(progressInterval);
    }
  }, [isHovered]);

  const handlePrevClick = () => {
    setIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setProgressWidth(0); // Reset progress bar width
  };

  const handleNextClick = () => {
    setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    setProgressWidth(0); // Reset progress bar width
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!animationTimeout) {
      setAnimationTimeout(setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000));
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-evenly overflow-y-auto">
      <h1 className="text-7xl border-b-2 pb-3">User Reviews</h1>
      <div
        className="testimonial-container bg-blue-600 text-white rounded-lg p-8 max-w-lg mx-auto relative h-80vh overflow-y-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Progress bar */}
        <div className="progress-bar bg-white h-2 w-full rounded-md mb-4">
          <div
            className="progress bg-blue-400 h-full rounded-md"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>

        {/* Testimonial content */}
        <p className="testimonial text-lg leading-relaxed">
          {testimonials.length > 0 && testimonials[index].text}
        </p>

        {/* User details */}
        <div className="user mt-8 flex items-center">
          <img
            src={testimonials.length > 0 && testimonials[index].photo}
            alt="user"
            className="user-image h-12 w-12 rounded-full object-cover"
          />
          <div className="user-details ml-4">
            <h4 className="username text-lg font-semibold">
              {testimonials.length > 0 && testimonials[index].name}
            </h4>
            <p className="role">
              {testimonials.length > 0 && testimonials[index].position}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <button className="border border-gray-300 rounded-md px-4 py-2 mr-2 hover:bg-white hover:text-black" onClick={handlePrevClick}>Previous</button>
        <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-white hover:text-black" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;





