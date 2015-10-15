'use strict';
var Filter = require('broccoli-filter');
var dust = require('dustjs-linkedin');

function DustFilter(inputTree, name) {
	if (!(this instanceof DustFilter)) {
		return new DustFilter(inputTree, name);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.name = name;
}

DustFilter.prototype = Object.create(Filter.prototype);
DustFilter.prototype.constructor = DustFilter;

DustFilter.prototype.extensions = ['dust'];
DustFilter.prototype.targetExtension = 'js';

DustFilter.prototype.processString = function (str, relativePath) {
	var finalName = typeof this.name === 'function' && this.name(relativePath) || relativePath;
	return dust.compile(str, finalName);
};

module.exports = DustFilter;
