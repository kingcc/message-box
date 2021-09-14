import {MessageBox} from '../message-box.js';

const assert = chai.assert;

suite('message-box', () => {
  test('is defined', () => {
    const el = document.createElement('message-box');
    assert.instanceOf(el, MessageBox);
  });
});
