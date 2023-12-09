import PropTypes from 'prop-types';

const HomeSection1 = ({data}) => {
    console.log(data)
    const {image,name} = data
    return (
        <div className=" w-full">
            <img className="w-full h-64 border shadow-lg z-0" src={image} alt="" />
            <h1 className="-mt-16 text-end p-5 text-2xl text-white bg-slate-400 z-10">{name}</h1>
        </div>
    );
};

HomeSection1.propTypes ={
    data: PropTypes.object.isRequired
}

export default HomeSection1;