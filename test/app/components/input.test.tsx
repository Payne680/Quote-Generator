import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from "../../../src/app/components/input";

describe('Component files', () => {
    it('Should have an input tag', () => {
        render(<Input />);

        const inputElement = screen.getByTestId('input-tag')
        expect(inputElement).toHaveClass('inputz');
    });
});