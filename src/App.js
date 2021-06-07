import './App.css';
import Table from './components/Table/Table';
import NavBar from './components/NavBar/NavBar'
import ProductDetails from './components/ProductDetails/ProductDetails';
import Chart from './components/Charts/Chart'

function App() {
  return (
    <div className="app">
     <NavBar className="nav" />
     <div className="app-content">
       <ProductDetails />
       <div>
         <Chart className="chart"/>
         <Table />
       </div>
    </div> 
    </div>
  );
}
export default App;
