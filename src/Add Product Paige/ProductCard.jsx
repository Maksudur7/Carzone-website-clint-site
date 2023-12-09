import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const ProductCard = ({ car }) => {
    const { _id, image, name, type, price, brandName } = car
    console.log(_id)
    if(car.length < 1){
        Swal.fire(
            'No Product Fund ',
            'Added some product then come with me',
            'question'
          )
    }
    const handelDettlesClick = () =>{
        const item = JSON.parse(localStorage.getItem('dettlesP'))
        if(!item){
            localStorage.setItem('dettlesP', JSON.stringify(car))
        }
        else{
            localStorage.setItem('dettlesP', JSON.stringify(car))
        }
    }
    return (
        <div className="mt-10">
            <div className=" md:flex bg-base-100 shadow-xl gap-5 p-5">
                <figure><img className="w-80" src={image} /></figure>
                <div className=" justify-start text-start">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <h2><span className="font-medium mr-2">Name: </span>{name}</h2>
                    <h2><span className="font-medium mr-2">Brand Name: </span>{brandName}</h2>
                    <h2><span className="font-medium mr-2">Type: </span>{type}</h2>
                    <h2><span className="font-medium mr-2">Price: </span><span className="text-red-700 font-bold">{price}</span></h2>
                    <div className="flex justify-between gap-5 mt-5">
                        <Link to={`/dettles`}><button onClick={handelDettlesClick} className="btn btn-neutral"> Details </button></Link>
                        <Link to={`/productUpdate/${_id}`}><button className="btn btn-neutral">Update</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

ProductCard.propTypes ={
    car: PropTypes.object.isRequired
}

export default ProductCard;