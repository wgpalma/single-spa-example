let contador = 0;
let listeners = [];
const sumar = () => {
  contador = contador + 1;
  executeListeners();
  return contador;
};

const restar = () => {
  contador = contador - 1;
  executeListeners();
  return contador;
};

const actual = () => {
  return contador;
};
const addToListener = (func) => {
  executeListeners();
  listeners.push(func);
};

const executeListeners = () => {
  listeners.forEach((value) => {
    value();
  });
};

export { contador, sumar, restar, actual, addToListener };
