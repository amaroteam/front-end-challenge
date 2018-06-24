import * as actions from '../../source/actions/cartAction';

describe('Actions', () => {
	test('should create an action to update cart', () => {
		const expectedAction = {type: 'UPDATE_CART', cart: undefined};
		expect(actions.UpdateCart()).toEqual(expectedAction);
	});
});
