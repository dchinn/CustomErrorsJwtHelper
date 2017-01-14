import { CustomErrorJwtHelperPage } from './app.po';

describe('custom-error-jwt-helper App', function() {
  let page: CustomErrorJwtHelperPage;

  beforeEach(() => {
    page = new CustomErrorJwtHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
