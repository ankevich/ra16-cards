import "./App.css";
import Card from "./Card";
import cat from "./images/cat.jpg";

function App() {
  return (
    <div class="container">
      <Card>
      <img src={cat} class="card-img-top" alt="котик"/>
        <h3>Котик</h3>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  );
}

export default App;
