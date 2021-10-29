const frontmatter = require('remark-frontmatter');
const lint = require('@fundamend/config-remark-lint');
const retext = require('@fundamend/config-remark-retext');

const plugins = [[frontmatter, 'yaml'], lint, retext];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
