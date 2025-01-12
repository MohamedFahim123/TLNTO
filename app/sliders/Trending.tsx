import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import JobGrid from "./../ecommerce/JobGrid";

SwiperCore.use([Navigation]);

const TrendingSlider = ({ products }) => {
    return (
        <>
            <div className="row">
                {products.map((product, i) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                        <JobGrid product={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrendingSlider;
