/**
 * @vitest-environment jsdom
 */

import { expect, it, describe } from 'vitest';
import transformProps from '../src/props';

describe('props', () => {
  it('should work with autofocus', () => {
    expect(transformProps('div', {
      autofocus: true,
    }).autoFocus).toBe(true);
  });

  it('should work with autoplay', () => {
    expect(transformProps('div', {
      autoplay: true,
    }).autoPlay).toBe(true);
  });

  it('should work with classname', () => {
    expect(transformProps('div', {
      classname: 'class',
    }).className).toBe('class');
  });

  it('should work with crossorigin', () => {
    expect(transformProps('div', {
      crossorigin: 'xxx',
    }).crossOrigin).toBe('xxx');
  });

  it('should work with maxlength', () => {
    expect(transformProps('div', {
      maxlength: '10',
    }).maxLength).toBe('10');
  });

  it('should work with inputmode', () => {
    expect(transformProps('div', {
      inputmode: 'numeric',
    }).inputMode).toBe('numeric');
  });

  it('should work with dangerouslySetInnerHTML', () => {
    expect(
      transformProps('div', {
        dangerouslySetInnerHTML: { __html: 'xxx' },
      }).dangerouslySetInnerHTML,
    ).toEqual({
      __html: 'xxx',
    });
  });
});
