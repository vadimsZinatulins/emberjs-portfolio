import Controller from '@ember/controller';
import TutorialHeader from '../../../classes/tutorialHeader';
import cpp_snippet_1 from '../../../snippets/dsaa/tasc/cpp_snippet_1';
import cpp_snippet_2 from '../../../snippets/dsaa/tasc/cpp_snippet_2';
import cpp_snippet_3 from '../../../snippets/dsaa/tasc/cpp_snippet_3';

export let header = new TutorialHeader(
  "Time and Space Complexity",
  "03/16/2023",
  "",
  ["C++", "Data Structures", "Algorithms"],
  "tutorials.dsaa.tasc"
);

export default class TutorialsDsaaTascController extends Controller {
  cpp_snippet_1 = cpp_snippet_1;
  cpp_snippet_2 = cpp_snippet_2;
  cpp_snippet_3 = cpp_snippet_3;
}
