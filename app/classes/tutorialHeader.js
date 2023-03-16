export default class TutorialHeader {
    title;
    date;
    description;
    tags;
    route;

    constructor(title, date, description, tags, route) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.tags = tags;
        this.route = route;
    }
}
