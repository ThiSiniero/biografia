import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-black shadow-lg fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-16">
          <h1 className="text-2xl font-bold tracking-tight">Thiago Siniero</h1>
          <ul className="flex space-x-2 lg:space-x-8 ml-auto">
            <li>
              <a href="#home" className="custom-hover transition-colors duration-200 font-semibold text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#formation" className="custom-hover transition-colors duration-200 font-semibold text-lg">
                Formação
              </a>
            </li>
            <li>
            <a href="#competencies" className="custom-hover transition-colors duration-200 font-semibold text-lg">
                Competências
              </a>
            </li>
            <li>
              <a href="#projects" className="custom-hover transition-colors duration-200 font-semibold text-lg">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="custom-hover transition-colors duration-200 font-semibold text-lg">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;