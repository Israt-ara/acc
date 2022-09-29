import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Working from './Component/Working/Working';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Working></Working>
      <Footer></Footer>
    </div>
  );
}

export default App;
