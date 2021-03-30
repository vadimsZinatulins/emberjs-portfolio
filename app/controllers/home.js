import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Book from '../classes/book';

export default class HomeController extends Controller {
    @service personal;

    books = [
        new Book('Data Oriented Design', 'Richard Fabian', '/images/books/dod_rf_cover.png',
            'This is a very important book. It gives you a good reason you should learn data oriented design and then' +
            ' gives an introduction to it. This book is very theory-heavy but contains some examples with some code.' +
            ' I do believe this book is underpriced for the content and the quality it delivers. There are a lot of books' +
            ' that deliver less value and much higher priced. The author of this book also provided a free online version' +
            ' that can be found <a href="https://www.dataorienteddesign.com/dodbook/">here<a> for those people who cannot afford it.' +
            ' This is one of those books that I will do as much publicity as I can. I do believe it requires more attention than I\'ve seen it has.'),
        new Book('Game Programming Patterns', 'Robert Nystrom', '/images/books/gpp_rn_cover.jpg', 'This is a must for new programmers to game development.' +
            ' If their CV does not say that they have read this book they should think twice about calling' +
            ' themselves, game programmers. I\'m intentionally exaggerating here but this is a great book.' +
            ' It will give you those ah-ha moments in nearly every chapter. It contains many programming patterns' +
            ' that you\'ll find in an in-game industry with lots of practical examples with lots of code. Although' +
            ' this book contains its examples in C++ they are easily converted to any other language. This is one of' +
            ' those books that have an accessible price but even though if you cannot afford it the author has an online' +
            ' version of it right here. I convinced some of my friends to buy this book just by giving them some problems and' +
            ' then showing the solutions offered by this book and these people are not even in the game' +
            ' development area. Strongly recommend this book.'),
        new Book('Data Structures for Game Programming', 'Ron Penton', '/images/books/dsfgp_al_cover.jpg', 'This one might be somewhat contradictory compared' +
            ' with other books. It is already an old book but still contains some precious knowledge that is good to have under your toolbelt. This book goes' +
            ' over some well know data structures, gives you a comprehensive implementations and some examples where you can apply or how you can apply' +
            ' this data structure in a game with lots of code samples. But be warned, if you already know data oriented design you might not find this' +
            ' book very funny.')
    ];
    vennDiagramContent =
        `<img src="/images/venn_books.png" width="450px">`;
}
