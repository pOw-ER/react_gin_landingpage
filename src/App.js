import './App.css';
import Header from './components/Header';
import About from './components/About';


let sectionProps = [
  {
    sectionName: "ABOUT",
    sectionTitle1: "THE STORY OF",
    sectionTitle2: "BATHTUB GIN",
    sectionP: `Gin was the predominant drink in the United States during the Prohibition-Era 1920's and many variations were created. "Bathtub gin" was developed in response to the poor-quality of alcohol that was available at the time.`,
    buttonText: "Read More",
    imgUrl: '../img/bar2_1.png'
  },
  {
    sectionName: "COCKTAIL & FOOD MENUS",
    sectionTitle1: "HAND CRAFTED",
    sectionTitle2: "COCKTAILS & DAMN",
    sectionTitle3: "GOOD EATS",
    sectionP: `We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes.`,
    buttonText: "See Menus",
    imgUrl: '../img/Rectangle.png'
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <About
        img={sectionProps[0].imgUrl}
        name={sectionProps[0].sectionName}
        head1={sectionProps[0].sectionTitle1}
        head2={sectionProps[0].sectionTitle2}
        paragraph={sectionProps[0].sectionP}
        buttonText={sectionProps[0].buttonText}
      />
      <About
        img={sectionProps[1].imgUrl}
        name={sectionProps[1].sectionName}
        head1={sectionProps[1].sectionTitle1}
        head2={sectionProps[1].sectionTitle2}
        head3={sectionProps[1].sectionTitle3}
        paragraph={sectionProps[1].sectionP}
        buttonText={sectionProps[1].buttonText}
      />
    </div>
  );
}

export default App;
