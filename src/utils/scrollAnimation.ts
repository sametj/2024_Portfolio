import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function animate() {
  const splitType = document.querySelectorAll(".about_me");
  splitType.forEach((char) => {
    const text = new SplitType(char as HTMLElement, { types: "chars" });
    gsap.from(text.chars, {
      scrollTrigger: {
        scroller: ".about_me_container",
        trigger: char,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.1,
      duration: 2,
      ease: "power4",
    });
  });
}