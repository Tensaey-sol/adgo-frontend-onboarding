import { useState } from 'react';

import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#333333] text-white grid place-content-center text-[150%]">
      <Heading title={"Hello"} />
      <Section title={"Different Title"}>This is my Section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="font-bold">{item}</span>} />
    </div>
  );
}

export default App;
