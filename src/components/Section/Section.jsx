import Feedback from 'components/Feedback/Feedback';
import Statistics from '../Statistics/Statistics';

const Section = ({
  title,
  good,
  bad,
  neutral,
  onLeaveFeedback,
  total,
  positivePercentage,
}) => {
  const options = [{ name: 'good' }, { name: 'bad' }, { name: 'neutral' }];
  return (
    <section>
      <h1>{title}</h1>
      <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        bad={bad}
        good={good}
        neutral={neutral}
        total={total}
        positivePercentage={positivePercentage}
      />
    </section>
  );
};

export default Section;
