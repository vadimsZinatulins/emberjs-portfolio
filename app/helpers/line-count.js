import { helper } from '@ember/component/helper';

export default helper(function lineCount(params) {
    return params[''].split('\n').length;
});
