# config-remark

_config-remark_ is a configuration preset for [remark-cli] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-remark

... or [yarn], like so:

    yarn add --dev @fundamend/config-remark

## Usage

In your [.remarkrc.js], import _config-remark_ and add it to the plugins array, like so:

```js
const config = require('@fundamend/config-remark');

const plugins = [fundamend];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

You can extend the imported preset by adding additional [plugins] to the plugin array or [configuration options] to the exported settings object, for example like this:

```js
const config = require('@fundamend/config-remark');
const autolinkHeadings = require('remark-autolink-headings');

const plugins = [fundamend, autolinkHeadings];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

Settings that already exist in the configuration preset will be overwritten.

## License

[MIT]

[configuration options]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[plugins]: https://github.com/remarkjs/remark/blob/master/doc/plugins.md
[remark-cli]: https://github.com/remarkjs/remark/tree/master/packages/remark-cli
[.remarkrc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[yarn]: https://yarnpkg.com/
