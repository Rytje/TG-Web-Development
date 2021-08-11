import Homepage from './Homepage';

function App() {

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  
  return (
    <div>
        <Homepage />
    </div>
  );
}

export default App;
