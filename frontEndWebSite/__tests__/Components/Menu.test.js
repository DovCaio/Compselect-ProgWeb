/**
 * @jest-environment jsdom
 */
import Menu from "../../src/Components/Header";
import {render, screen} from '@testing-library/react';
import React from 'react';


test("Renderização do links da navegação do header.", () => {
    render(<Menu/>)
    expect(screen.getByText("Home").toBeInTheDocument)
})