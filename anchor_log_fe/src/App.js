// App.js
import React from 'react';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="App-header bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl text-gray-800">Welcome to Habitify</h1>
        <p className="text-lg text-gray-500">Sign in to your account and start building good habits with Habitify</p>
        <div className="buttons-container mt-5">
          <button className="sign-in-button google bg-blue-500 text-white m-2 px-5 py-2 text-lg rounded-md cursor-pointer">Sign in with Google</button>
          <button className="sign-in-button apple bg-black text-white m-2 px-5 py-2 text-lg rounded-md cursor-pointer">Sign in with Apple</button>
        </div>
      </header>
    </div>
  );
}

export default App;
