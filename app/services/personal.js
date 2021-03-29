import Service from '@ember/service';
import { htmlSafe } from '@ember/template';
import WorkExperience from '../classes/workExperience';
import Education from '../classes/education';
import Skill from '../classes/skill';
import PersonalLink from '../classes/personalLink';
import Diploma from '../classes/diploma';
import Course from '../classes/course';

export default class PersonalService extends Service {
    name = 'Vadims Zinatulins';
    nationality = 'Latvian';
    birthDate = new Date(1995, 1, 10);
    links = [
        new PersonalLink('https://linkedin.com/in/vadims-zinatulins-0243721a3', 'fab fa-linkedin-in'),
        new PersonalLink('https://github.com/vadimsZinatulins', 'fab fa-github'),
        new PersonalLink('mailto: vadimz2@hotmail.com', 'far fa-envelope')
    ];
    workExperience = [
        new WorkExperience('2018 - Present', 'Softinsa, Tomar', 'Junio Programmer I', [
            'Front end development with EmberJS',
            'Back end development with Nodejs & ExpressJS',
            'Postgres SQL Database management',
            'Development of NodeJS C++ addon for specific tasks',
            'Creating containers and deploying them into IBM\'s Code Engine'
        ])
    ];
    education = [
        new Education('2017 - Present', 'Licenciatura Engenharia Informática', 'Instituto Politécnico Tomar, Tomar'),
        new Education('2015 - 2017', 'Curso Técnico Superior Profissional', 'Instituto Politécnico Tomar, Tomar'),
        new Education('2013 - 2015', 'Curso Profissional em Técnico de Eletrónica, Automação e Computadores', 'Escola Secundária Doutor Solano de Abreu, Abrantes')
    ];
    skills = [
        new Skill('JavaScript', 4),
        new Skill('C++', 3),
        new Skill('Java', 3),
        new Skill('Python', 3),
        new Skill('C#', 2),
        new Skill('NodeJS', 4),
        new Skill('EmberJS', 4),
        new Skill('NodeJS C++ Addons', 3),
        new Skill('Visual Studio', 3),
        new Skill('Visual Studio Code', 3),
        new Skill('NetBeans', 3),
        new Skill('Emscripten', 3),
        new Skill('WebAssembly', 3),
        new Skill('Docker', 2),
        new Skill('Kubernetes', 1),
        new Skill('Git', 4),
        new Skill('Machine Learning (Mathematical Concept)', 2),
        new Skill('TensorFlow', 1),
        new Skill('Flask', 2),
        new Skill('Linux', 3),
        new Skill('NGINX', 2),
        new Skill('Postgres SQL', 3),
        new Skill('Object Oriented Programming', 5),
        new Skill('Functional Programming', 4),
        new Skill('Data Oriented Design', 2)
    ];
    courses = [
        new Course('Feb 2021', 'NGINX Fundamentals', 'Udemy', new Diploma('Udemy\'s Course', '/files/diplomas/udemy_nginx.pdf')),
        new Course('Feb 2021', 'NodeJS, SQL & PostgreSQL', 'Udemy', new Diploma('Udemy\'s Course', '/files/diplomas/udemy_nodejs_sql_mastery.pdf')),
        new Course('Dec 2020', 'Docker Mastery: With Kubernetes', 'Udemy', new Diploma('Udemy\'s Course', '/files/diplomas/udemy_docker_mastery.pdf')),
        new Course('Jul 2020', 'WebAssembly & Emscripten', 'Udemy', new Diploma('Udemy\'s Course', '/files/diplomas/udemy_web_assembly.pdf')),
        new Course('Feb 2020', 'Machine Learning', 'Coursera', new Diploma('Stanford\'s Online Course', '/files/diplomas/coursera_machine_learning.pdf'))
    ];

    get age() {
        return new Date(new Date() - new Date(1995, 1, 10)).getFullYear() - 1970;
    }

    get resumedInfo() {
        return `My name is Vadims Zinatulins and I'm ${this.age} years old. I'm mostly self-taught programmer but I'm currently studying
        computer science in Institudo Politécnico de Tomar (Portugal). Working at Softinsa (an IBM's group company) as a full stack developer.
        My most interests are around game devlopment (mostly game engine) but I do enjoy any kind of development and open to new challenges.`;
    }
}
