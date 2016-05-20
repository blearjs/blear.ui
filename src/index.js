/**
 * UI 基类
 * @author ydr.me
 * @create 2016-04-19 11:08
 */



'use strict';

var Events = require('blear.classes.events');

var zIndex = 9999;

var UI = Events.extend({
    className: 'UI',
    constructor: function UI() {
        UI.parent(this);
    },

    destroy: function () {
        UI.parent.destroy(this);
    }
});

/**
 * 申请层级值
 * @returns {number}
 */
UI.zIndex = function () {
    return zIndex++;
};

UI.BUTTON_CLASS = 'dkbtn';
UI.TEXT_CLASS = 'dktext';
UI.INPUT_CLASS = 'dkipt';
UI.UI_CLASS = 'dkui';
require('./_style/base.css', 'css|style');
require('./_style/input.css', 'css|style');
require('./_style/button.css', 'css|style');
module.exports = UI;
