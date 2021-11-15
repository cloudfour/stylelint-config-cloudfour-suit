'use strict';

module.exports = {
	plugins: ['stylelint-selector-bem-pattern'],
	extends: 'stylelint-config-cloudfour',
	rules: {
		'plugin/selector-bem-pattern': {
			preset: 'suit',
			utilitySelectors: '^.u-(sm-|md-|lg-|xl-)?([a-z0-9]*[a-zA-Z0-9]*)',
		},
	},
};
