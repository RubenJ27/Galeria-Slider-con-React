import "./Carousel.css";
import { useRef, useState, useEffect} from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicators } from "./CarouselIndicators";


export const Carousel = ({slides, interval = 5000, controls = false, indicators = false, autoPlay = true, width = 1000}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderInterval = useRef();

  const prev = () => {
    startSliderTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length -1;
    setCurrentSlide(index);
  }

  const next = () => {
    startSliderTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  const switchIndex = (index) => {
    startSliderTimer();
    setCurrentSlide(index);
  }

  const startSliderTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
     sliderInterval.current = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
    }, interval)
    }
  }

  const stopSlideTimer = () => {
    if (autoPlay && sliderInterval.current) {
      clearInterval(sliderInterval.current)
    }
  }

  useEffect(() => {
    startSliderTimer()
    return () => stopSlideTimer;
  }, []);
  
  return (
    <div className="carousel" style={{maxWidth : width}}>
        <div 
        className="carousel-inner"
        style={{transform: `translateX(${- currentSlide * 100}%)`}}
        
        >
          {slides.map((slide, index) => (
            <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer} startSlide={startSliderTimer} />
          ))}
        </div>
        {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
        {controls && <CarouselControls prev={prev} next={next} />}
      </div>
  )
}
