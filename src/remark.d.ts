import type { CollectionEntry } from 'astro:content'

// Define a type for the data your Remark plugins add.
// Replace `MyPluginFrontmatter` with the actual type if you know it,
// or just use `any` as a temporary fix.
interface RemarkPluginFrontmatter {
	// Add the properties your plugins create, for example:
	// readTime: string;
}

// Extend the default CollectionEntry type to include the plugin data.
export type PostWithPluginFrontmatter = CollectionEntry<'blog'> & {
	remarkPluginFrontmatter: RemarkPluginFrontmatter
}
