import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

function App() {
  function showNumber(number) {
    console.log(number);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept concept={CORE_CONCEPTS[0]} />
            <CoreConcept concept={CORE_CONCEPTS[1]} />
            <CoreConcept concept={CORE_CONCEPTS[2]} />
            <CoreConcept concept={CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onShowNumber={() => showNumber(1)} />
            <TabButton onShowNumber={() => showNumber(2)} />
            <TabButton onShowNumber={() => showNumber(3)} />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
