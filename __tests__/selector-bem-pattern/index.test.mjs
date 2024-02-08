import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import stylelint from 'stylelint';

import config from '../../index.js';

const validCss = readFileSync('./__tests__/selector-bem-pattern/valid.css', 'utf-8');
const invalidCss = readFileSync('./__tests__/selector-bem-pattern/invalid.css', 'utf-8');

describe('stylelint-selector-bem-pattern', () => {
	describe('flags no warnings with valid css', () => {
		let result;

		beforeEach(async () => {
			result = await stylelint.lint({
				code: validCss,
				config,
			});
		});

		it('has no errors', () => {
			assert.equal(result.errored, false);
		});

		it('flags no warnings', () => {
			assert.equal(result.results[0].warnings.length, 0);
		});

		// Useful for logging when unexpected warning text is flagged.
		it('no warning text', () => {
			assert.deepEqual(
				result.results[0].warnings.map((w) => w.text),
				[],
			);
		});

		// Useful for logging when unexpected rules are flagged.
		it('no rules flagged', () => {
			assert.deepEqual(
				result.results[0].warnings.map((w) => w.rule),
				[],
			);
		});
	});

	describe('flags warnings with invalid css', () => {
		let result;

		beforeEach(async () => {
			result = await stylelint.lint({
				code: invalidCss,
				config,
			});
		});

		it('includes an error', () => {
			assert.equal(result.errored, true);
		});

		it('flags warnings', () => {
			assert.equal(result.results[0].warnings.length, 6);
		});

		it('correct warning text', () => {
			assert.deepEqual(
				result.results[0].warnings.map((w) => w.text),
				[
					'Invalid utility selector ".utilityName" (plugin/selector-bem-pattern)',
					`Invalid custom property name "--whatever": a component's custom properties must start with the component name (plugin/selector-bem-pattern)`,
					'Invalid component selector ".component-name" (plugin/selector-bem-pattern)',
					'Invalid component selector ".component-name--modifier-name" (plugin/selector-bem-pattern)',
					'Invalid component selector ".component-name__descendent-name" (plugin/selector-bem-pattern)',
					'Invalid component selector ".component-name.is-state-of-component" (plugin/selector-bem-pattern)',
				],
			);
		});

		it('correct rule flagged', () => {
			assert.deepEqual(
				result.results[0].warnings.map((w) => w.rule),
				[
					'plugin/selector-bem-pattern',
					'plugin/selector-bem-pattern',
					'plugin/selector-bem-pattern',
					'plugin/selector-bem-pattern',
					'plugin/selector-bem-pattern',
					'plugin/selector-bem-pattern',
				],
			);
		});

		it('corrects severity flagged', () => {
			assert.equal(result.results[0].warnings[0].severity, 'error');
		});

		it('corrects line number', () => {
			assert.equal(result.results[0].warnings[0].line, 7);
		});

		it('corrects column number', () => {
			assert.equal(result.results[0].warnings[0].column, 1);
		});
	});
});

// describe('flags warnings with invalid css', () => {
// 	it('flags six warnings', () => {
// 		return result.then((data) => expect(data.results[0].warnings).toHaveLength(6));
// 	});

// 	it('correct warning text', () => {
// 		return result.then((data) =>
// 			expect(data.results[0].warnings[0].text).toBe(
// 				'Invalid utility selector ".utilityName" (plugin/selector-bem-pattern)',
// 			),
// 		);
// 	});

// 	it('correct rule flagged', () => {
// 		return result.then((data) =>
// 			expect(data.results[0].warnings[0].rule).toBe('plugin/selector-bem-pattern'),
// 		);
// 	});

// 	it('correct severity flagged', () => {
// 		return result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error'));
// 	});

// 	it('correct line number', () => {
// 		return result.then((data) => expect(data.results[0].warnings[0].line).toBe(7));
// 	});

// 	it('correct column number', () => {
// 		return result.then((data) => expect(data.results[0].warnings[0].column).toBe(1));
// 	});
// });
