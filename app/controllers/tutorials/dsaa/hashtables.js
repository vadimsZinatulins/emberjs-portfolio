import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';

export let header = new TutorialHeader(
  "Hash Tables",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa.hashtables"
);

export default class TutorialsDsaaHashtablesController extends Controller {
}
