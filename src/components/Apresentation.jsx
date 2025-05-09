import React from 'react';
import fundoHome from '../imgs/fundo-home.jpg';

const Apresentation = () => {
    return (
        <div style={{ backgroundImage: `url(${fundoHome})` }} className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 md:pt-0">
            <p className='text-white text-[350%] font-light tracking-wider mb-6'>Thiago Siniero</p>
            <div className="max-w-[80%] w-full p-8 rounded-lg shadow-lg mt-20">
                <p className="text-2xl md:text-xl font-white text-white mb-4">
                    Olá! Sou um desenvolvedor full-stack e atualmente estou cursando Engenharia da Computação na Universidade São Francisco (USF). 
                    Ao longo da minha trajetória, venho desenvolvendo projetos completos, integrando front-end e back-end, com foco em qualidade, boas práticas e experiência do usuário.
                </p>
                <p className="text-lg md:text-xl font-white text-white mb-4">
                    Atualmente, estou em busca de crescimento profissional, ampliando meus conhecimentos em tecnologias modernas como React, Node.js, TypeScript e Docker.
                    Além dos estudos, dedico meu tempo ao desenvolvimento de projetos próprios e construção de um portfólio que reflita minhas habilidades e minha evolução como desenvolvedor.
                </p>
                <p className="text-lg md:text-xl font-white text-white">
                    Meu objetivo é atuar em projetos desafiadores, colaborar com times de alta performance e continuar aprendendo todos os dias. Se quiser trocar uma ideia, venha conferir meus projetos ou trabalhar comigo, será um prazer conversar!
                </p>
            </div>
        </div>
    );
};

export default Apresentation;