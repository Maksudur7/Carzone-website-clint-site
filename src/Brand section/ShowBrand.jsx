import { useEffect, useState } from "react";
import ShowBrandDettles from "./ShowBrandDettles";



const ShowBrand = () => {
    const [datas, setdatas] = useState([])
    // console.log(da)
    useEffect(() => {
        fetch('https://assinment10.vercel.app/carBrand')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {
                datas.slice(0,6).map(Element => <ShowBrandDettles key={Element._id} data={Element}></ShowBrandDettles>)
            }
        </div>
    );
};

export default ShowBrand;