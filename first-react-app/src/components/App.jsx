import "../componentsStyles/App.css";
import NavBar from "./NavBar";
import Title from "./Title.jsx";
import Intro from "./Intro";
import LandingTab from "./LandingTab";
import ProductTab from "./ProductTab";
import Msg from "./Msg";
import HackerSection from "./HackerSection";


function App() {
  let ProductsList = [
    {
      Title: "IPhone 11 Pro",
      Price: "80000",
    },
    {
      Title: "Samsung S22-Ultra",
      Price: "120000",
    },
    {
      Title: "IPhone 10 Pro",
      Price: "60000",
    },
    {
      Title: "IPhone 13 Pro",
      Price: "90000",
    },
    {
      Title: "IPhone 14 Pro",
      Price: "100000",
    },
  ];

  function doAlert(){
    alert('Are you ready!');
  }

  return (
    <>
      <NavBar/>
      <br/>
      <Title />
      <Intro />
      <button onClick={doAlert}>EXPLORE ME</button>
      <LandingTab /> <br /><br />
      <Title />
      <Title />
      <Title />
      <Title />
      <ProductTab ProductsList={ProductsList} />
      <Msg userName={"Hacker"} textColor={"green"}/>
      <HackerSection />
      <br />
    </>
  );
}

export default App;
