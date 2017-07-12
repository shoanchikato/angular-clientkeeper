import { CkfrontendPage } from './app.po';

describe('ckfrontend App', () => {
  let page: CkfrontendPage;

  beforeEach(() => {
    page = new CkfrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
