'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should precompile Dust templates', function () {
	assert(/fixture\.dust/.test(fs.readFileSync('temp/fixture.js', 'utf8')));
});
