import './App.css';
import Quotes from './Quotes';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

// const url = 'https://api.adviceslip.com/advice';


function App() {
//   const [quotes, setQuotes] = useState();
//   let quoteRender = <quote id="quote">The Magic you are looking for is in the Work you are Avoiding.</quote>;

// const quote = async (newNum) =>{
//     const response = await fetch(`${url}/${newNum}`);
//     const result = await response.json();
//     setQuotes(result);
// }

// useEffect(()=>{
//   quote();
//  }, [])

// if(quotes){
//   if(quotes.slip){
//     quoteRender = <quote id="quote">{quotes.slip.advice}</quote>
//   }else{
// quoteRender = <quote id="quote">The Magic you are looking for is in the Work you are Avoiding.</quote>

//   }
// }

  return (
    // <div className="App">
    //  <h1>Quotes Generator</h1> 
    // <div className='container'>
    // &#x275D; {quoteRender} &#x275E;
    // </div>
    // <button className='button' onClick={()=>{
    //   quote(Math.floor(Math.random()*224));

    // }}>Next Quote</button>
    // </div>
    <BrowserRouter>
    <Routes>
    <Route path='/quote-generator' element={<Quotes />}>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
