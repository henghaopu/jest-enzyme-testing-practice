import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders without error', () => {
  const wrapper = Enzyme.shallow(<App />);
  // test "Renders the components I want" by using data-test attribute
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

// test specs
test('Render increment button', () => {
  const wrapper = Enzyme.shallow(<App />);
  const button = wrapper.find('[data-test="increment-button"]');
  expect(button.length).toBe(1);
});
test('Render display counter', () => {
  const wrapper = Enzyme.shallow(<App />);
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.length).toBe(1);
});
test('Counter starts at 0', () => {
  const wrapper = Enzyme.shallow(<App />);
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});
test('Clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = Enzyme.shallow(<App />);
  wrapper.setState({ counter });

  // find button and click
  const button = wrapper.find('[data-test="increment-button"]');
  button.simulate('click');

  // find display and test value
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.text()).toContain(counter + 1);
});
