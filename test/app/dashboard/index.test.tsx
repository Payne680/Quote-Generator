import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import DashboardIndexPage from "@/app/dashboard";

describe('Dashboard page', () => {
    it('Should render properly', () => {
        render(<DashboardIndexPage />);

        const header = screen.getByRole('heading');
        const headerText = 'Hello World';

        expect(header).toHaveTextContent(headerText);
    });

    it('Should have a disable button', () => {
        render(<DashboardIndexPage />);
        
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeDisabled();

    });

    it('Should have a p tag with className blue', () => {
        render(<DashboardIndexPage />);

        const pElement = screen.getByTestId('paragraph-blue');

        expect(pElement).toHaveClass('blue');
    });
});