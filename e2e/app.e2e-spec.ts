import { GestaoVinhosPage } from './app.po';

describe('gestao-vinhos App', () => {
  let page: GestaoVinhosPage;

  beforeEach(() => {
    page = new GestaoVinhosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
