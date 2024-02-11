import Container from "@/lib/Container";
import img from "./../../assets/image/macbook-exposed.png"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
const HeroSection = () => {
  const intro = {
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{duration:0.5, staggerChildren: 0.25,delayChildren:1}
    }
  }
  const introChildren={
    hidden:{opacity:0,y:-200},
    visible:{opacity:1, y:0,transition:{duration:0.7,type:'spring',bounce:0.4}}
  }

  const imageAnimation ={
    initial:{ scale:4,y:0,rotate:0},
    animation:{scale:1,y:20,rotate:-34,transition:{duration:1,
     y:{
      duration:2,
      repeat:Infinity,
      repeatType:'reverse',
      ease:'easeInOut',}

    }}
  }
 
    return (
        <div className="overflow-hidden pt-16">
            <Container className="grid grid-cols-1 lg:grid-cols-2 h-screen justify-between place-content-center">
              <motion.div
              variants={intro}
              initial="hidden"
              animate="visible"
              >
                <motion.h1 variants={introChildren} className="text-5xl lg:text-8xl text-nowrap font-bold">
                  <span className="text-gray">Don't worry,</span>
                  <br />
                  We'll fix it.</motion.h1>
                
                <motion.p variants={introChildren} className="max-w-[42ch] mt-10 mb-6">Welcome to <span className="font-semibold">iRepair</span>, your one-stop place for all kinds of <span className="font-semibold">Macbook repairs</span> and diagnostics.</motion.p>
                <motion.div variants={introChildren}>
                <Button>Book a service</Button>
                </motion.div>

              </motion.div>
              <motion.div 
              variants={imageAnimation}
              initial="initial"
              animate="animation"
              className=" w-[85%] mt-[10px] mx-auto lg:max-w-full">
                <img className=" h-[95%] bg-cover object-contain" src={img} alt="" />
              </motion.div>
            </Container>
        </div>
    );
};

export default HeroSection;