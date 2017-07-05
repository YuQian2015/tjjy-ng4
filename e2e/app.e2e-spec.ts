import { TjjyNg4Page } from './app.po';

describe('tjjy-ng4 App', () => {
  let page: TjjyNg4Page;

  beforeEach(() => {
    page = new TjjyNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
