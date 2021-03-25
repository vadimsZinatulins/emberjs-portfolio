import Service from '@ember/service';

class WorkExperience {
    date;
    company;
    position;
    responsabilities;

    constructor(date, company, position, responsabilities) {
        this.date = date;
        this.company = company;
        this.position = position;
        this.responsabilities = responsabilities;
    }
}

class Education {
    date;
    name;
    place;

    constructor(date, name, place) {
        this.date = date;
        this.name = name;
        this.place = place;
    }
}

class Skill {
    name;
    rate;

    constructor(name, rate) {
        this.name = name;
        this.rate = rate;
    }
}

class PersonalLink {
    link;
    icon;

    constructor(link, icon) {
        this.link = link;
        this.icon = icon;
    }
}

class Diploma {
    name;
    file;

    constructor(name, file) {
        this.name = name;
        this.file = file;
    }
}

class Course {
    date;
    name;
    from;
    diploma;

    constructor(date, name, from, diploma) {
        this.date = date;
        this.name = name;
        this.from = from;
        this.diploma = diploma;
    }
}

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
        new Skill('JavaScript', 80),
        new Skill('C++', 60),
        new Skill('Java', 60),
        new Skill('Python', 60),
        new Skill('C#', 40),
        new Skill('NodeJS', 80),
        new Skill('EmberJS', 80),
        new Skill('NodeJS C++ Addons', 60),
        new Skill('Visual Studio', 60),
        new Skill('Visual Studio Code', 60),
        new Skill('NetBeans', 60),
        new Skill('Emscripten', 60),
        new Skill('WebAssembly', 60),
        new Skill('Docker', 40),
        new Skill('Kubernetes', 20),
        new Skill('Git', 80),
        new Skill('Machine Learning (Mathematical Concept)', 40),
        new Skill('TensorFlow', 20),
        new Skill('Flask', 40),
        new Skill('Linux', 60),
        new Skill('NGINX', 40),
        new Skill('Postgres SQL', 60),
        new Skill('Object Oriented Programming', 100),
        new Skill('Functional Programming', 80),
        new Skill('Data Oriented Design', 40)
    ];
    courses = [
        new Course('Feb 2021', 'NGINX Fundamentals', 'Udemy'),
        new Course('Oct 2020', 'Docker Mastery: With Kubernetes', 'Udemy'),
        new Course('Aug 2020', 'WebAssembly & Emscripten', 'Udemy'),
        new Course('Feb 2020', 'Machine Learning', 'Coursera')
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
