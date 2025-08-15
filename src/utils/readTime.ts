import { toString } from 'mdast-util-to-string'
import { readingTime } from 'reading-time-estimator'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export default function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const readingStats = readingTime(textOnPage)
		// readingStats.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		data.astro.frontmatter.minutesRead = readingStats.text
	}
}
