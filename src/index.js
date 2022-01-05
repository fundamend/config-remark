import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import lint from '@fundamend/config-remark-lint';
import retext from '@fundamend/config-remark-retext';

const plugins = [[frontmatter, 'yaml'], gfm, lint, retext];
const settings = {};

export default {
	plugins: plugins,
	settings: settings
};
