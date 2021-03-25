import Controller from '@ember/controller';
import jQuery from 'jquery';
import { htmlSafe } from '@ember/template';
import snippet1 from 'vadims-zinatulins-portfolio/snippets/simd/snippet1';
import snippet2 from 'vadims-zinatulins-portfolio/snippets/simd/snippet2';
import snippet3 from 'vadims-zinatulins-portfolio/snippets/simd/snippet3';
import snippet4 from 'vadims-zinatulins-portfolio/snippets/simd/snippet4';
import snippet5 from 'vadims-zinatulins-portfolio/snippets/simd/snippet5';
import snippet6 from 'vadims-zinatulins-portfolio/snippets/simd/snippet6';
import snippet7 from 'vadims-zinatulins-portfolio/snippets/simd/snippet7';
import snippet8 from 'vadims-zinatulins-portfolio/snippets/simd/snippet8';

export default class TutorialsSimdController extends Controller {
    snippet1 = snippet1;
    snippet2 = snippet2;
    snippet3 = snippet3;
    snippet4 = snippet4;
    snippet5 = snippet5;
    snippet6 = snippet6;
    snippet7 = snippet7;
    snippet8 = snippet8;

    constructor(...args) {
        super(...args);

        console.log('Constructing');
        requestAnimationFrame(() => {
            console.log('jquery: ', jQuery('#intel-documentation'));
            
            jQuery('#intel-documentation').popover({
                placement: 'top',
                title: 'Intel Documentation',
                html: true,
                content: this.htmlSafeIntelDocumentation.string,
                container: 'body'
            });

            jQuery('#instruction-info').popover({
                placement: 'top',
                title: 'Note!',
                html: true,
                content: this.htmlSafeInstrocutionInfo.string,
                container: 'body'
            });
        });
    }

    get htmlSafeIntelDocumentation() {
        return htmlSafe(`
        <p>
            This is what Intel's documentations has to say about <code>_mm_set_ps</code>:
        </p>
        <img src="/images/tutorials/simd/intel_documentation_mm_set_ps.png">
        <p>
            They have very good explanation about 'Sequence' instructions.
            You can check their entire documentation <a href="https://software.intel.com/sites/landingpage/IntrinsicsGuide/">here</a>.
        </p>
        `);
    }

    get htmlSafeInstrocutionInfo() {
        return htmlSafe(`
        <p>
            Event though CPU executes this in one instruction it doesn't mean it executes it in one single 
            <a href="https://www.intel.com/content/www/us/en/gaming/resources/cpu-clock-speed.html">CPU Clock</a>. Actually it will
            take 3 to 4 cycles to complete the instruction. Still it is much faster than adding four <code>floats</code> individually.
        </p>
        `);
    }
}
