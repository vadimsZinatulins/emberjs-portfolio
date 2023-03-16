import EmberRouter from '@ember/routing/router';
import config from 'vadims-zinatulins-portfolio/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');

  this.route('tutorials', function() {
    this.route('simd');

    this.route('dsaa', function() {
      this.route('tasc');
      this.route('arrays');
      this.route('linkedlists');
      this.route('stacks');
      this.route('queues');
      this.route('trees');
      this.route('heaps');
      this.route('graphs');
      this.route('hashtables');
      this.route('disjset');
    });
  });
  this.route('about');
});
