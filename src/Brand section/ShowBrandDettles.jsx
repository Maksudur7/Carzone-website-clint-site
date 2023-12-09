import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const ShowBrandDettles = ({ data }) => {
    const { name, photo, _id } = data
    console.log(data)


    const handelLocalStor = () => {
        const item = JSON.parse(localStorage.getItem('data'))
        if (!item) {
            localStorage.setItem('data', JSON.stringify(data))
        }
        localStorage.setItem('data', JSON.stringify(data))
    }


    return (
        <div className="mt-10">
            <NavLink to={`/productDettles/${_id}`}>
                <div onClick={handelLocalStor} className="card lg:w-96 md:w-80 w-96 bg-gray-400 shadow-xl border border-spacing-2 border-orange-500">
                    <figure className="px-10 pt-10 ">
                        <img src={photo} className="rounded-xl h-40 " />
                    </figure>
                    <hr className="mt-5" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

ShowBrandDettles.propTypes ={
    data: PropTypes.object.isRequired
}

export default ShowBrandDettles;