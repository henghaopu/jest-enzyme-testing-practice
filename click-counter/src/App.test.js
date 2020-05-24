import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders without error', () => {
  const wrapper = shallow(<App />);
  // test "Renders the components I want" by using data-test attribute
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

// test specs
test('Render increment button', () => {});
test('Render display counter', () => {});
test('Counter starts at 0', () => {});
test('Clicking button increments counter display', () => {});
