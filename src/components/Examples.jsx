import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from './TabButton/TabButton.jsx';
import { useState } from 'react';


export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState(undefined);

    function handleSelect(selectedButton) {
        console.log(tabContent);
        setSelectedTopic(selectedButton);
        console.log(tabContent);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>);
    }

    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    );
}