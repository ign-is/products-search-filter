import {Product} from "./types";

const PRODUCTS: Product[] = [
  {
    "id": 1,
    "title": "55 inch Curved TV",
    "description": "55 inch curved TV, brand Samsung",
    "price": 1000
  },
  {
    "id": 2,
    "title": "Streaming Webcam",
    "description": "Webcam by Logitech",
    "price": 200
  },
  {
    "id": 3,
    "title": "High-end Smartphone",
    "description": "High-end smartphone, brand Xiaomi",
    "price": 300
  },
  {
    "id": 4,
    "title": "Professional Drone",
    "description": "Drone resistant to strong winds, brand Phanton",
    "price": 500
  },
  {
    "id": 5,
    "title": "Desktop Fan",
    "description": "Portable desktop fan, brand Lilian",
    "price": 50
  }
];

const api = {
  search: (query?: string): Promise<Product[]> => {
    let results = PRODUCTS;

    if (query) {   
      results = results.filter((product) => {
        return product.title.toLowerCase().includes(query);
      });
    }

    return new Promise((resolve) => setTimeout(() => resolve(results), 1000));
  },
};

export default api;
