
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent = <p>Please select a topic.</p>
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }


    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (

        <Section title="Examples" id="examples">
            <menu>
                {/* <TabButton label='Components' /> */}
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => { handleSelect('components') }}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => { handleSelect('jsx') }}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => { handleSelect('props') }}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => { handleSelect('state') }}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    );

}