# angular-awesome

A set of useful Angular.js extensions implementing common design patterns for an awesome codebase.

[![Build Status](https://travis-ci.org/doshprompt/angular-awesome.svg?branch=master)](https://travis-ci.org/doshprompt/angular-awesome)
[![Code Climate](https://codeclimate.com/github/doshprompt/angular-awesome/badges/gpa.svg)](https://codeclimate.com/github/doshprompt/angular-awesome)
[![Test Coverage](https://codeclimate.com/github/doshprompt/angular-awesome/badges/coverage.svg)](https://codeclimate.com/github/doshprompt/angular-awesome/coverage)
[![Bower version](https://badge.fury.io/bo/angular-awesome.svg)](http://badge.fury.io/bo/angular-awesome)
[![GitHub license](https://img.shields.io/github/license/doshprompt/angular-awesome.svg)](https://github.com/doshprompt/angular-awesome/blob/master/LICENSE)

[![Dependency Status](https://david-dm.org/doshprompt/angular-awesome.svg?theme=shields.io)](https://david-dm.org/doshpromot/angular-awesome)
[![devDependency Status](https://david-dm.org/doshprompt/angular-awesome/dev-status.svg?theme=shields.io)](https://david-dm.org/angular-awesome#info=devDependencies)

---

## Table of Contents

- [Overview](#overview)
    - [Build Dependencies](#build-dependencies)
    - [Dear Developer](#dear-developer)
- [Getting Started](#getting-started)
    - [Quick Start](#quick-start)
    - [Wiring It Up](#wiring-it-up)
- [License](#license)

## Overview

### Build Dependencies

- node.js >= v0.10.x
- npm

### Dear Developer

##### tl;dr

```shell
$ npm install -d
$ npm test
```

##### Contributing

In lieu of a formal style guide, please take good care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code using [gulp.js](http://gulpjs.com/).
Please refer to this [document][commit-message-format] for a detailed explanation of git commit guidelines - source: [AngularJS](https://angualrjs.org)
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#

## Getting Started

### Quick Start

The easiest way to install the `ngAwesome` module is via [Bower](http://bower.io/):

```shell
bower install angular-awesome --save
```

Two other options are available:

- [Download the latest release](https://github.com/doshprompt/angular-awesome/archive/master.zip).
- Clone the repo: `git clone https://github.com/doshprompt/angular-awesome.git`.

You can then include `angular-awesome` after its dependencies,
[angular](https://github.com/angular/bower-angular) and

```html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-awesome/angular-awesome.js"></script>
```

### Wiring It Up

1. Include the required libraries
2. Ensure that you inject `ngAwesome` into your app by adding it to the dependency list.

```js
angular.module('myApp', ['ngAwesome']);
```

## License

The MIT License (MIT)

Copyright (c) 2015 Rahul Doshi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

[![Analytics](https://ga-beacon.appspot.com/UA-51468215-2/angular-awesome/README.md)](https://github.com/igrigorik/ga-beacon)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/doshprompt/angular-awesome/trend.png)](https://bitdeli.com/free "Bitdeli Badge")