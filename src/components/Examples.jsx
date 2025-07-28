import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';

export default function Examples() {
  const [clickedTab, setClickedTab] = useState('');

  function handleClick(clickedTab) {
    setClickedTab(clickedTab);
  }

  return (
    <Section sectionTitle="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              title={EXAMPLES.components.title}
              onClick={() => handleClick('components')}
              isSelected={clickedTab === 'components'}
            />
            <TabButton
              title={EXAMPLES.jsx.title}
              onClick={() => handleClick('jsx')}
              isSelected={clickedTab === 'jsx'}
            />
            <TabButton
              title={EXAMPLES.props.title}
              onClick={() => handleClick('props')}
              isSelected={clickedTab === 'props'}
            />
            <TabButton
              title={EXAMPLES.state.title}
              onClick={() => handleClick('state')}
              isSelected={clickedTab === 'state'}
            />
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
