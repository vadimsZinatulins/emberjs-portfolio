import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';

export let header = new TutorialHeader(
  "Disjoint Sets",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa.disjset"
);

export default class TutorialsDsaaDisjsetController extends Controller {
}
