import frontmatter from 'remark-frontmatter';
import lint from '@fundamend/config-remark-lint';
import retext from '@fundamend/config-remark-retext';

const plugins = [[frontmatter, 'yaml'], lint, retext];
const settings = {};

export default {
	plugins: plugins,
	settings: settings
};
