export const site = {
  name: 'Money, Step by Step',
  tagline: 'A practical system for steady money.',
}

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/budget/', label: 'Budget guide' },
  { href: '/money-priorities/', label: 'Money priorities' },
  { href: '/references/', label: 'Resources' },
]

export const budgetSections = [
  {
    label: 'Get started',
    items: [
      { href: '/setup/', label: 'Set up accounts', short: 'Accounts' },
      { href: '/categories/', label: 'Plan your budget', short: 'Plan' },
    ],
  },
  {
    label: 'Keep it working',
    items: [
      { href: '/day-to-day/', label: 'Use your budget', short: 'Use' },
      { href: '/month-close/', label: 'Monthly review', short: 'Review' },
      { href: '/evolve/', label: 'Improve your budget', short: 'Improve' },
    ],
  },
]

export const priorityStages = [
  'Create stability',
  'Build a safety net',
  'Claim employer benefits',
  'Reduce costly debt',
  'Prepare for retirement',
  'Fund other goals',
]
