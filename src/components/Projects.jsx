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
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        image: 'https://via.placeholder.com/300', // Replace with your image URL
        link: '#',
    },
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-10">
            <div className="container mx-auto">
                <h2 className="w-full text-center text-[250%] font-bold mb-16">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> View Project </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;