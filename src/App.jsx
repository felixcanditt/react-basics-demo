import { useState } from 'react';

import { EXAMPLES } from './data';

import Header from './components/Header';
import TabButton from './components/TabButton';
import CoreConcepts from './components/CoreConcepts';

function App() {
  const [clickedTab, setClickedTab] = useState('');

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
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
