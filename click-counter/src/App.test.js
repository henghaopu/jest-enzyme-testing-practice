import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders the components I want without error', () => {});

// test specs
test('Render increment button', () => {});
test('Render display counter', () => {});
test('Counter starts at 0', () => {});
test('Clicking button increments counter display', () => {});
