import Controller from '@ember/controller';
import $ from 'jquery';
import { htmlSafe } from '@ember/template';

export default class TutorialsSimdController extends Controller {
    constructor(...args) {
        super(...args);

        console.log(this.htmlSafeContiguosArray);

        requestAnimationFrame(() => {
            $('#arch-size-definition').popover({
                placement: 'top',
                title: 'Architecture sizes',
                html: true,
                content: this.htmlSafeRegisterSize.string
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

    get htmlSafeRegisterSize(){
        return htmlSafe(`
        <p>
            Some older architectures have 32 bits and even smaller can be found in embedded systems that are designed to do a very limited amout 
            of tasks (this is done to reduce energy consumption and other cost reasons). Examples can be found in toys.
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
