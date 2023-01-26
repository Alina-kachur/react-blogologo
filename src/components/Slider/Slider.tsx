import "keen-slider/keen-slider.min.css";
import { Slide, StyledSlider } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import { getBlog, useAppSelector } from "store";
import { Link } from "react-router-dom";
import { BlogListItem } from "components/BlogListItem/BlogListItem";

export const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  const { articles } = useAppSelector(getBlog);

  return (
    <StyledSlider ref={ref} className="keen-slider">
      {Array.isArray(articles) &&
        articles.map((article) => {
          return (
            <Slide className="keen-slider__slide number-slide1">
              <Link to={`/article/${article.id}`}>
                <BlogListItem item={article} key={article.id} />
              </Link>
            </Slide>
          );
        })}
      {/* <Slide className="keen-slider__slide number-slide1">fdfgnfvb</Slide>
      <Slide className="keen-slider__slide number-slide1">fdvb</Slide>
      <Slide className="keen-slider__slide number-slide1">fdvb</Slide> */}
    </StyledSlider>
  );
};
