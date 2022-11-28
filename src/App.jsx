
import { Carousel } from "./carousel/Carousel";

function App() {
  const slides = [
    "/Imgs/img1.jpg",
    "/Imgs/img2.jpg",
    "/Imgs/img3.jpg",
    "/Imgs/img4.jpg",
    "/Imgs/img5.jpg",
  ]

  return (
    <div className="container">
      <Carousel slides={slides} controls indicators autoPlay width="100%" />
    </div>
  )
}

export default App
