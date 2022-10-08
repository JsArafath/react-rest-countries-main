import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* //countries component
function Countries() {
  //Step 1: Control state
  const [countries, setCountries] = useState([]);

  //Step 2: Use Effect to update state
  useEffect(()=>{
    //Step 2: fetch data
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []); 
  
  return (
    <div>
      <h1>Visit Countries All Over the WORLD!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  );
}

//Country component
function Country(props) {
  const {name, population} = props;
  
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Population: {population}</h4>
    </div>
  ); 
} */
export default App;
