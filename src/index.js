import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import lint from '@fundamend/config-remark-lint';
import retext from '@fundamend/config-remark-retext';

const plugins = [[frontmatter, 'yaml'], gfm, lint, retext];
const settings = {
	// Settings for https://github.com/remarkjs/remark/tree/main/packages/remark-stringify
	// Some of these interfere with remark lint plugins
	bullet: '-',
	emphasis: '_',
	listItemIndent: 'one',
	tightDefinitions: true
};

export default {
	plugins: plugins,
	settings: settings
};
