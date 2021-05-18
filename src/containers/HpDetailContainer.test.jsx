import React from 'react';
import { render, screen } from '@testing-library/react';
import HpDetailContainer from './HpDetailContainer';

describe('harry potter character list page', () => {
    it('renders a list of harry potter characters to the screen', async () => {
        render(<HpDetailContainer match={{ params: { name: 'Harry Potter' } }} />);

        screen.getByText('Loading...');

        await screen.findByAltText('character image');
        await screen.getByText('Harry Potter');
    });
})
