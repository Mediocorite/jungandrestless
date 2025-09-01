// List of categories for blog posts
import { z } from 'astro:content'

export const CATEGORIES = {
	Resources: [],
	'Research Review': [
		'Social Psychology',
		'Health Psychology',
		'Neuropsychology',
		'Cognitive Psychology',
		'Developmental Psychology',
		'Clinical Psychology',
		'Behavioral Psychology'
	],
	'Ethical Considerations': [],
	'Personal Reflections': []
} as const

export type CategoriesMap = typeof CATEGORIES

const categoryNames = Object.keys(CATEGORIES) as [keyof CategoriesMap, ...(keyof CategoriesMap)[]]
export const CategoryEnum = z.enum(categoryNames)

const allSubcategoryNames = Object.values(CATEGORIES).flat() as string[]

// If there are no subcategories defined at all, provide a fallback for z.enum
export const AllSubcategoriesEnum =
	allSubcategoryNames.length > 0
		? z.enum(allSubcategoryNames as [string, ...string[]]) // Ensure at least one element for z.enum
		: z.never() // If no subcategories exist anywhere, this field should never be valid
