import { useEffect, useState } from "react";
import ShowBrand from "../Brand section/ShowBrand";
import HomeSection1 from "./HomeSection1";
import { Link } from "react-router-dom";



const Home = () => {
    const [datas, setdatas] = useState([])
    useEffect(() => {
        fetch('https://assinment10.vercel.app/Product')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])
    return (
        <div>
            <section>
                <div className=" hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/xjq31n7/replicate-prediction-23fvwjrbb2gu3gp6rba47jyane.jpg)' }}>
                    <div className="bg-opacity-40"></div>
                    <div className="flex justify-start md:mt-52 lg:-ml-[750px] md:-ml-[450px] ">
                        <button className="btn btn-primary">Get Start</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="text-start mt-20">
                    <h1 className="text-5xl">Our Trusted Brands</h1>
                </div>
                <ShowBrand></ShowBrand>
            </section>
            <section className="mt-20" >
                <div className="flex justify-center">
                    <div className=" w-1/2">
                        <h1 className="md:text-5xl text-3xl">We have all type cars</h1>
                        <hr className="mt-3 h-4" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 mt-5">
                    {
                        datas.slice(0, 3).map(data => <HomeSection1 key={data._id} data={data}></HomeSection1>)
                    }
                </div>
                <div className="mt-10">
                    <Link to={`/homeSection1`}> <button className="btn btn-neutral text-white">See more...</button></Link>
                </div>
            </section>
            <section className="grid lg:grid-cols-2 mt-20">
                <div className="w-full">
                    <div className="bg-gray-500 h-[460px] w-[300px] flex justify-center  items-center">
                    </div>
                    <img className="h-96 ml-10 md:w-full w-96 -mt-[424px]" src="https://i.ibb.co/yp8kbx3/bmw-m8-gran-coupe-onepager-sp-desktop-jpg-asset-1638370287977.jpg" alt="" />
                </div>
                <div className="lg:ml-20 lg:mt-0 mt-20 text-start">
                    <h1 className="text-6xl font-medium mb-5">BMW M8</h1>
                    <p className="text-lg">With the new BMW 8 Series Gran Coupé M Automobiles, you experience four-door luxury cars full of adrenaline-charged sportiness.

                        <br /><br />
                        The new BMW M8 Competition Gran Coupé combines pure M genes with supreme exclusivity – for driving adventures full of sporting flair and luxury.
                        The new BMW M850i xDrive Gran Coupé impresses with a unique synthesis of comfort, performance and efficiency.
                        <br /><br />

                        The BMW M8 Competition Gran Coupé:
                        Fuel consumption in l/100 km (combined): 10.7
                        CO2 emissions in g/km (combined): 243
                        <br /><br />

                        The BMW M850i xDrive Gran Coupé:
                        Fuel consumption in l/100 km (combined): 10.7
                        CO2 emissions in g/km (combined): 246</p>
                </div>
            </section>

        </div>
    );
};

export default Home;