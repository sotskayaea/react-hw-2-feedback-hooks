import css from './Statistics.module.css';

const Statistics = ({ bad, good, neutral, positivePercentage, total }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <ul className={css.list}>
          <li className={css.item}>Good:{good}</li>
          <li className={css.item}>Bad:{bad}</li>
          <li className={css.item}>Neutral:{neutral}</li>
          <li className={css.item}>Total:{total}</li>
          <li className={css.item}>Positive feedback:{positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};

export default Statistics;
