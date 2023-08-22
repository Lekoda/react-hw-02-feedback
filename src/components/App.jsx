import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback === 0) {
      toast.error('no feedback given');
    }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.handleChangeClick} />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? null : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positive={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        <Toaster position="top-center" />
        <GlobalStyle />
      </>
    );
  }
}
