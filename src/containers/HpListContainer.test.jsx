import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HpListContainer from './hpListContainer';

describe('harry potter character list page', () => {
    it('renders a list of harry potter characters to the screen', async () => {
        render(
            <MemoryRouter>
                <HpListContainer />
            </MemoryRouter>
        );
        screen.getByText('Loading...');

        const list = await screen.findByRole('list', { name: 'char-list' });
        expect(list).not.toBeEmptyDOMElement();
    });
})
