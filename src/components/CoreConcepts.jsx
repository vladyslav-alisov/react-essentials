import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept/CoreConcept.jsx'

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((v,i) => <CoreConcept key= {i} {...v} />)}
          </ul>
        </section>
    );
}