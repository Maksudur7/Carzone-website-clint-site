import { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import ProductCard from "./ProductCard";


const ProductDettles = () => {


    const localData = localStorage.getItem('data')
    const data = JSON.parse(localData)
    console.log(data)
    console.log(data.name)
    const [cars, setCars] = useState([])
    console.log(cars)
    const [sliderImg, setSliderImg] = useState([])
    // console.log(cars)
    // console.log(sliderImg)
    useEffect(() => {
        fetch('https://assinment10.vercel.app/Product')
            .then(res => res.json())
            .then(productData => {
                console.log(productData)
                const matchName = productData.filter(Element => Element.brandName.toUpperCase() === data.name.toUpperCase())
                console.log('meatching',matchName)
                console.log(data.name.toUpperCase())
                setCars(...cars, matchName)

            })

        fetch('https://assinment10.vercel.app/carImages')
            .then(res => res.json())
            .then(sliderData => {
                console.log(sliderData)
                const matchSlData = sliderData.filter(element => element.brandName.toUpperCase() === data.name.toUpperCase())
                console.log(matchSlData)
                setSliderImg(matchSlData)

            })
    }, [])

    return (
        <div>

            <section className="w-full lg:flex gap-5 mt-10">
                <div className="lg:w-3/4">
                    {
                        sliderImg.slice(0, 1).map(Simg => <ProductSlider key={Simg._id}
                            cars={cars}
                            img={Simg}></ProductSlider>)
                    }
                </div>
                <div className="flex justify-center  ">
                    <div className="border h-96 p-5 rounded-2xl">
                        <h1 className="text-6xl font-semibold">{data.name}</h1>
                        <img className="h-40 mt-10" src={data.photo} alt="" />
                    </div>
                </div>
            </section>
            <section className="grid lg:grid-cols-2 gap-10">
                {
                    cars.map(car => <ProductCard key={car._id} car={car}></ProductCard>)
                }
            </section>
        </div>
    );
};

export default ProductDettles;