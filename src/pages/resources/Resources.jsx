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
		name: 'Documentaries & Films',
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
		name: 'Websites & Blogs',
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
		<div className='w-full max-w-7xl mx-auto p-4'>
			<div className='flex flex-col lg:flex-row gap-6'>
				<div className='lg:w-64 flex-shrink-0'>
					<div className='lg:sticky lg:top-4'>
						<h3 className='text-lg font-semibold mb-4 text-gray-900'>Psychology Resources</h3>
						<div className='flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0'>
							{resourcesData.map((category) => (
								<button
									key={category.id}
									onClick={() => setActiveCategory(category.id)}
									className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap lg:whitespace-normal text-left transition-colors ${
										activeCategory === category.id
											? 'bg-purple-100 text-purple-900'
											: 'text-gray-700 hover:bg-gray-100'
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className='flex-1'>
					<div className='bg-white rounded-xl shadow-lg border border-gray-200 p-6'>
						<div className='mb-6'>
							<h2 className='text-2xl font-bold text-gray-900 mb-2'>{currentCategory?.name}</h2>
							<div className='w-12 h-1 bg-purple-500 rounded-full'></div>
						</div>

						<div className='space-y-4 max-h-96 overflow-y-auto'>
							{currentCategory?.items.map((item, index) => (
								<div
									key={index}
									className='border-b border-gray-100 pb-4 last:border-b-0 last:pb-0'
								>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
										<div className='flex-1'>
											<h3 className='font-semibold text-gray-900 text-base leading-tight'>
												{item.title}
											</h3>
											{item.description && (
												<p className='text-gray-600 text-sm mt-1'>{item.description}</p>
											)}
											<div className='flex flex-wrap gap-3 mt-2 text-sm text-gray-500'>
												{item.author && <span>by {item.author}</span>}
												{item.year && <span>({item.year})</span>}
												{item.institution && <span>{item.institution}</span>}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='mt-6 pt-4 border-t border-gray-100'>
							<p className='text-sm text-gray-500'>
								Showing {currentCategory?.items.length} {currentCategory?.name.toLowerCase()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
