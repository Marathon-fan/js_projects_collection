import { ShoppingMoviesPage } from './app.po';

describe('shopping-movies App', () => {
  let page: ShoppingMoviesPage;

  beforeEach(() => {
    page = new ShoppingMoviesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
