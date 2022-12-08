import HeartsList from './components/HeartsList';
import Header from './components/Header';
import './App.css';

const message = 'cool cud';

function App() {
    return (
        <>
          <Header />
          <Heart msg={message} />
        </>
    );
}

export default App;