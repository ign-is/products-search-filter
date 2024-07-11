import type {Product} from "./types";
import SortBy from "./components/SortBy"

import {useEffect, useState} from "react";


import api from "./api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState('higher'); 

  useEffect(() => {
    // setIsLoading(true);
    api.search(query.toLowerCase())
    .then(data => setProducts(data))
    .finally(() => setIsLoading(false));

  }, [query]);

  const onOptionChangeHandler = (event: any) => {
    let change = event.target.value;
    setSortBy(change);
    let arrayCopy = [...products];
    console.log(change)
    if(change === 'higher') {
      setProducts(arrayCopy.sort((a, b) => b.price - a.price));
    } else if (change === 'lower') {
      setProducts(arrayCopy.sort((a, b) => a.price - b.price));
    } else {
      setProducts(arrayCopy.sort((a, b) => a.title.localeCompare(b.title)));
    }
  };

  return (
    <main>
      <h1>Digital store</h1>
      <div className="search">
        <input name="text" placeholder="Search product.." type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
        <SortBy  onOptionChangeHandler={onOptionChangeHandler}/>
      </div>
      { !isLoading ? 
      (<ul>
          {products.map((product) => (
            <li key={product.id} className={product.price <= 100 ? 'sale' : ''}>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <span>{new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(product.price)}</span>
            </li>
          ))}
        </ul>
      ) : (<h2 style={{color: 'blue'}}>Loading...</h2>)}
    </main>
  );
}

export default App;
