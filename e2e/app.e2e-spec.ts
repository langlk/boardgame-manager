import { BoardgameManagerPage } from './app.po';

describe('boardgame-manager App', () => {
  let page: BoardgameManagerPage;

  beforeEach(() => {
    page = new BoardgameManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
