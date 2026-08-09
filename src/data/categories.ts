export const categoryGroups = [
  {
    name: 'Income',
    note: 'List the money that you expect to receive.',
    tone: 'yellow',
    items: ['Paychecks', 'Benefits', 'Child support received', 'Pension or retirement income', 'Side work', 'Other regular income'],
  },
  {
    name: 'Home',
    note: 'Start with the costs that keep your home safe and working.',
    tone: 'blue',
    items: ['Rent or mortgage', 'Property tax', 'Home or renters insurance', 'Homeowners association fee', 'Electricity', 'Water and sewer', 'Gas, oil, or propane', 'Trash and recycling', 'Internet', 'Phone', 'Repairs and maintenance', 'Household supplies', 'Furniture or appliances', 'Lawn care or pest control'],
  },
  {
    name: 'Food',
    note: 'Keep food at home separate from optional meals out.',
    tone: 'coral',
    items: ['Groceries', 'Work or school lunches', 'Restaurants', 'Takeout or delivery', 'Coffee and snacks', 'Food for guests'],
  },
  {
    name: 'Transportation',
    note: 'Include regular costs and future repairs.',
    tone: 'teal',
    items: ['Car payment', 'Fuel', 'Public transit', 'Parking and tolls', 'Rideshare or taxi', 'Routine maintenance', 'Repairs', 'Tires', 'Registration and inspection', 'Vehicle tax', 'Bicycle maintenance'],
  },
  {
    name: 'Health and insurance',
    note: 'Plan for care, premiums, and costs that insurance does not pay.',
    tone: 'blue',
    items: ['Health insurance', 'Dental insurance', 'Vision insurance', 'Auto insurance', 'Life insurance', 'Disability insurance', 'Doctor visits and copays', 'Prescriptions', 'Dental care', 'Vision care and glasses', 'Therapy or counseling', 'Medical supplies', 'Over-the-counter medicine', 'Insurance deductibles'],
  },
  {
    name: 'Family, school, and pets',
    note: 'Add only the lines that apply to your household.',
    tone: 'yellow',
    items: ['Childcare', 'Child support paid', 'School costs', 'Sports and activities', 'Family support', 'Pet food', 'Pet medicine', 'Veterinary care', 'Pet grooming or boarding'],
  },
  {
    name: 'Debt',
    note: 'Give each required payment its own clear line.',
    tone: 'coral',
    items: ['Credit cards', 'Student loans', 'Medical debt', 'Personal loans', 'Other required payments'],
  },
  {
    name: 'Personal and fun',
    note: 'Plan this spending. Do not hide it in another category.',
    tone: 'teal',
    items: ['Clothes and shoes', 'Haircuts', 'Toiletries', 'Personal spending', 'Subscriptions', 'Streaming services', 'Date nights', 'Trips', 'Books or games', 'Hobbies', 'Sports or events', 'Gifts and birthdays'],
  },
  {
    name: 'Work, giving, and fees',
    note: 'These costs are easy to miss.',
    tone: 'blue',
    items: ['Work clothes or tools', 'Professional dues', 'Career development', 'Giving', 'Legal obligations', 'Income tax not withheld', 'Bank fees'],
  },
  {
    name: 'Savings and future costs',
    note: 'Save a small amount each month for known future costs.',
    tone: 'yellow',
    items: ['Emergency fund', 'Retirement', 'Home repair fund', 'Car repair fund', 'Medical buffer', 'Annual bills', 'Holidays and gifts', 'Travel', 'New car', 'Home deposit', 'Replacement items', 'Cash buffer'],
  },
] as const
