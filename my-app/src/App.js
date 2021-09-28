import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
      <header>
            <NavBar />
            </header>
            <main>
              <ItemListContainer />
              {ItemCount}
            </main>
    </div>



  );
}

export default App;
