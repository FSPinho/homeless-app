import React from 'react';
import {mount} from 'enzyme';
import App from './App';

it('Renders App without crashing', () => {
    const wrapper = mount(<App/>);
});

it('Firebase defined', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.instance().store.firebase).toBeDefined();
})
