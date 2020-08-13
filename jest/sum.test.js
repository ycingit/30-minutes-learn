const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toStrictEqual({one: 1, two: 2});
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('两个浮点数字相加', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('the shopping list has beer on it', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });


  test('foreach', () => {
    function forEach(items, callback) {
        for (let index = 0; index < items.length; index++) {
          callback(items[index]);
        }
      }

      const mockCallback = jest.fn(x => 42 + x);
      forEach([0, 1], mockCallback);
      
      // 此 mock 函数被调用了两次
      expect(mockCallback.mock.calls.length).toBe(2);
      
      // 第一次调用函数时的第一个参数是 0
      expect(mockCallback.mock.calls[0][0]).toBe(0);
      
      // 第二次调用函数时的第一个参数是 1
      expect(mockCallback.mock.calls[1][0]).toBe(1);
      
      // 第一次函数调用的返回值是 42
      expect(mockCallback.mock.results[0].value).toBe(42);
  });
