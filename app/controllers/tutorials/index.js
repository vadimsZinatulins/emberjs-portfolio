import Controller from '@ember/controller';
import { header as simd_header } from './simd';
import { header as dsaa_header } from './dsaa';
export default class TutorialsIndexController extends Controller {
  tutorials = [
    dsaa_header,
    simd_header
  ];
}
