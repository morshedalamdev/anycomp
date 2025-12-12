import { useState } from 'react';
import anycompLogo from './assets/logo-2.png';

function App() {

  return (
    <>
    <header className="h-11.25 x-shadow-4">
      <div className="flex items-center justify-between w-176.25 mx-auto px-5">
        <div className="flex items-center gap-5">
          <a href=""><img src={anycompLogo} alt="Anycomp Logo" /></a>
          <nav className="flex items-center gap-4 font-semibold text-[6px]">
            <a href="">Register a company</a>
            <a href="">Appoint a Company Secretary</a>
            
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}

export default App
