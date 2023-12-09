
import ProductImages from "./ProductImages";
import PropTypes from 'prop-types';

const ProductSlider = ({ img, cars }) => {
    console.log(cars)
    console.log(img)
    const { photo1, photo2, photo3 } = img
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={photo1} className="w-full h-[500px] " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={photo2} className="w-full h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={photo3} className="w-full h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <section className="grid grid-cols-4 gap-5">
                {
                    cars.slice(0,4).map(Element => <ProductImages key={Element._id} cars={Element}></ProductImages>)
                }
            </section>
        </div>
    );
};

ProductSlider.propTypes ={
    img: PropTypes.object.isRequired,
    cars: PropTypes.object.isRequired
}

export default ProductSlider;