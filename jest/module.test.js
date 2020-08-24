import * as module from './module';
console.log(module)
describe('module', () => {
    let barSpy;

    beforeEach(() => {
        barSpy = jest.spyOn(
            module,
            'bar'
        ).mockImplementation(jest.fn());
    });


    afterEach(() => {
        barSpy.mockRestore();
    });

    it('foo', () => {
        console.log(jest.isMockFunction(module.bar)); // outputs true

        module.bar.mockReturnValue('fake bar');

        console.log(module.bar()); // outputs 'fake bar';

        expect(module.foo(module.bar)).toEqual('I am foo. bar is fake bar');
        /**
         * does not work! we get the following:
         *
         *  Expected value to equal:
         *    "I am foo. bar is fake bar"
         *  Received:
         *    "I am foo. bar is bar"
         */
    });
});