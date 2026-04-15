# What I've learned

find out about pointer-fine && pointer-coarse
How to build carousells. Find out about Icon-type
instead of creating seperate refs for each children every time we can use parent ref.current.children
const icons = Array.from(spanRef.current.children);

      icons.forEach((icon) => {
        gsap.from(icon, {
          scale: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
      like here
