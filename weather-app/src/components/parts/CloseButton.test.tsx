import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CloseButton from './CloseButton';

describe('close button', () => {
    it('should be able to close the button by role', () => {
        const closeFunction = jest.fn();
        render(<CloseButton onClick={() => closeFunction()} />)

        screen.getByRole('button').click()
        expect(closeFunction).toBeCalled()
    })
})