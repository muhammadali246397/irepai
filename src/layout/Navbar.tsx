import { Button } from "@/components/ui/button";
import Container from "@/lib/Container";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
const Navbar = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,delay:1}}
        className=" w-full fixed bg-white z-50">
          <Container>
            <nav className="flex justify-between items-center h-16">
                <span className="text-3xl">iRepair</span>
                <ul className="space-x-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <Button className="font-semibold">Login</Button>
                </ul>
            </nav>
          </Container>
        </motion.div>
    );
};

export default Navbar;