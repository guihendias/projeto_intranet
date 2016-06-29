import { ProjetoPage } from './app.po';

describe('projeto App', function() {
  let page: ProjetoPage;

  beforeEach(() => {
    page = new ProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
