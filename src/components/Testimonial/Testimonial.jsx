import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
   
    {
      img: profilePic3,
      review:
        "Travailler avec Georges pour la création de notre site web ELITE EDGE FITNESS a été une expérience exceptionnelle. Leur expertise technique et leur compréhension de notre vision ont été impressionnantes. Le site est non seulement esthétiquement plaisant, mais aussi fonctionnel, ce qui a considérablement amélioré notre capacité à attirer et à engager de nouveaux membres.",
    },
    {
      img: profilePic4,
      review:
        "Nous avons récemment fait appel à Georges pour concevoir notre site web de restaurant, et nous sommes ravis du résultat. Leur équipe a su capturer l'essence de notre établissement à travers un design élégant et une interface utilisateur intuitive. Grâce à leur travail, notre site web attire désormais plus de clients, et nous avons reçu de nombreux compliments sur son design et sa facilité de navigation.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>
      Les clients reçoivent toujours  </span>
        <span>un travail exceptionnel</span>
        <span> de ma part. </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;