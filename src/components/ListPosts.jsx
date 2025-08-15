'use client'
import { useState } from 'react'
import { cn } from '@/utils'
import PostCard from './PostCard'

export default function ListPosts({ posts, FirstBig = false }) {
	const [subcategories] = useState(posts.map((e) => e.data.subcategory).filter(Boolean))
	const [activeSubCategory, setActiveSubCategory] = useState(subcategories[0])
	const [renderedPosts, setRenderedPosts] = useState(posts)

	function applyFilter(subcategory) {
		if (subcategory === 'View all') {
			setRenderedPosts(posts)
		} else {
			let filteredPosts = posts.filter((post) => post.data.subcategory === subcategory)
			setRenderedPosts(filteredPosts)
		}
		setActiveSubCategory(subcategory)
	}

	return (
		<div className='flex flex-col md:flex-row'>
			{subcategories.length > 1 && (
				<div className='mb-8 mt-3'>
					<h3 className='text-sm font-medium text-gray-700 mb-3'>Subcategory</h3>
					<ul className='space-y-1'>
						{subcategories.map((e) => (
							<li key={e}>
								<button
									className={cn(
										'w-full text-left px-3 py-2 text-sm rounded-l transition-colors',
										activeSubCategory === e
											? 'text-purple-700 bg-purple-50'
											: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
									)}
									onClick={() => {
										applyFilter(e)
									}}
								>
									{e}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
			<div className='flex gap-5'>
				<section
					className={cn(
						'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-3',
						FirstBig && 'md:[&>*:first-child]:col-span-2'
					)}
				>
					{renderedPosts.map((post) => {
						return (
							<PostCard
								key={post.id}
								id={post.id}
								data={post.data}
								slug={post.slug}
								readTime={post.remarkPluginFrontmatter.minutesRead}
							/>
						)
					})}
				</section>
			</div>
		</div>
	)
}
