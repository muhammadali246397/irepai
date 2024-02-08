import { Button } from "@/components/ui/button";
import Container from "@/lib/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
          <Container>
            <nav className="flex justify-between items-center h-[64px]">
                <span className="text-3xl">iRepair</span>
                <ul className="space-x-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <Button className="font-semibold">Login</Button>
                </ul>
            </nav>
          </Container>
        </div>
    );
};

export default Navbar;