import { ThinkingOutLoudPage } from './app.po';

describe('thinking-out-loud App', () => {
  let page: ThinkingOutLoudPage;

  beforeEach(() => {
    page = new ThinkingOutLoudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
