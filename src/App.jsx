import "./App.css";
import burgerMenu from "./assets/menu-top-xs.png";
import siteLogo from "./assets/ironhack-logo.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

const icons = [
  {
    title: "Declartive",
    description: "React make it painless to create interactive UIs",
    icon: icon1,
  },
  {
    title: "Components",
    description: "React make it painless to create interactive UIs",
    icon: icon2,
  },
  {
    title: "Single-Way",
    description: "React make it painless to create interactive UIs",
    icon: icon3,
  },
  {
    title: "JSX",
    description: "React make it painless to create interactive UIs",
    icon: icon4,
  },
];

function App() {
  return (
    <>
      <div className="App">
        <section className="welcome-card">
          <nav>
            <img src={siteLogo} />
            <img src={burgerMenu} />
          </nav>
          <div className="text-container">
            <h1>Say Hello to ReactJS</h1>
            <p>
              you will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>
        <section className="features-section">
          {icons.map((e, i) => (
            <div className="icon-card" key={i}>
              <img src={e.icon} />
              <h2> {e.title} </h2>
              <p> {e.description} </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
