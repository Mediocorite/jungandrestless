'use client'

import { useState } from 'react'

const resourcesData = [
	{
		id: 'books',
		name: 'Recommended Books',
		items: [
			{ title: 'Emotional Intelligence', author: 'Daniel Goleman', year: '1995' },
			{ title: 'The Lucifer Effect', author: 'Philip Zimbardo', year: '2007' },
			{ title: 'The man who mistook his wife for a hat', author: 'Oliver Sacks', year: '1985' },
			{ title: 'The interpretation of dreams', author: 'Sigmund Freud', year: '1900' },
			{
				title: 'Mistakes Were Made (but Not by Me) Third Edition',
				author: 'Carol Tavris',
				year: '2007',
				description: 'Why We Justify Foolish Beliefs, Bad Decisions, and Hurtful Acts'
			},
			{
				title: 'Noise: A Flaw in Human Judgement',
				author: 'Daniel Kahneman, Olivier Sibony, and Cass R. Sunstein',
				year: '2021'
			},
			{
				title: 'The Body Keeps the Score',
				author: 'Bessel Van Der Kolk',
				year: '2014',
				description: 'Mind, Brain and Body in the Transformation of Trauma'
			}
		]
	},
	{
		id: 'courses',
		name: 'Online Courses',
		items: [
			{
				title: 'Introduction to psychology',
				institution: 'Yale University',
				description: 'Coursera'
			},
			{ title: 'Social Psychology', institution: 'Wesleyan University', description: 'Coursera' },
			{
				title: 'Psychological first aid',
				institution: 'Johns Hopkins University',
				description: 'Coursera'
			},
			{
				title: 'Positive Psychology',
				institution: 'University of North Carolina',
				description: 'Coursera'
			},
			{
				title: 'Behaviour Change Interventions',
				institution: 'University College London',
				description: 'FutureLearn'
			},
			{
				title: 'The science of sleep and dreams',
				institution: 'New Scientist Academy',
				description: 'FutureLearn'
			}
		]
	},
	{
		id: 'documentaries',
		name: 'Documentaries and Films',
		items: [
			{
				title: 'Three Identical Strangers',
				year: '2018',
				description: 'Explores triplets separated at birth and psychological implications'
			},
			{
				title: 'A Beautiful Mind',
				year: '2001',
				description: "John Nash's struggle with schizophrenia"
			},
			{ title: 'Good Will Hunting', year: '1997', description: 'Young genius encounters therapy' },
			{
				title: 'Silver Linings Playbook',
				year: '2012',
				description: 'Characters with bipolar disorder and OCD'
			},
			{
				title: 'Girl, Interrupted',
				year: '1999',
				description: 'Experience in a psychiatric hospital'
			},
			{
				title: 'Black Swan',
				year: '2010',
				description: 'Professional ballet and mental health impact'
			}
		]
	},
	{
		id: 'websites',
		name: 'Websites and Blogs',
		items: [
			{ title: 'PsychPORT' },
			{ title: 'National Institute of Mental Health' },
			{ title: 'Psych Central' },
			{ title: 'Psychology Today' },
			{ title: 'Association of Psychological Science' },
			{ title: 'PsyBlog' },
			{ title: 'Psychreg' },
			{ title: 'Notes from Two Scientific Psychologists' }
		]
	},
	{
		id: 'journals',
		name: 'Academic Journals',
		items: [
			{ title: 'BPS Journals' },
			{ title: 'Frontiers in Psychology' },
			{ title: 'American Psychologist' },
			{ title: 'Journal of Abnormal Psychology' },
			{ title: 'Journal of Applied Psychology' },
			{ title: 'Psychological Review' },
			{ title: 'Clinical Psychology Review' },
			{ title: 'Developmental Psychology' }
		]
	},
	{
		id: 'volunteering',
		name: 'Volunteer Opportunities (UK)',
		items: [
			{ title: 'British Red Cross', description: 'Psychosocial Reserve Volunteer' },
			{ title: 'Mind' },
			{ title: 'Anxiety UK' },
			{ title: 'NHS Trusts' },
			{ title: 'We are Rethink Mental Illness' },
			{ title: 'Scottish Association of mental health' },
			{ title: 'Action in Mind' },
			{ title: 'Richmond fellowship' }
		]
	},
	{
		id: 'apps',
		name: 'Mental Health Apps',
		items: [
			{ title: 'Calm Harm' },
			{ title: 'Catch it' },
			{ title: 'BlueIce' },
			{ title: 'My cognition home' },
			{ title: 'MindShift' }
		]
	},
	{
		id: 'tips',
		name: 'Study Tips',
		items: [
			{
				title: "Understand, Don't Just Memorize",
				description: 'Grasp underlying principles and applications'
			},
			{ title: 'Regular Revision', description: 'Review notes and readings frequently' },
			{
				title: 'Active Note-Taking',
				description: 'Engage with material by noting questions and examples'
			},
			{
				title: 'Apply Psychological Learning Techniques',
				description: 'Use spaced repetition and self-testing'
			},
			{ title: 'Group Study Sessions', description: 'Discuss with peers to deepen understanding' },
			{ title: 'Real-World Application', description: 'Connect theories with practical examples' },
			{
				title: 'Practice Critical Thinking',
				description: 'Analyze and evaluate different viewpoints'
			},
			{
				title: 'Self-Care',
				description: 'Practice self-care when content becomes emotionally taxing'
			}
		]
	}
]

