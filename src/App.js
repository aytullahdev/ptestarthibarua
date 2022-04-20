import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useState, useEffect } from 'react';
import Details from './component/Details';
function App() {
  const [product, setProduct] = useState([]);
  const [pid,setPid] = useState(null);
  const findProduct = (id) =>{
   
      fetch(`https://fakestoreapi.com/products/ ${id}`)
       .then((res)=>res.json())
       .then((data)=> setPid(data));
   

  }
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
     .then((res)=>res.json())
     .then((data)=> setProduct(data));
  }, [])
  
  

  return (
    <div className="App">
      <h1 className='text-6xl uppercase text-white bg-indigo-200 py-5'>Arthi Barua</h1>
      <div className=' bg-slate-100'>
        <h1 className='text-left p-5 text-3xl font-bold uppercase'>Products</h1>
        {
          pid && <Details
           
           id={pid.id}
           title={pid.title}
           image={pid.image}
           price={pid.price}
           rate={pid.rating.rate}
           desc={pid.description}
           category={pid.category}
           
    />
        }
        <div className='grid grid-cols-1 px-2 lg:grid-cols-3 gap-3'>
       
         {
           product.length>0 &&
           product.map((e)=>{
            return(
              <Card 
                key={e.id}
               id={e.id}
               title={e.title}
               image={e.image}
               price={e.price}
               rate={e.rating.rate}
               desc={e.description}
               findProduct={findProduct}
             />
            )
           })
         }
          
        </div>
      </div>
    </div>
  );
}

export default App;
