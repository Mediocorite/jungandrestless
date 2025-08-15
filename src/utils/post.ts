import { getCollection } from 'astro:content'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getSubcategories = async (category: string) => {
	const posts = await getCollection('blog')
	const subcategories = new Set<string>()
	posts.forEach((post) => {
		if (post.data.category.toLowerCase() === category.toLowerCase()) {
			if (!post.data.subcategory) return
			subcategories.add(post.data.subcategory.toLowerCase())
		}
	})
	return Array.from(subcategories)
}

export const getPosts = async (max?: number, category?: string, subcategory?: string) => {
	const posts = (await getCollection('blog'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)

	const currentPosts = await Promise.all(
		posts.map(async (post) => {
			const { remarkPluginFrontmatter } = await post.render()
			return {
				...post,
				remarkPluginFrontmatter
			}
		})
	)

	if (!category && !subcategory) {
		return currentPosts
	}
	return currentPosts.filter((post) => {
		const postCategory = post.data.category.toLowerCase()
		const postSubcategory = post.data.subcategory?.toLowerCase() || ''
		return (
			(!category || postCategory === category.toLowerCase()) &&
			(!subcategory || postSubcategory === subcategory.toLowerCase())
		)
	})
}

export const getTags: () => Promise<string[]> = async () => {
	const posts = await getCollection('blog')
	const tags = new Set<string>()
	posts.forEach((post) => {
		post.data.tags.forEach((tag) => {
			tags.add(tag.toLowerCase())
		})
	})
	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()
	return posts.filter((post) => {
		return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
	})
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}
