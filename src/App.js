import './App.scss';
import Header from "./component/Header";
import {useDispatch, useSelector} from "react-redux";
import {Routes,Route} from "react-router-dom"
import Products from "./component/page/Products/inddex";
import Basket from "./component/page/Basket";
import Favorites from "./component/page/Favorites"
function App() {
    const dispatch = useDispatch()



  return (
    <div className="App">
  <Header/>
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="basket" element={<Basket/>} />
            <Route path="favorites" element={<Favorites/>} />
        </Routes>
    </div>
  );
}

export default App;
