import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';

export let header = new TutorialHeader(
  "Queues",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa.queues"
);

export default class TutorialsDsaaQueuesController extends Controller {
}
