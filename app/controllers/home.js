import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
    @service personal;

    vennDiagramContent =
        `<img src="/images/venn_books.png" width="450px">`;
}
