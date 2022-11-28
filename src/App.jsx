
import { Carousel } from "./carousel/Carousel";

function App() {
  const slides = [
    "src/assets/Imgs/img1.jpg",
    "src/assets/Imgs/img2.jpg",
    "src/assets/Imgs/img3.jpg",
    "src/assets/Imgs/img4.jpg",
    "src/assets/Imgs/img5.jpg",
  ]

  return (
    <div className="container">
      <Carousel slides={slides} controls indicators autoPlay width="100%" />
    </div>
  )
}

export default App
