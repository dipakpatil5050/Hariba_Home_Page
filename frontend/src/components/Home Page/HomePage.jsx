import Home from "./Home";
import Card from "./Card";
import images from "./images";
function HomePage() {
  return (
    <div>
      <Home images={images} />
      {/* <Card /> */}
    </div>
  );
}

export default HomePage;
