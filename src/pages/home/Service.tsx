import Container from "@/lib/Container";
import BatteryReplacement from "./service/BatteryReplacement";

const Service = () => {
    return (
        <div>
            <Container>
                <div className="text-center">
                    <h1 className=""> <span className="text-primary">Services</span> that we provide.</h1>
                    <p className="w-[76ch] text-secondary mt-7 mb-14 mx-auto">We provide various computer repair services and solutions for our new and regular customers.
                        Feel free to find out more below.</p>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="bg-gray h-[300px] col-span-12 rounded-md">
                        <BatteryReplacement></BatteryReplacement>
                    </div>
                    <div className="bg-gray h-[300px] col-span-4 rounded-md"></div>
                    <div className="bg-gray h-[300px] col-span-8 rounded-md"></div>
                    <div className="bg-gray h-[300px] col-span-12 rounded-md"></div>
                    <div className="bg-gray h-[300px] col-span-4 rounded-md"></div>
                    <div className="bg-gray h-[300px] col-span-4 rounded-md"></div>
                    <div className="bg-gray h-[300px] col-span-4 rounded-md"></div>
                </div>
            </Container>
        </div>
    );
};

export default Service;