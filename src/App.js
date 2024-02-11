import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const person = { name:'Ryan', age: 32 }

  const foo = () => {
    alert("Foo!!!!")
  }

  const goo = (name) => {
    alert("Hello " + name + "!")
  }

  const hoo = (e) => {
    alert(e.target)
  }

  return (
    <div className="App">
      <Header />
      <main>
        { person.name } is { person.age } years old.
        <div>
          <button onClick={foo}>Click</button>
          <button onClick={() => goo('Tony')}>Click</button>
          <button onClick={(e) => hoo(e)}>Click</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
