import App from './App.js';

describe('App', () => {
  it('Deve aparecer 12 cards', () => {
    const el = App();
    console.log(el.querySelectorAll('.card').length);
    expect(el instanceof HTMLElement).toBe(true);
    expect(el.querySelectorAll('.card').length).toBe(12);
  });
});
