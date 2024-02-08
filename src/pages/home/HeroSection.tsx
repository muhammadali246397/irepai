import Container from "@/lib/Container";
import img from "./../../assets/image/macbook-exposed.png"
import { Button } from "@/components/ui/button";


const HeroSection = () => {
    return (
        <div>
            <Container className="grid grid-cols-2 h-screen bg-red-700">
              <div>
                <h1 className="text-8xl font-bold">Don't worry,</h1>
                <h1 className="text-8xl font-bold">We'll fix it.</h1>
                <p className="">Welcome to <span className="font-semibold">iRepair</span>, your one-stop place for all kinds of <span className="font-semibold">Macbook repairs</span> and diagnostics.</p>
                <Button>Book a service</Button>

              </div>
              <div>
                <img src={img} alt="" />
              </div>
            </Container>
        </div>
    );
};

export default HeroSection;