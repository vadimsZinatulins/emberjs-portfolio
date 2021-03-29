import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';
import cpp_snippet_1 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_1';
import cpp_snippet_2 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_2';
import cpp_snippet_3 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_3';
import cpp_snippet_4 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_4';
import cpp_snippet_5 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_5';
import cpp_snippet_6 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_6';
import cpp_snippet_7 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_7';
import cpp_snippet_8 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_8';
import cpp_snippet_9 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_9';
import cpp_snippet_10 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_10';
import cpp_snippet_11 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_11';
import cpp_snippet_12 from 'vadims-zinatulins-portfolio/snippets/simd/cpp_snippet_12';
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
    cpp_snippet_1 = cpp_snippet_1;
    cpp_snippet_2 = cpp_snippet_2;
    cpp_snippet_3 = cpp_snippet_3;
    cpp_snippet_4 = cpp_snippet_4;
    cpp_snippet_5 = cpp_snippet_5;
    cpp_snippet_6 = cpp_snippet_6;
    cpp_snippet_7 = cpp_snippet_7;
    cpp_snippet_8 = cpp_snippet_8;
    cpp_snippet_9 = cpp_snippet_9;
    cpp_snippet_10 = cpp_snippet_10;
    cpp_snippet_11 = cpp_snippet_11;
    cpp_snippet_12 = cpp_snippet_12;
    
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

    get htmlSafemicrosecondHelper() {
        return htmlSafe(`
        <p>
            For those who aren't sure about time unit here's a reminder:
        </p>
        <ul>
            <li>1 s = 1000 ms (milliseconds)</li>
            <li>1 s = 1000000 μs (microseconds)</li>
            <li>1 s = 1000000000 ns (nanoseconds)</li>
        </ul>
        `);
    }


    get htmlSafeCpuSupport() {
        return htmlSafe(`
        <p>
            If you ain't sure what your CPU is capable of, check this list <a href="https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#CPUs_with_AVX">here</a>
            to see which CPUs support which data types.
        </p>
        `);
    }

    get htmlSafeDod() {
        return htmlSafe(`
        <p>
            This is a very complex topic but fortunately there is a <a href="https://github.com/dbartolini/data-oriented-design">github</a> 
            project that has all resources that you need to understand it.
        </p>
        <p>
            Also if you can apply Data Oriented Design then you made your data perfect fit for SIMD Instructions. Together they greatly
            boost the overall performance.
        </p>
        `);
    }

    get htmlSafeHoNo() {
        return htmlSafe(`
        <img src="/images/tutorials/simd/oh_no.jpg" width="300px">
        `);
    }

    @action popoverInstructionInfo() {
        jQuery('#intel-documentation').popover({
            placement: 'top',
            title: 'Intel Documentation',
            html: true,
            content: this.htmlSafeIntelDocumentation.string,
            container: 'body'
        });
    }

    @action popoverIntelDocumentation() {
        jQuery('#instruction-info').popover({
            placement: 'top',
            title: 'Note!',
            html: true,
            content: this.htmlSafeInstrocutionInfo.string,
            container: 'body'
        });
    }

    @action popovermicrosecondHelper() {
        jQuery('#microsecond-reminder').popover({
            placement: 'top',
            title: 'Time unit reminder',
            html: true,
            content: this.htmlSafemicrosecondHelper.string,
            container: 'body'
        });
    }

    @action popoverCpuSupport() {
        jQuery('#cpu-simd-support').popover({
            placement: 'top',
            title: 'CPUs that support SIMD',
            html: true,
            content: this.htmlSafeCpuSupport.string,
            container: 'body'
        });
    }

    @action popoverDod() {
        jQuery('#dod-popover').popover({
            placement: 'top',
            title: 'Data Oriented Design',
            html: true,
            content: this.htmlSafeDod.string,
            container: 'body'
        });
    }

    @action popoverHoNo() {
        jQuery('#oh-no-popover').popover({
            placement: 'top',
            title: 'Oh No',
            html: true,
            content: this.htmlSafeHoNo.string,
            container: 'body'
        });
    }
}
