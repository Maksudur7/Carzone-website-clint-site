import { useEffect, useState } from "react";
import HomeProductMap from "./HomeProductMap";


const HomeProductsData = () => {
    const [datas, setdatas] = useState([])
    useEffect(() => {
        fetch('https://assinment10.vercel.app/Product')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-5 mt-5">
            {
                datas.map(Element => <HomeProductMap key={Element._id} data={Element}></HomeProductMap>)
            }
        </div>
    );
};

export default HomeProductsData;