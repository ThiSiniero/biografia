import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ou use emojis/ícones de sua escolha

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-200 text-black shadow-lg fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold tracking-tight">Thiago Siniero</h1>

          {/* Botão do menu hambúrguer em mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Itens de navegação - desktop */}
          <ul className="hidden lg:flex space-x-6 ml-auto">
            <li><a href="#home" className="font-semibold text-lg hover:text-blue-500">Home</a></li>
            <li><a href="#formation" className="font-semibold text-lg hover:text-blue-500">Formação</a></li>
            <li><a href="#competencies" className="font-semibold text-lg hover:text-blue-500">Competências</a></li>
            <li><a href="#projects" className="font-semibold text-lg hover:text-blue-500">Projetos</a></li>
            <li><a href="#contact" className="font-semibold text-lg hover:text-blue-500">Contato</a></li>
          </ul>
        </div>

        {/* Itens de navegação - mobile */}
        {menuOpen && (
          <ul className="flex flex-col space-y-4 mt-4 pb-4 lg:hidden">
            <li><a href="#home" onClick={toggleMenu} className="font-semibold text-lg hover:text-blue-500">Home</a></li>
            <li><a href="#formation" onClick={toggleMenu} className="font-semibold text-lg hover:text-blue-500">Formação</a></li>
            <li><a href="#competencies" onClick={toggleMenu} className="font-semibold text-lg hover:text-blue-500">Competências</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="font-semibold text-lg hover:text-blue-500">Projetos</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="font-semibold text-lg hover:text-blue-500">Contato</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
