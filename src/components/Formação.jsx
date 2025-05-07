import React from 'react';
import Dio1 from '../imgs/dio-1.jpg';
import Dio2 from '../imgs/dio-2.jpg';
import Dio3 from '../imgs/dio-3.jpg';
import Dio4 from '../imgs/dio-4.jpg';
import Dio5 from '../imgs/dio-5.jpg';
import SkillLab from '../imgs/SkillLab.jpg';

const Formação = () => {

    const bigImg = (img) => {
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.25s ease";
    };

    const normalImg = (img) => {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
    };

    return (
        <main className="flex flex-col items-center w-full" id="certificados">
            <h3 className="w-full text-center text-[250%] font-bold mb-20">Formação Acadêmica</h3>

            <div className="flex flex-col items-center mb-8">
                <img
                    onMouseEnter={(e) => bigImg(e.target)}
                    onMouseOut={(e) => normalImg(e.target)}
                    className="w-1/4 mb-4 cursor-pointer transition-transform"
                    src={Dio1}	
                    alt=""
                />
                <p className="text-center text-base">
                    Este foi o meu primeiro certificado, concluído no site da{' '}
                    <a href="https://web.digitalinnovation.one" className="text-blue-500 underline">digitalinnovation.one</a>, <br /> onde aprendi as regras básicas da programação e algumas palavras <br /> essenciais como: 'software', 'hardware', 'framework', 'back-end', <br /> 'front-end', 'fullstack', entre outras.
                </p>
            </div>
            <hr className="w-full border-t border-gray-300 mb-8" />

            <div className="flex flex-col items-center mb-8">
                <img
                    onMouseEnter={(e) => bigImg(e.target)}
                    onMouseOut={(e) => normalImg(e.target)}
                    className="w-1/4 mb-4 cursor-pointer transition-transform"
                    src={Dio2}
                    alt=""
                />
                <p className="text-center text-base">
                    Este foi o curso, também feito na{' '}
                    <a href="https://web.digitalinnovation.one" className="text-blue-500 underline">digitalinnovation.one</a> <br /> onde comecei a aprender HTML e CSS, montando meus primeiros layouts <br /> e entendendo ainda mais sobre como funciona a codificação e como <br /> isso é transformado em informações da página.
                </p>
            </div>
            <hr className="w-full border-t border-gray-300 mb-8" />

            <div className="flex flex-col items-center mb-8">
                <img
                    onMouseEnter={(e) => bigImg(e.target)}
                    onMouseOut={(e) => normalImg(e.target)}
                    className="w-1/4 mb-4 cursor-pointer transition-transform"
                    src={Dio3}
                    alt=""
                />
                <p className="text-center text-base">
                    Neste curso comecei a me aprofundar mais no CSS e utilizei o meu primeiro <br /> framework, o <a href="https://getbootstrap.com/" className="text-blue-500 underline">Bootstrap</a>, onde aprendi muitas facilidades, economizando <br /> muito tempo para fazer algumas codificações, <br /> ou seja, um trabalho mais ágil.
                </p>
            </div>
            <hr className="w-full border-t border-gray-300 mb-8" />

            <div className="flex flex-col items-center mb-8">
                <img
                    onMouseEnter={(e) => bigImg(e.target)}
                    onMouseOut={(e) => normalImg(e.target)}
                    className="w-1/4 mb-4 cursor-pointer transition-transform"
                    src={Dio4}
                    alt=""
                />
                <p className="text-center text-base">
                    Este certificado representa minha competência com o git e github, <br /> onde aprendi a trabalhar em equipe, criar um repositório <br /> pessoal ou coletivo, fazer commits, subir meus códigos, clonar trabalhos e <br /> resolver conflitos de merge.
                </p>
            </div>
            <hr className="w-full border-t border-gray-300 mb-8" />

            <div className="flex flex-col items-center mb-8">
                <img
                    onMouseEnter={(e) => bigImg(e.target)}
                    onMouseOut={(e) => normalImg(e.target)}
                    className="w-1/4 mb-4 cursor-pointer transition-transform"
                    src={Dio5}
                    alt=""
                />
                <p className="text-center text-base">
                    Foi neste curso onde tive meu primeiro contato com uma linguagem <br /> de programação, aprendendo atalhos que melhoram a experiência do usuário <br /> no site, um exemplo disso é essa função de dar zoom <br /> (mais perceptível em computadores) presente nos meus formulários.
                </p>
            </div>
            <hr className="w-full border-t border-gray-300 mb-8" />

            <div className="flex flex-col items-center mb-8">
                <img
                    onMouseEnter={(e) => bigImg(e.target)}
                    onMouseOut={(e) => normalImg(e.target)}
                    className="w-1/4 mb-4 cursor-pointer transition-transform"
                    src={SkillLab}
                    alt=""
                />
                <p className="text-center text-base">
                    Neste curso da <a href="https://skilllabbrasil.com.br/" className="text-blue-500 underline">Skill Lab Brasil</a> foi o mais importante que já fiz, onde aprendi <br /> muitas coisas, abrangendo todos estes cursos que acabei de descrever <br /> e mais alguns, no curso aprendi: HTML, CSS, JS, MYSQL, PHP, Laravel, Linux e outras coisas como Bootstrap, JQuery, Git, Apache, Nginx e Scrum.
                </p>
            </div>
        </main>
    );
};

export default Formação;