export default function PsychologyResourcesCard() {
	const [activeCategory, setActiveCategory] = useState('books')

	const currentCategory = resourcesData.find((cat) => cat.id === activeCategory)

	return (
		<div className='w-full max-w-full px-3 sm:px-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto'>
			<div className='flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6'>
				<div className='w-full lg:w-64 flex-shrink-0'>
					<div className='lg:sticky lg:top-4'>
						<h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100'>
							Psychology Resources
						</h3>
						<div className='flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-3 sm:-mx-4 lg:mx-0 px-3 sm:px-4 lg:px-0'>
							{resourcesData.map((category) => (
								<button
									key={category.id}
									onClick={() => setActiveCategory(category.id)}
									className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap lg:whitespace-normal text-left transition-colors flex-shrink-0 ${
										activeCategory === category.id
											? 'bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100'
											: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className='flex-1 min-w-0 w-full'>
					<div className='w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-6'>
						<div className='mb-4 sm:mb-6'>
							<h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 break-words'>
								{currentCategory?.name}
							</h2>
							<div className='w-12 h-1 bg-purple-500 rounded-full'></div>
						</div>

						<div className='space-y-3 sm:space-y-4 max-h-none sm:max-h-80 md:max-h-96 overflow-y-visible sm:overflow-y-auto'>
							{currentCategory?.items.map((item, index) => (
								<div
									key={index}
									className='border-b border-gray-100 dark:border-gray-800 pb-3 sm:pb-4 last:border-b-0 last:pb-0'
								>
									<div className='flex flex-col gap-1 sm:gap-2'>
										<div className='flex-1 min-w-0 w-full'>
											<h3 className='font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-tight break-words hyphens-auto'>
												{item.title}
											</h3>
											{item.description && (
												<p className='text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1 break-words hyphens-auto leading-relaxed'>
													{item.description}
												</p>
											)}
											<div className='flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 lg:gap-3 mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
												{item.author && (
													<span className='break-words hyphens-auto'>by {item.author}</span>
												)}
												{item.year && <span className='flex-shrink-0'>({item.year})</span>}
												{item.institution && (
													<span className='break-words hyphens-auto'>{item.institution}</span>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800'>
							<p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
								Showing {currentCategory?.items.length} {currentCategory?.name.toLowerCase()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
