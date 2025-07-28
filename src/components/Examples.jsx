import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';

export default function Examples() {
  const [clickedTab, setClickedTab] = useState('');

  function handleClick(clickedTab) {
    setClickedTab(clickedTab);
  }

  return (
    <Section sectionTitle="Examples" id="examples">
      <menu>
        <TabButton
          title={EXAMPLES.components.title}
          onHandleClick={() => handleClick('components')}
          isSelected={clickedTab === 'components'}
        />
        <TabButton
          title={EXAMPLES.jsx.title}
          onHandleClick={() => handleClick('jsx')}
          isSelected={clickedTab === 'jsx'}
        />
        <TabButton
          title={EXAMPLES.props.title}
          onHandleClick={() => handleClick('props')}
          isSelected={clickedTab === 'props'}
        />
        <TabButton
          title={EXAMPLES.state.title}
          onHandleClick={() => handleClick('state')}
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
    </Section>
  );
}
