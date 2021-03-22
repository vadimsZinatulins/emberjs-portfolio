import Service from '@ember/service';

class PersonalLink {
    link;
    icon;

    constructor(link, icon) {
        this.link = link;
        this.icon = icon;
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
    
    get age() {
        return new Date(new Date() - new Date(1995, 1, 10)).getFullYear() - 1970;
    }

    get resumedInfo() {
        return `My name is Vadims Zinatulins and I'm ${this.age} years old. I'm mostly self-taught programmer but I'm currently studying
        computer science in Institudo Politécnico de Tomar (Portugal). Working at Softinsa (an IBM's group company) as a full stack developer.
        My most interests are around game devlopment (mostly game engine) but I do enjoy any kind of development and open to new challenges.`;
    }
}
