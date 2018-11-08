# Deprecated

The Dust project is no longer maintained.

---

# [broccoli](https://github.com/joliss/broccoli)-dust [![Build Status](https://travis-ci.org/sindresorhus/broccoli-dust.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-dust)

> Precompile [Dust](https://github.com/linkedin/dustjs) templates

*Issues with the output should be reported on the Dust [issue tracker](https://github.com/linkedin/dustjs/issues).*


## Install

```
$ npm install --save-dev broccoli-dust
```


## Usage

```js
var dust = require('broccoli-dust');
tree = dust(tree, name);
```


## API

### dust(tree, [name])

#### name

Type: `function`<br>
Default: *Relative template path. Example: `templates/list.dust`*

You can override the default behavior by supplying a function which gets the relative path and is expected to return the name.

Example:

```js
tree = dust(tree, function (relativePath) {
	return 'tpl-' + relativePath;
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
