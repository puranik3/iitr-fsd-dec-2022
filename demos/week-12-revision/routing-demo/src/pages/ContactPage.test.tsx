import ContactPage from "./ContactPage";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

test( 'ContactPage shows correct address', () => {
    // arrange
    // act
    render( 
        <BrowserRouter>
            <ContactPage />
        </BrowserRouter>
    );

    // assertions
    const el = screen.getByText( /ABC Plaza/i );
    expect( el ).toBeInTheDocument();
} )