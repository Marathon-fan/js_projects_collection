import { Angular4ShoppingRecipePage } from './app.po';

describe('angular4-shopping-recipe App', () => {
  let page: Angular4ShoppingRecipePage;

  beforeEach(() => {
    page = new Angular4ShoppingRecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
