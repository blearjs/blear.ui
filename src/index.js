/**
 * UI 基类
 * @author ydr.me
 * @create 2016-04-19 11:08
 */



'use strict';

var Events = require('blear.classes.events');
var object = require('blear.utils.object');

var zIndex = 9999;

var UI = Events.extend({
    className: 'UI',
    constructor: function UI() {
        UI.parent(this);
    },

    destroy: function () {
        UI.invoke('destroy', this);
    }
});

/**
 * 申请层级值
 * @returns {number}
 */
UI.zIndex = function () {
    return zIndex++;
};

/**
 * @function getOption
 * @param val
 */

/**
 * 生成一个 get options 方法
 * @param ui
 * @param optionsName
 * @returns {getOption}
 */
UI.buildGetOption = function (ui, optionsName) {
    return function getOption(key) {
        if (!key) {
            return ui[optionsName];
        }

        return object.get(ui[optionsName], key);
    };
};

/**
 * @function setOption
 * @param key
 * @param val
 */

/**
 * 生成一个 set options 方法
 * @param ui
 * @param optionsName
 * @returns {setOption}
 */
UI.buildSetOption = function (ui, optionsName) {
    return function setOption(key, val) {
        object.set(ui[optionsName], key, val);
    };
};

UI.BUTTON_CLASS = 'blearbtn';
UI.TEXT_CLASS = 'bleartext';
UI.INPUT_CLASS = 'bleaript';
UI.UI_CLASS = 'blearui';

require('./_style/base.css', 'css|style');
require('./_style/input.css', 'css|style');
require('./_style/button.css', 'css|style');

module.exports = UI;
