import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>example</h2>
          <menu>
            {/* <TabButton>Components</TabButton> */}
            <TabButton label='Components' />
            <TabButton label='JSX' />
            <TabButton label='Props' />
            <TabButton label='State' />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;