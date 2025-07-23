import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [clickedTab, setClickedTab] = useState('');

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
            <TabButton
              title={EXAMPLES.components.title}
              onShowNumber={() => setClickedTab('components')}
            />
            <TabButton
              title={EXAMPLES.jsx.title}
              onShowNumber={() => setClickedTab('jsx')}
            />
            <TabButton
              title={EXAMPLES.props.title}
              onShowNumber={() => setClickedTab('props')}
            />
            <TabButton
              title={EXAMPLES.state.title}
              onShowNumber={() => setClickedTab('state')}
            />
          </menu>
          {!clickedTab && <p>Please select a topic</p>}
          {clickedTab && (
            <div id="tab-content">
              <h3>{EXAMPLES[clickedTab].title}</h3>
              <p>{EXAMPLES[clickedTab].description}</p>
              <pre>
                <code>{EXAMPLES[clickedTab].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
