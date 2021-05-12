import React from 'react';
import { render, screen } from '@testing-library/react';
import HpListContainer from './hpListContainer';

describe('harry potter character list page', () => {
    it('renders a list of harry potter characters to the screen', async () => {
        render(<HpListContainer />);
        screen.getByText('Loading...');

        const list = await screen.findByRole('list');
        expect(list).not.toBeEmptyDOMElement();
    });
})