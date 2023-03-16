import Controller from '@ember/controller';
import { header as simd_header } from './simd';

export default class TutorialsIndexController extends Controller {
  tutorials = [simd_header];
}
