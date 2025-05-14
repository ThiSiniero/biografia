import React from 'react';


const About = () => {
    return (
        <footer className="bg-gray-600 text-white pb-5" id="contact">
            <h2 className="w-full text-center text-[250%] font-bold mb-12">Contato</h2>
            <div className="max-w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <p className="text-lg font-bold mb-4">Aqui estão minhas redes sociais:</p>

                    <a href="https://github.com/ThiSiniero" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline mb-2">
                        💻 GitHub
                    </a>
                    <a href="https://wa.me/11941697444" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                        📱 WhatsApp
                    </a>
                </div>
                <div className="text-center">
                    <p>
                        Este site foi criado utilizando React e estilizado com Tailwind CSS.
                    </p>
                    <p className='my-4'>
                        Caso tenha algum interesse ou curiosidade, mande mensagem em alguma das minhas redes sociais que responderei o mais rápido possível.
                    </p>
                    <p>Feito por Thiago Siniero, Copyright © May 2025</p>
                </div>
                <div className="text-center">
                    <h5 className="text-lg font-bold mb-4">Endereço e Gmail:</h5>
                    <p>Atibaia, SP, Brasil</p>
                    <p>thiagosiniero@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default About;