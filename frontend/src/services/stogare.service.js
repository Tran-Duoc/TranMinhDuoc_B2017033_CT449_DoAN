//set item
export const setItem = (name, data) => {
  return localStorage.setItem(name, JSON.stringify(data));
};
// get item

export const getItem = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

//remove item
export const reMoveItem = (name) => {
  return localStorage.removeItem(name);
};
