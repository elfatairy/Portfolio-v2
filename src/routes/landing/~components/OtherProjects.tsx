import { otherProjects, type OtherProject } from "@/data/otherProjects";
import { animate, motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function OtherProjects() {
  const [carouselRef, { width }] = useMeasure();

  const xTrans = useMotionValue(0);

  useEffect(() => {
    const firstPosition = -width / 2 - 8;
    const controls = animate(xTrans, [0, firstPosition], {
      ease: "linear",
      duration: width / 270 * ((1536 / window.innerWidth - 1) * 0.2 + 1),
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTrans, width]);

  return (
    <div className="text-foreground justify-center flex flex-col pt-10 lg:pt-25">
      <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center mb-10">Other Projects</h2>

      <div className="flex max-w-screen flex-col items-center overflow-hidden relative bg-background z-elevated-2 pb-10">
        <motion.div
          className=" flex self-start gap-4"
          ref={carouselRef}
          style={{ x: xTrans }}
        >
          {
            [...otherProjects, ...otherProjects].map((project, index) => (
              <OtherProject key={index} {...project} />
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

function OtherProject({ name, video }: OtherProject) {
  return (
    <video
      src={video}
      className="shrink-0 max-w-none h-[344px] overflow-hidden rounded-xl md:h-[433px] md:rounded-2xl lg:h-[541px] lg:rounded-3xl xl:h-[606px]"
      loop
      autoPlay
      muted
      playsInline
      preload="none"
      aria-label={name}
    />
  )
}