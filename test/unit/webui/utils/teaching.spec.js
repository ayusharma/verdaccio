import makeAPIcall from './add';

jest.mock('request', function () {
    return function (url, resolver) {
        resolver({error: 'error'}, {message: 'dfdfdf'});
    }
});

global.console.log = jest.fn();

test('makeAPICall', (done) => {
    // const hello = (a, b, c) => {
    //     expect(a).toEqual({error: 'error'});
    //     expect(b).toEqua  l();
    //     expect(c).toEqual();
    //     done();
    // }
    makeAPIcall();
    expect(global.console.log).toBeCalledWith();
});