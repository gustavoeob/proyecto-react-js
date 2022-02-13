import {items} from '../Product/Items';


export const task = new Promise((resolve, reject) => {
  resolve(true);
});

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);
});
