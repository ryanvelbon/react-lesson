import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const person = { name:'Ryan', age: 32 }

  return (
    <div className="App">
      <Header />
      <main>
        { person.name } is { person.age } years old.
      </main>
      <Footer />
    </div>
  );
}

export default App
