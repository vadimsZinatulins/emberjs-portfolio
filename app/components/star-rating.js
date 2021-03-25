import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class StarRatingComponent extends Component {
    get fullStars() {
        return new Array(this.args.rate - 0);
    }

    get emptyStars() {
        let numStars = this.args.max || 5;
        return new Array(numStars - this.args.rate);
    }

    get colorOrDefault() {
        return htmlSafe('color: ' + this.args.color || 'black' + ';');
    }
}
