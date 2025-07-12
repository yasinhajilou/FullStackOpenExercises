import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0);
  let [bad , setBad] = useState(0);
  let [neutral , setNeutral] = useState(0);

  return (
    <>
      <Title content="give feedback" />

      <div>
        <AppButton
          onClick={() => {
            setGood(good + 1)
          }}
          title="good"
        />
        <AppButton
          onClick={() => {
            setNeutral(neutral + 1)
          }}
          title="neutral"
        />
        <AppButton
          onClick={() => {
            setBad(bad + 1)
          }}
          title="bad"
        />
      </div>

      <Title content="Statistics" />

      <div>
        <ListElement content="good" count={good} />
        <ListElement content="neutral" count={neutral} />
        <ListElement content="bad" count={bad} />
      </div>
    </>
  );
};

const Title = ({ content }) => {
  return (
    <>
      <h1>{content}</h1>
    </>
  );
};

const ListElement = ({ content, count }) => {
  return (
    <>
      <h4>
        {content} {count}
      </h4>
    </>
  );
};

const AppButton = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default App;
