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
              onShowNumber={() => setClickedTab(1)}
            />
            <TabButton
              title={EXAMPLES.jsx.title}
              onShowNumber={() => setClickedTab(2)}
            />
            <TabButton
              title={EXAMPLES.props.title}
              onShowNumber={() => setClickedTab(3)}
            />
            <TabButton
              title={EXAMPLES.state.title}
              onShowNumber={() => setClickedTab(4)}
            />
          </menu>
          <div id="tab-content">
            <h3>TITLE</h3>
            <p>
              {clickedTab === '' ? 'nix' : ''}
              {clickedTab === 1 ? EXAMPLES.components.description : ''}
              {clickedTab === 2 ? EXAMPLES.jsx.description : ''}
              {clickedTab === 3 ? EXAMPLES.props.description : ''}
              {clickedTab === 4 ? EXAMPLES.state.description : ''}
            </p>
            <pre>
              <code>
                {clickedTab === '' ? 'nix' : ''}
                {clickedTab === 1 ? EXAMPLES.components.code : ''}
                {clickedTab === 2 ? EXAMPLES.jsx.code : ''}
                {clickedTab === 3 ? EXAMPLES.props.code : ''}
                {clickedTab === 4 ? EXAMPLES.state.code : ''}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
