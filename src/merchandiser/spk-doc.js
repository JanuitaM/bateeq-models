'use strict'

var BaseModel = require('model-toolkit').BaseModel;
var SPKItem = require('./spk-item');

module.exports = class SPKDoc extends BaseModel {
    constructor(source) {
        super('spk-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.reference = '';
        this.expeditionDocumentId = {};
        this.expeditionDocument = {};
        this.sourceId = {};
        this.source = {};
        this.destinationId = {};
        this.destination = {};
        this.items = [];
        this.isDraft = false;
        this.packingList = '';
        this.password = '';
        this.isReceived = false;
        this.weight = 0;
        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new SPKItem(item));
        }
        this.items = _items;
    }
}