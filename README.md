# What I've learned

1.  find out about pointer-fine && pointer-coarse
2.  How to build carousells. Find out about Icon-type
3.  instead of creating seperate refs for each children every time we can use parent ref.current.children
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

4.  In props you can pass whole color instead like text-blue-500 then tailwind will be satisfied instead of text-${color}
5.  not to forget to put 3d models into public folder / increace scale of 3d model in order to see it / check position
6.  Fixed breaks out of relative and attaches to monitor
7.  A little bit more about margin-auto, depends on flex and pushes according to width;
