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
    this.route('mathematics', function() {
      this.route('planes');
      this.route('3d-vectors');
      this.route('3x3-matrices');
    });
  });
  this.route('about');
});
