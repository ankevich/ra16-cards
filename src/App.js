import "./App.css";
import Card from "./Card";
import cat from "./images/cat.jpg";

function App() {
  return (
    <div class="container">
      <Card>
        <img src={cat} class="card-img-top" alt="котик" />
        <h3>Котик</h3>
        <p>
          Привет, меня зовут Котик. Я очень люблю сидеть на диване и смотреть
          телевизор.</p>
      </Card>
      <Card>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Есть много вариантов Lorem Ipsum, но большинство из них
          переустановлены с изменениями, например, добавлением прозвучавших
          юмористических слов или слов, которые даже не похожи на латинские.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  );
}

export default App;
