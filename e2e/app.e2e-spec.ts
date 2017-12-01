import { PoliticacidadePage } from './app.po';

describe('politicacidade App', () => {
  let page: PoliticacidadePage;

  beforeEach(() => {
    page = new PoliticacidadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
