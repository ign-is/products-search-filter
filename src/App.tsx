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
    console.log(change)
    if(change === 'higher') {
      console.log(products.sort((a, b) => b.price - a.price));
    } else if (change === 'lower') {
      console.log(products.sort((a, b) => a.price - b.price));
    } else {
      console.log(products.sort((a, b) => a.title.localeCompare(b.title)));
    }
  };

  return (
    <main>
      <h1>Tienda digitaloncy</h1>
      <input name="text" placeholder="tv" type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
      <SortBy sortBy={sortBy} setSortBy={setSortBy} onOptionChangeHandler={onOptionChangeHandler}/>
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
