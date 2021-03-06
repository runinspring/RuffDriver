'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    /**
     * @param {Object} inputs A map of assigned interfaces according to `driver.json`.
     * @param {Object} context Context of this instance to attach.
     * @param {string} context.id ID of the device.
     * @param {string} context.model Model of the device.
     * @param {Object} context.args A map of device arguments.
     * @param {Function} callback If the third parameter is added, it's the callback for asyncrhonous attaching.
     */
    attach: function (inputs, context/*, callback */) {
        // Get assigned GPIO interface and set property `_gpio`.
        // See https://ruff.io/zh-cn/api/gpio.html for more information about GPIO interfaces.
        this._pwm = inputs['pwm'];
    },
    exports: {
        setAngle: function (angle, callback) {
            // console.log("angle:", angle);
            //0C--1ms--1/20=0.05
            //135C--1.5ms ==1.5/20=0.075
            //270C--2ms==2/20=0.1
            var duty = 0.05 + 0.05 * angle / 270;
            this._pwm.setDuty(duty);

        },

    }
});
