


import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth Context/AuthProvider";


const CardProductDettles = () => {
    const { users } = useContext(AuthContext)
    console.log(users.email)
    const email = users.email
    const carData = localStorage.getItem('dettlesP')
    const car = JSON.parse(carData)
    const { image, name, type, price, description, reating, brandName } = car
    const cardData = { image, name, type, price, description, reating, brandName, email }
    console.log(car)



    const handelCardAdd = allAddCard => {
        console.log(allAddCard)
        if (allAddCard) {
            console.log('added')
        }
        fetch('https://assinment10.vercel.app/addCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allAddCard)
        })
            .then(res => res.json())
            .then(reqData => {
                console.log(reqData)
                if (reqData.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Add Card Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <section className="md:flex justify-center items-center w-full gap-10">
                <div className="flex justify-start items-start  md:w-1/2">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="text-start md:w-1/2 md:mt-28">
                    <h1 className="lg:text-6xl text-3xl font-semibold">{name}</h1>
                    <h1 className="lg:text-4xl text-2xl font-medium text-red-600 my-7">{price}</h1>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p className="my-5">{description}</p>
                    <button onClick={() => handelCardAdd(cardData)} className="btn btn-neutral rounded-none">Add Card</button>
                    <div className="flex justify-start my-10 lg:gap-40">
                        <h1>Type : {type}</h1>
                        <h1>Brand Name : {brandName}</h1>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CardProductDettles;