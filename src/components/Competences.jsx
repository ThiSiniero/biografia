import React from 'react';

const Competences = () => {
    const generalSkills = [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Scrum', logo: 'https://th.bing.com/th/id/OIP.DYNJuYOGc_lgPwwBc3z0iQAAAA?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    ];

    const intermediateSkills = [
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'English', logo: 'https://tse4.mm.bing.net/th/id/OIP.WjBoTNp1vKnzR41-odbxIQHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
        { name: 'Laravel', logo: 'https://tse1.mm.bing.net/th/id/OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
    ];

    return (
        <section id='competencies' className="competences bg-gray-100 pb-20">
            <h2 className="w-full text-center text-[250%] font-bold mb-16">Competências</h2>

            <div className="general-skills mb-10">
                <h3 className="text-2xl font-semibold text-center mb-6">Avançadas</h3>
                <div className="competences-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-[95%] mx-auto">
                    {generalSkills.map((skill) => (
                        <div key={skill.name} className="competence-item flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <img src={skill.logo} alt={`${skill.name} logo`} className="competence-logo w-16 h-16 mb-4"/>
                            <p className="text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="intermediate-skills">
                <h3 className="text-2xl font-semibold text-center mb-6">Intermediárias</h3>
                <div className="competences-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-[95%] mx-auto">
                    {intermediateSkills.map((skill) => (
                        <div key={skill.name} className="competence-item flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <img src={skill.logo} alt={`${skill.name} logo`} className="competence-logo w-16 h-16 mb-4" />
                            <p className="text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competences;