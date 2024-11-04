// jest.setup.js
const { useRouter } =  require('next/router'); //Também tem o next/navigation, ele tem como ser mockado mais fácil também
//Caso seja necessário usar o next/navigation, basta importar o useRouter do next/navigation no proprio teste e fazer as mesmas configurações

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(() => {
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  }));
});