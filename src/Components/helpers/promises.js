import {data} from '../Product/data';


export const task = new Promise((resolve, reject) => {
  resolve(true);
});

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 500);
});
