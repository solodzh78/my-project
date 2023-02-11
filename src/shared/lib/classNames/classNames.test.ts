import { classNames } from './classNames';

describe('classNames', () => {
  test('One class', () => {
    expect(classNames(['className'])).toBe('className');
  });
  test('Classes with mods', () => {
    expect(classNames(
      ['className', 'className1'],
      { class1: true, class2: false, class3: undefined },
    ))
      .toBe('className className1 class1');
  });
});
