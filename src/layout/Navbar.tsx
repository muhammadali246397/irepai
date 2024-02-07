import { Button } from "@/components/ui/button";
import Container from "@/lib/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
          <Container className="border-b-2">
            <nav className="flex justify-between items-center">
                <span>iRepair</span>
                <ul className="space-x-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <Button>login</Button>
                </ul>
            </nav>
          </Container>
        </div>
    );
};

export default Navbar;