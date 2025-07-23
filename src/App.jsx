import { useState } from 'react';

import { CORE_CONCEPTS } from './data';

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
              title="Components"
              onShowNumber={() => setClickedTab(1)}
            />
            <TabButton title="JSX" onShowNumber={() => setClickedTab(2)} />
            <TabButton title="Props" onShowNumber={() => setClickedTab(3)} />
            <TabButton title="State" onShowNumber={() => setClickedTab(4)} />
          </menu>
          {clickedTab === '' ? 'nix' : ''}
          {clickedTab === 1 ? 'eins' : ''}
          {clickedTab === 2 ? 'zwei' : ''}
          {clickedTab === 3 ? 'drei' : ''}
          {clickedTab === 4 ? 'vier' : ''}
        </section>
      </main>
    </div>
  );
}

export default App;
