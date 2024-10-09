import React, { useEffect, useState } from 'react';
//import Snowflake from './components/Snowflake';
import './App.css';

const App: React.FC = () => {
  const [show, setShow] = useState<Boolean>(false)

  const unShadow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> |undefined) => {
    console.log(e)
    setShow(!show)
  }
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄';
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.opacity = Math.random().toString();
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      
      document.querySelector('.snowflakes')?.appendChild(snowflake);
      
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-100 min-h-screen flex items-center justify-center px-4">
      <div className="snowflakes" aria-hidden="true"></div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>
        <h1 className="text-4xl font-bold mb-6 text-center text-red-600" style={{ fontFamily: "'Festive', cursive" }}>Joyeux Noël 2024 !</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div className='flex flex-row border rounded-md'>
              <input type={ show? "text":"password"} id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700" required />
              <button className='px-3' onClick={unShadow}>{show?'🔓' : '🔑'}</button>
            </div>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Se connecter</button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-red-600 hover:text-red-800">Mot de passe oublié ?</a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>
      </div>
    </div>
  );
};

export default App;