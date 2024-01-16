import React, { Component } from 'react';
import Section from './Section/Section.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState({ [name]: this.state[name] + 1 });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    const positivePercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(positivePercentage);
  };
  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          total={this.countTotalFeedback()}
          onLeaveFeedback={this.onLeaveFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
