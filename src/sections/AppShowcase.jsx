import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
  <div className="w-full">
    <div className="showcaselayout">
      <div ref={rydeRef} className="first-project-wrapper">
        <div className="first-project-image-wrapper">
          <img
            src="/assets/project1.png"
            alt="Ryde App Interface"
            className="first-project-image"
          />
        </div>
        <div className="first-project-text">
          <div className="project-badges">{/* badges if any */}</div>
          <h2 className="project-title head-text">
            Modern and responsive online watch store
          </h2>
          <p className="text-white-50 md:text-xl text-white-600">
            An app built with React,TailwindCSS for a fast,
            user-friendly experience.
          </p>
        </div>
      </div>

      <div className="project-list-wrapper overflow-hidden">
        <div className="project" ref={libraryRef}>
          <div className="project-image-wrapper bg-[#293123]">
            <img
              src="/assets/project2.png"
              alt="A PAYMENT GATEWAY PLATFORM"
              className="project-image"
            />
          </div>
          <h2 className="project-heading head-text">Modern Payment Platform</h2>
        </div>

        <div className="project" ref={ycDirectoryRef}>
          <div className="project-image-wrapper bg-[#081334]">
            <img
              src="/assets/project3.png"
              alt="YC Directory App"
              className="project-image"
            />
          </div>
          <h2 className="project-heading head-text">
             Multi-user Chat App Platform 
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>  
  );
};

export default AppShowcase;