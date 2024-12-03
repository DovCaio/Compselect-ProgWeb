/**
 * @jest-environment jsdom
 */
import Menu from "../../src/Components/Header";
import {render, screen} from '@testing-library/react';
import React from 'react';


test("Renderização do links da navegação do header. Test do home.", () => {
    render(<Menu/>)
    expect(screen.getByText("Home").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Sobre Nós.", () => {
    render(<Menu/>)
    expect(screen.getByText("Sobre Nós").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Publicações.", () => {
    render(<Menu/>)
    expect(screen.getByText("Publicações").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Autores.", () => {
    render(<Menu/>)
    expect(screen.getByText("Autores").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Submissões.", () => {
    render(<Menu/>)
    expect(screen.getByText("Submissões").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Eventos.", () => {
    render(<Menu/>)
    expect(screen.getByText("Eventos").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Blog.", () => {
    render(<Menu/>)
    expect(screen.getByText("Blog").toBeInTheDocument)
})

test("Renderização do links da navegação do header. Test do Contato.", () => {
    render(<Menu/>)
    expect(screen.getByText("Contato").toBeInTheDocument)
})