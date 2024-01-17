import React from 'react';
import { useState } from 'react';
import Section from './Section/Section.jsx';

const App = () => {
  // const [good, setGood] = useState(0);
  // const [bad, setBad] = useState(0);
  // const [neutral, setNeutral] = useState(0);

  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    console.log(value[name]);
    setValue({ ...value, [name]: value[name] + 1 });
  };

  const countTotalFeedback = () => {
    return value.good + value.neutral + value.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (value.good === 0) {
      return 0;
    }
    const positivePercentage = (value.good * 100) / countTotalFeedback();
    return Math.round(positivePercentage);
  };
  const { bad, good, neutral } = value;
  return (
    <>
      <Section
        title="Please leave feedback"
        good={value.good}
        bad={value.bad}
        neutral={value.neutral}
        total={countTotalFeedback()}
        onLeaveFeedback={onLeaveFeedback}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
};

export { App };

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = name => {
//     this.setState({ [name]: this.state[name] + 1 });
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     if (this.state.good === 0) {
//       return 0;
//     }
//     const positivePercentage =
//       (this.state.good * 100) / this.countTotalFeedback();
//     return Math.round(positivePercentage);
//   };
//   render() {
//     return (
//       <>
//         <Section
//           title="Please leave feedback"
//           good={this.state.good}
//           bad={this.state.bad}
//           neutral={this.state.neutral}
//           total={this.countTotalFeedback()}
//           onLeaveFeedback={this.onLeaveFeedback}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       </>
//     );
//   }
// }
