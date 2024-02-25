import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="overlay"></div>
      <div className="homeText">
        <h1>რა არის შენი </h1>
        <h1> ცხოვრების </h1>{" "}
        <h1>
          {" "}
          მთავარი
          <span>ბლუპრინტი? </span>
        </h1>
        <p>
          You plan your vision, you plan your purpose that's we call your life
          blueprint
        </p>
      </div>
      <button className="homeButton"> აღმოაჩინე </button>
    </div>
  );
};

export default Home;