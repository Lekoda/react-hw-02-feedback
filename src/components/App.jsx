import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';

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

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={this.handleChangeClick} />
        <GlobalStyle />
      </Section>
    );
  }
}
