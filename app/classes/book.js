import { htmlSafe } from '@ember/template';

export default class Book {
    get htmlSafeDescription() {
        return htmlSafe(this.htmlDescription);
    }

    title;
    author;
    cover;
    htmlDescription;
    link;
}