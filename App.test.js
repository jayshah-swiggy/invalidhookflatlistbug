import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App component', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.resetAllMocks();
    });

    it("render App", () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();      
    });
});
