import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('truncates the given text to 10 by default', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghij...');
  });

  it('truncates the given text to the given limit', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('abcdefghijklmnopqrstuvwxyz', 5)).toBe('abcde...');
  });
});
