import css from './Feedback.module.css';
import { nanoid } from 'nanoid';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.feedback_list}>
        {options.map(option => {
          console.log(option);
          return (
            <li key={nanoid()}>
              <button
                className={css.feedback_button}
                type="button"
                onClick={() => onLeaveFeedback(option.name)}
              >
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feedback;
