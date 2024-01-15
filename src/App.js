import './App.css';
import Header from './components/Header/header';
import Card from './components/Card/card';
import CardList from './components/CardList/card-list';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Card/>
      <CardList/>
      </main>
    </div>
  );
}

export default App;
