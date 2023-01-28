import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Media } from "ui";

const StyledSwiper = styled(Swiper)`
  max-width: 1110px;
  height: 450px;

  ${Media.LG} {
    max-width: 780px;
  }
  ${Media.MD} {
    max-width: 700px;
  }
  ${Media.SM} {
    max-width: 500px;
  }
  ${Media.XS} {
    max-width: 300px;
  }
  ${Media.XXS} {
    max-width: 290px;
  }
`;
const StyledSlider = styled(SwiperSlide)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export { StyledSwiper, StyledSlider };
