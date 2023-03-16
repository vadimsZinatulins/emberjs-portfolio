import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';

export let header = new TutorialHeader(
  "Linked Lists",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa.linkedlists"
);

export default class TutorialsDsaaLinkedlistsController extends Controller {
}
