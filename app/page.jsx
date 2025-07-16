import Photo from "@/components/Photo";
import RotatingText from "@/components/Rotating Text/RotatingText";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-3 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="animated-gradient">Siddhant Kapoor</span>
            </h1>
            <p className="max-w-[500px] text-justify text-white/80">
              I excel at creating elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-wrap justify-center xl:justify-start items-center gap-3 mb-9 text-white/80">
              <span>Curently working with </span>
              <RotatingText
                texts={['Vue.js', 'TypeScript', 'GraphQL']}
                mainClassName="px-2 py-0.5 bg-accent text-black overflow-hidden justify-center rounded-md"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                animationDelay={1100} // <-- add this!
              />
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="https://drive.google.com/uc?export=download&id=12agRxCUDcEBfNRYYNoByTm3CwVpYjIl-" download="Siddhant_Resume.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;