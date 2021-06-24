import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  scientists = ['Marie Curie', 'Albert Einstein', 'Mae Jemison'];

  model() {
    return this.scientists;
  }
}
