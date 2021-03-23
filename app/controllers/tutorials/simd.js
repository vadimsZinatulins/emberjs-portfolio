import Controller from '@ember/controller';
import $ from 'jquery';
import { htmlSafe } from '@ember/template';

export default class TutorialsSimdController extends Controller {
    constructor(...args) {
        super(...args);

        console.log(this.htmlSafeContiguosArray);

        requestAnimationFrame(() => {
            $('#common-sizes-definition').popover({
                placement: 'top',
                title: 'Different architectures',
                html: true,
                content: this.htmlSafeCommonSizes.string
            });

            $('#contiguous-array-definition').popover({
                placement: 'top',
                title: 'Contiguous Array',
                html: true,
                content: this.htmlSafeContiguosArray.string
            });

            $('#particle-definition').popover({
                placement: 'top',
                title: 'Contiguous Array',
                html: true,
                content: this.htmlSafeParticle.string
            });
        });
    }

    get htmlSafeCommonSizes(){
        return htmlSafe(`
        <p>
            Unless you have an very old CPU which you might have a 32bit operating system
        </p>`);
    }

    get htmlSafeContiguosArray() {
        return htmlSafe(`
        <p>
            Contiguous array is an array which elements are all next to each other without free space between them.
            One such example is <code>float healths[30];</code> which creates an contiguous array of 30 floats.
        </p>`);
    }

    get htmlSafeParticle() {
        return htmlSafe(`<p>Our particle is defined as such:</p><pre><code>struct Particle 
{
    float x;
    float y;
    float z;

    float v;
    float v;
    float v;
};</code></pre>`);
    }
}
