/**
 * @jest-environment jsdom
 */
import Header from "../../src/Components/Header";
import {render, screen} from '@testing-library/react';
import React from 'react';


test("Renderização da logo no header", () => {
    render(<Header/>)
    expect(screen.getByRole("img", {name: "Logo do site"}).toBeInTheDocument)
})