import { htmlSafe } from '@ember/template';

export default class Book {
    get htmlSafeDescription() {
        return htmlSafe(this.htmlDescription);
    }

    constructor(title, author, cover, htmlDescription) {
        this.title = title;
        this.author = author;
        this.cover = cover;
        this.htmlDescription = htmlDescription;
    }

    title;
    author;
    cover;
    htmlDescription;
}