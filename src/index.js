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
 * 生成一个 get options 方法
 * @param ui
 * @param optionsName
 * @param key
 * @returns {*}
 */
UI.getOptions = function (ui, optionsName, key) {
    if (!key) {
        return ui[optionsName];
    }

    return object.get(ui[optionsName], key);
};


/**
 * set options 方法
 * @param ui
 * @param optionsName
 * @param key
 * @param val
 */
UI.setOptions = function (ui, optionsName, key, val) {
    object.set(ui[optionsName], key, val);
};

UI.BUTTON_CLASS = 'blearbtn';
UI.TEXT_CLASS = 'bleartext';
UI.INPUT_CLASS = 'bleaript';
UI.UI_CLASS = 'blearui';

require('./_style/base.css', 'css|style');
require('./_style/input.css', 'css|style');
require('./_style/button.css', 'css|style');

module.exports = UI;
