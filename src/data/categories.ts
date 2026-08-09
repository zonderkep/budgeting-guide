export const categoryGroups = [
  {
    name: 'Housing',
    note: '25-35% of take-home pay. Includes required costs for a roof over your head.',
    tone: 'yellow',
    items: ['Rent or mortgage', 'Property taxes', 'Homeowners or renters insurance', 'Homeowners association fees'],
  },
  {
    name: 'Savings',
    note: '10-15% of take-home pay for emergency funds or retirement.',
    tone: 'coral',
    items: ['Emergency fund', 'Retirement contributions', 'Home repair fund', 'Car repair fund', 'Other essential large future purchases'],
  },
  {
    name: 'Food',
    note: '10-15% of take-home pay. Includes essential spending for food.',
    tone: 'teal',
    items: ['Groceries'],
  },
  {
    name: 'Transportation',
    note: '10-15% of take-home pay. Includes required costs for getting around.',
    tone: 'teal',
    items: ['Car loans', 'Gas or fuel', 'Public transit', 'Repairs and maintenance', 'Parking and tolls', 'Rideshare or taxi', 'Auto insurance'],
  },
  {
    name: 'Insurance',
    note: '10-25% of take-home pay. Excludes auto and home insurance.',
    tone: 'blue',
    items: ['Health insurance', 'Life insurance', 'Disability insurance', 'Dental insurance', 'Vision insurance'],
  },
  {
    name: 'Utilities',
    note: '5-10% of take-home pay.',
    tone: 'yellow',
    items: ['Electricity', 'Water and sewer', 'Gas, oil, or propane', 'Phone', 'Internet', 'Trash and recycling'],
  },
  {
    name: 'Personal / Clothing',
    note: '5-15% of take-home pay.',
    tone: 'coral',
    items: ['Clothes and shoes', 'Haircuts', 'Toiletries', 'Personal spending', 'Work clothes or tools'],
  },
  {
    name: 'Health Care',
    note: '5-10% of take-home pay for out-of-pocket costs, copays, and prescriptions.',
    tone: 'teal',
    items: ['Doctor visits and copays', 'Prescriptions', 'Dental care', 'Vision care and glasses', 'Therapy or counseling', 'Medical supplies', 'Insurance deductibles'],
  },
  {
    name: 'Recreation / Entertainment',
    note: '5-10% of take-home pay.',
    tone: 'blue',
    items: ['Restaurants and takeout', 'Subscriptions and streaming services', 'Date nights', 'Trips', 'Books or games', 'Hobbies', 'Sports or events', 'Non-essential future purchases'],
  },
  {
    name: 'Miscellaneous',
    note: '5-10% of take-home pay for costs that do not fit elsewhere.',
    tone: 'yellow',
    items: ['Childcare', 'School costs', 'Pet care', 'Gifts and birthdays', 'Professional dues', 'Bank fees', 'Other household expenses'],
  },
] as const
