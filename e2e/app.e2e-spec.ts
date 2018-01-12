import { SampleAngularAppPage } from './app.po';

describe('sample-angular-app App', () => {
  let page: SampleAngularAppPage;

  beforeEach(() => {
    page = new SampleAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
