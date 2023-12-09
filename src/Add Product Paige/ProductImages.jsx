
import PropTypes from 'prop-types';

const ProductImages = ({ cars }) => {
    return (
        <>
            <div>
                <img src={cars.image} alt="" />
            </div>
        </>
    );
};

ProductImages.propTypes ={
    cars: PropTypes.object.isRequired
}

export default ProductImages;