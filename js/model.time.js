"use strict";

export let timeModel = {
    updateTime: function(time) {
        this.time = new Date();
    },
    getHours: function() {
        return this.time.getHours();
    },
    getMinutes: function() {
        return this.time.getMinutes();
    },
    getSeconds: function() {
        return this.time.getSeconds();
    },
}