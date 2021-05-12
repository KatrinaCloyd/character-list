import React from 'react';
import { render, screen } from '@testing-library/react';
import HpDetailContainer from './hpDetailContainer';

describe('harry potter character list page', () => {
    it('renders a list of harry potter characters to the screen', async () => {
        render(<HpDetailContainer />);
        screen.getByText('Loading...');
        // await screen.findByAltText('character image');
        //not sure how to get a url param into the test here... 
    });
})
