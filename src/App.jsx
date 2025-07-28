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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              title={EXAMPLES.components.title}
              onShowNumber={() => setClickedTab('components')}
              isSelected={clickedTab === 'components'}
            />
            <TabButton
              title={EXAMPLES.jsx.title}
              onShowNumber={() => setClickedTab('jsx')}
              isSelected={clickedTab === 'jsx'}
            />
            <TabButton
              title={EXAMPLES.props.title}
              onShowNumber={() => setClickedTab('props')}
              isSelected={clickedTab === 'props'}
            />
            <TabButton
              title={EXAMPLES.state.title}
              onShowNumber={() => setClickedTab('state')}
              isSelected={clickedTab === 'state'}
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
    </>
  );
}

export default App;
