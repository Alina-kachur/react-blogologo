// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import { fetchArticles, getBlog, useAppDispatch, useAppSelector } from "store";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { BlogListItem } from "components/BlogListItem/BlogListItem";
import { StyledSlider, StyledSwiper } from "./styles";
import { useWindowSize } from "hooks";
import { IBlogAPI } from "types";

export const Slider = () => {
  const { articles } = useAppSelector(getBlog);
  const { width = 0 } = useWindowSize();

  const slidesPerView = () => {
    if (width > 1100) {
      return 3;
    }
    if (width <= 1100 && width > 768) {
      return 2;
    }
    if (width <= 768) {
      return 1;
    }
  };

  return (
    <StyledSwiper
      slidesPerView={slidesPerView()}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {Array.isArray(articles) &&
        articles.map((article: IBlogAPI) => {
          return (
            <StyledSlider key={article.id}>
              <BlogListItem item={article} />
            </StyledSlider>
          );
        })}
    </StyledSwiper>
  );
};
