import { useEffect } from 'react';
import { Title } from '../components/Title';

export const Inicio = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))// Update the document title using the browser API
  });
  return (
    <>
      <Title titulo="Bienvenido!" />
    </>
  );
};
