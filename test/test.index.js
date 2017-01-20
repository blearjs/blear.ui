/**
 * karma 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var UI = require('../src/index.js');

describe('测试文件', function () {
    it('new', function () {
        var ui = new UI();

        ui.destroy();
    });

    it('static', function () {
        expect(UI.BUTTON_CLASS).toBe('blearbtn');
        expect(UI.TEXT_CLASS).toBe('bleartext');
        expect(UI.INPUT_CLASS).toBe('bleaript');
        expect(UI.UI_CLASS).toBe('blearui');
    });

    it('.zIndex', function () {
        var zIndex1 = UI.zIndex();
        var zIndex2 = UI.zIndex();

        expect(zIndex1).toBeLessThan(zIndex2);
    });

    it('.buildGetOption', function () {
        var ui = {
            options: {
                a: {
                    b: 1
                }
            }
        };

        var getOption = UI.buildGetOption(ui, 'options');

        expect(getOption()).toBe(ui.options);
        expect(getOption('a.b')).toBe(1);
    });

    it('.buildSetOption', function () {
        var ui = {
            options: {
                a: {
                    b: 1
                }
            }
        };

        var getOption = UI.buildGetOption(ui, 'options');
        var setOption = UI.buildSetOption(ui, 'options');

        expect(getOption('a.b')).toBe(1);
        setOption('a.b', 2);
        expect(getOption('a.b')).toBe(2);
        setOption('a.b.c', 3);
        expect(getOption('a.b.c')).toBe(3);
    });
});
