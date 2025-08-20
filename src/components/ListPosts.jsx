import { cn } from '@/utils'
import { useState } from 'react'

const Img = ({ src, alt, className, width, height, loading = 'lazy' }) => {
	return <img src={src || '/placeholder.svg'} alt={alt} className={className} loading={loading} />
}

const PostCard = ({ id, data, slug, readTime, isLarge = false }) => {
	const { heroImage, title, pubDate, category, description } = data
	return (
		<article
			id={id}
			className={cn(
				'group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200',
				'h-full flex flex-col min-w-0'
			)}
		>
			<a className='flex-1 flex flex-col' href={`/post/${slug}/`}>
				<div
					className={cn(
						'relative overflow-hidden flex-shrink-0',
						isLarge ? 'h-48 md:h-56' : 'h-48'
					)}
				>
					{heroImage && (
						<Img
							src={heroImage.src}
							alt={`img of ${title}`}
							className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 aspect-[3/1]'
							width={600}
							height={200}
							loading='lazy'
						/>
					)}
					<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
					<div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
						<div className='flex items-end justify-between'>
							<div className='flex flex-col gap-1'>
								<time className='text-sm font-medium opacity-90' dateTime={pubDate.toISOString()}>
									{pubDate.toLocaleDateString('en-us', {
										year: 'numeric',
										month: 'short',
										day: 'numeric'
									})}
								</time>
								<span className='text-xs opacity-75'>{readTime}</span>
							</div>
							<span className='text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded'>
								{category}
							</span>
						</div>
					</div>
				</div>
			</a>

			<div className='p-6 flex-1 flex flex-col'>
				<div className='space-y-3 flex-1'>
					<a
						className='block text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2'
						href={`/post/${slug}/`}
					>
						{title}
					</a>
					<p className='text-gray-600 dark:text-gray-300 line-clamp-3 text-sm leading-relaxed'>
						{description}
					</p>
				</div>

				<div className='mt-4 pt-4 border-t border-gray-100 dark:border-gray-800'>
					<a
						href={`/post/${slug}/`}
						className='inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group'
						aria-label={`Read ${title}`}
					>
						Read Post
						<svg
							className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							viewBox='0 0 24 24'
						>
							<path d='M7 17L17 7M17 7H7M17 7V17' />
						</svg>
					</a>
				</div>
			</div>
		</article>
	)
}

export default function ListPosts({ posts, FirstBig = false }) {
	const [selectedCategory, setSelectedCategory] = useState('View All')

	const subcategories = [
		'View All',
		...new Set(posts.map((post) => post.data.subcategory).filter(Boolean))
	]

	const filteredPosts =
		selectedCategory === 'View All'
			? posts
			: posts.filter((post) => post.data.subcategory === selectedCategory)

	return (
		<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden'>
			<div className='mb-8'>
				<h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Latest Posts</h2>
				<div className='w-12 h-1 bg-blue-600 rounded'></div>
			</div>

			<div className='flex flex-col xl:flex-row gap-8'>
				{/* Sidebar with subcategories */}
				<aside className='xl:w-64 w-full flex-shrink-0'>
					<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
						Subcategories
					</h3>
					<nav className='flex flex-wrap xl:flex-col gap-2 xl:overflow-visible'>
						{subcategories.map((subcategory) => (
							<button
								key={subcategory}
								onClick={() => setSelectedCategory(subcategory)}
								className={cn(
									'text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap',
									selectedCategory === subcategory
										? 'bg-purple-100 text-black'
										: 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
								)}
							>
								{subcategory}
							</button>
						))}
					</nav>
				</aside>

				{/* Posts grid */}
				<main className='flex-1 min-w-0 overflow-hidden'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>
						{filteredPosts.map((post, index) => {
							const isLarge = FirstBig && index === 0
							return (
								<div
									key={post.id}
									className={cn('min-w-0', isLarge && 'sm:col-span-2 lg:col-span-2 xl:col-span-2')}
								>
									<PostCard
										id={post.id}
										data={post.data}
										slug={post.slug}
										readTime={post.remarkPluginFrontmatter.minutesRead}
										isLarge={isLarge}
									/>
								</div>
							)
						})}
					</div>
				</main>
			</div>
		</div>
	)
}
