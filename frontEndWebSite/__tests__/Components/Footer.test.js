import Footer from "../../src/Components/Footer";
import {render, screen} from '@testing-library/react';
import test from "node:test";
import React from 'react';


test("Renderização footer: Voltar ao inicio", () => {
    render(<Footer/>)
    expect(screen.getByText("Voltar para o inicio").toBeInTheDocument)
})

test("Renderização footer, sessão: Contato", () => {
    render(<Footer/>)
    expect(screen.getByRole("heading", {name: "Contato", level: 3}).toBeInTheDocument)
})

test("Renderização footer, sessão contato: Email", () => {
    render(<Footer/>)
    expect(screen.getByText("Email: contact@compselects.com").toBeInTheDocument)
})


test("Renderização footer, sessão contato: Telefone", () => {
    render(<Footer/>)
    expect(screen.getByText("Telefone: 123 456 789").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link rápidos", () => {
    render(<Footer/>)
    expect(screen.getByText("Links rápidos").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link da home", () => {
    render(<Footer/>)
    expect(screen.getByText("Home").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link do sobre nós", () => {
    render(<Footer/>)
    expect(screen.getByText("Sobre nós").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link Publicações.", () => {
    render(<Footer/>)
    expect(screen.getByText("Publicações").toBeInTheDocument)
})
test("Renderização footer, sessão Links Rápidos: Link Autores", () => {
    render(<Footer/>)
    expect(screen.getByText("Autores").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link Submissões", () => {
    render(<Footer/>)
    expect(screen.getByText("Submissões").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link Eventos", () => {
    render(<Footer/>)
    expect(screen.getByText("Eventos").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link Blogs", () => {
    render(<Footer/>)
    expect(screen.getByText("Blogs").toBeInTheDocument)
})

test("Renderização footer, sessão Links Rápidos: Link Contato", () => {
    render(<Footer/>)
    expect(screen.getByRole("link", {name: "Contato"}).toBeInTheDocument)
})

test("Renderização footer, sessão fique conectado: Fique conectado", () => {
    render(<Footer/>)
    expect(screen.getByText("Fique conectado").toBeInTheDocument)
})

test("Renderização footer, sessão assine nosso newsletter: Assine nosso newsletter", () => {
    render(<Footer/>)
    expect(screen.getByText("Assine nosso newsletter").toBeInTheDocument)
})