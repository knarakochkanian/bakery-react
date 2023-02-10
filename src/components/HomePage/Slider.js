// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src='https://media.istockphoto.com/id/1369757844/photo/tasty-raspberry-cupcakes-ready-to-eat.jpg?b=1&s=170667a&w=0&k=20&c=GMTQmJO4-O9-Tiq6U4tbBT0ZbKrbb_BClkmImcXs9VY=' alt='cook'/> </SwiperSlide>
                <SwiperSlide><img src='https://media.istockphoto.com/id/1389835592/photo/potato-gratin-with-cheese-crust-and-meat-vegetable-filling.jpg?b=1&s=170667a&w=0&k=20&c=22wYSjm6iB5FdSHZrK_jWDgmpAwg3o9WmFLzglMkP-o=' alt='cook'/></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1597528662465-55ece5734101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJha2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='cake' /></SwiperSlide>
                <SwiperSlide><img src='https://media.istockphoto.com/id/1252359900/photo/ready-for-baking-chocolate-chip-cookies.jpg?b=1&s=170667a&w=0&k=20&c=OpxL7cDQYb3q77K-p7z5EAi1d7-RFq70ZG2H6BLA4zk=' alt='cooking' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='cook'/></SwiperSlide>


            </Swiper>
        </>
    );
}
