import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HomeProductMap = ({ data }) => {
    console.log(data)
    const { image, name } = data
    return (
        <div>
            <img className="w-full h-64 border shadow-lg z-0" src={image} alt="" />
            <div className="flex justify-between px-5 items-center -mt-16 bg-slate-400 ">
                <Link to={`/dettles`}> <button className="btn btn-neutral text-start">Dettles</button></Link>
                <h1 className=" text-end p-5 text-2xl text-white ">{name}</h1>
            </div>
        </div>
    );
};

HomeProductMap.propTypes ={
    data: PropTypes.object.isRequired
}

export default HomeProductMap;