import React from 'react';
import cursoGptPage from '../imgs/cursoGptPage.jpg';
import usfProjectsPage from '../imgs/usfProjectsPage.jpg';

const projects = [
    {
        title: 'Marketplace React',
        description: 'Este projeto é um marketplace completo desenvolvido em React, criado como parte do meu processo de aprendizado da biblioteca. O diferencial é que todo o desenvolvimento foi guiado com o auxílio do ChatGPT, que atuou como meu mentor virtual, explicando conceitos, boas práticas e estruturação de componentes em tempo real.',
        image: cursoGptPage, // Replace with your image URL
        link: 'https://curso-gpt.vercel.app/',
    },
    {
        title: 'Projetos Acadêmicos',
        description: 'Durante minha graduação em Engenharia da Computação na Universidade São Francisco (USF), desenvolvi diversos projetos práticos que uniram teoria e aplicação real de tecnologias. Esses trabalhos tiveram como foco o desenvolvimento de soluções tecnológicas, análise de desempenho de algoritmos, automação e sistemas embarcados.',
        image: usfProjectsPage, // Replace with your image URL
        link: 'https://usf-projects.vercel.app/index.html',
    },
];



const Projects = () => {

    const bigImg = (a) => {
        a.style.transform = "scale(1.05)";
        a.style.transition = "transform 0.25s ease";
    };

    const normalImg = (a) => {
        a.style.transform = "scale(1)";
        a.style.transition = "transform 0.25s ease";
    };
    
    return (
        <div id='projects' className="bg-black text-white pb-20 ">
            <div className="container mx-auto">
                <h2 className="w-full text-center text-[250%] font-bold mb-16">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[90%] md:w-full mx-auto">
                    {projects.map((project, index) => (
                        <a onMouseOver={(e) => bigImg(e.currentTarget)} onMouseOut={(e) => normalImg(e.currentTarget)} key={index} href={project.link} className="bg-white rounded-lg p-6 hover:">
                            <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;