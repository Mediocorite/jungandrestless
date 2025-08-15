import { defineCollection, z } from 'astro:content'
import { AllSubcategoriesEnum, CategoryEnum } from '@/data/categories'

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			tags: z.array(z.string()),
			category: CategoryEnum,
			subcategory: AllSubcategoriesEnum.optional()
		})
})

export const collections = { blog }
