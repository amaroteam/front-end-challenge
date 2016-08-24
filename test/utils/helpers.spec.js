import expect from 'expect';

import * as helpers from 'utils/helpers';

describe('Helpers', () => {
  it('parseMoney should return the expected value', () => {
    expect(helpers.parseMoney('R$ 154,99')).toEqual(154.99);
  });

  it('formatMoney should return the expected value', () => {
    expect(helpers.formatMoney(154.99)).toEqual('R$ 154,99');
  });

  it('round should return the expected value', () => {
    expect(helpers.round(154.99000221)).toEqual(154.99);
    expect(helpers.round(89.99900221)).toEqual(90);
  });

  it('shouldComponentUpdate should return the expected value', () => {
    expect(helpers.shouldComponentUpdate({
      props: {},
      state: { value: 1 },
      context: {}
    }, {}, { value: 1 }, {})).toEqual(false);

    expect(helpers.shouldComponentUpdate({
      props: {},
      state: { value: 1 },
      context: {}
    }, {}, { value: 2 }, {})).toEqual(true);
  });

  it('createReducer should return the expected value', () => {
    expect(typeof helpers.createReducer({})).toEqual('function');
  });

  it('param should return the expected value', () => {
    expect(helpers.param({ a: 1, b: 2 })).toEqual('a=1&b=2');
  });

  it('deparam should return the expected value', () => {
    expect(helpers.deparam('a=1&b=2')).toEqual({ a: '1', b: '2' });
  });

  it('datasetToObject should return the expected value', () => {
    const el = document.createElement('span');
    el.setAttribute('data-id', 2);

    expect(helpers.datasetToObject(el)).toEqual({ id: '2' });
  });
});
