import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';

export let header = new TutorialHeader(
  "Stacks",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa.stacks"
);

export default class TutorialsDsaaStacksController extends Controller {
}
