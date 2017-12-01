import { SolitairePage } from './app.po';

describe('solitaire App', function() {
  let page: SolitairePage;

  beforeEach(() => {
    page = new SolitairePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
