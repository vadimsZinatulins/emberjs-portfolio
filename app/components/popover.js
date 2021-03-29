import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';

function genID() {
    return Math.random().toString(36).substring(7);
}

export default class PopoverComponent extends Component {
    id = genID();

    get htmlSafeContent() {
        return htmlSafe(this.args.content);
    }

    @action didInsert() {
        jQuery(`#${this.id}`).popover({
            placement: 'top',
            title: this.args.title,
            html: true,
            content: this.htmlSafeContent.string,
            container: 'body'
        });
    }
}
