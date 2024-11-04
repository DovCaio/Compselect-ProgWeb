/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react';
import HeaderHome from '../../../src/Components/home/HeaderHome';
import React from 'react';

import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
  }));

test("Renderização da apresentação", () => {
    render(<HeaderHome/>)
    expect(screen.getByText("Transformando palavras em mundos: descubra o poder da leitura com a nossa editora.").toBeInTheDocument)
})

test("Renderização do button da apresentação", () => {
    render(<HeaderHome/>)
    expect(screen.getByText("Envie Seu Manuscrito.").toBeInTheDocument)
})