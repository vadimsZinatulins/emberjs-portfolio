import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';
import { header as tasc_header } from './tasc';
import { header as arrays_header } from './arrays';
import { header as linkedlists_header } from './linkedlists';
import { header as stacks_header } from './stacks';
import { header as queues_header } from './queues';
import { header as trees_header } from './trees';
import { header as heaps_header } from './heaps';
import { header as graphs_header } from './graphs';
import { header as hashtables_header } from './hashtables';
import { header as disjset_header } from './disjset';

export let header = new TutorialHeader(
  "Data Structures and Algorithms",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa"
);

export default class TutorialsDsaaIndexController extends Controller {
  tutorials = [
    tasc_header,
    arrays_header,
    linkedlists_header,
    stacks_header,
    queues_header,
    trees_header,
    heaps_header,
    graphs_header,
    hashtables_header,
    disjset_header
  ];
}
