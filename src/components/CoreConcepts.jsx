import { CORE_CONCEPTS } from '../data';
import Section from './Section';
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
  return (
    <Section sectionTitle="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
