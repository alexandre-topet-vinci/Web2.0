import RandomDog from './components/randomDog';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
          <RandomDog/>
          <RandomDog/>
          <RandomDog/>
      </div>
    </div>
  );
}

export default App;
