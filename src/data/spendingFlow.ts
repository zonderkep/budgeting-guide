export interface FlowOption {
  label: string
  next: string
  detail?: string
}

export interface FlowNode {
  id: string
  phase: number
  kind: 'action' | 'question' | 'finish'
  title: string
  text: string
  items?: string[]
  options: FlowOption[]
}

export const flowPhases = [
  { number: 0, label: 'Build the foundation', short: 'Foundation' },
  { number: 1, label: 'Build a safety net', short: 'Safety net' },
  { number: 2, label: 'Claim employer matching', short: 'Match' },
  { number: 3, label: 'Reduce costly debt', short: 'Debt' },
  { number: 4, label: 'Save for retirement', short: 'Retirement' },
  { number: 5, label: 'Increase retirement saving', short: 'Save more' },
  { number: 6, label: 'Choose other goals', short: 'Other goals' },
]

export const flowNodes: FlowNode[] = [
  {
    id: 'foundation', phase: 0, kind: 'action', title: 'Build a stable foundation.',
    text: 'Use your budget to cover needs before you direct money to later goals.',
    items: ['Pay rent or mortgage and basic food costs.', 'Pay essential utilities, health care, and costs that let you earn income.', 'Make the minimum payment on every debt.', 'Pay other bills that are due.', 'Reduce optional spending when the plan does not balance.'],
    options: [{ label: 'My essential costs are covered', next: 'starter-fund' }],
  },
  {
    id: 'starter-fund', phase: 1, kind: 'action', title: 'Build a small emergency fund.',
    text: 'Keep $1,000 or one month of essential expenses in an insured savings or checking account. Use the larger amount when you can.',
    items: ['Use it only for an urgent, unplanned need.', 'Refill it after you use it.'],
    options: [{ label: 'I have a starter fund', next: 'employer-match' }],
  },
  {
    id: 'employer-match', phase: 2, kind: 'question', title: 'Does an employer offer matching retirement money?',
    text: 'This can include a 401(k), 403(b), 457 plan, SIMPLE IRA, or Thrift Savings Plan.',
    options: [
      { label: 'Yes', detail: 'Contribute enough to receive the full match.', next: 'claim-match' },
      { label: 'No', detail: 'Continue to the debt check.', next: 'high-interest-debt' },
    ],
  },
  {
    id: 'claim-match', phase: 2, kind: 'action', title: 'Claim the full employer match.',
    text: 'Set your payroll contribution high enough to receive all matching money. You do not need to contribute above the match yet.',
    options: [{ label: 'The full match is set', next: 'high-interest-debt' }],
  },
  {
    id: 'high-interest-debt', phase: 3, kind: 'question', title: 'Do you have debt above about 10% interest?',
    text: 'The source flowchart treats this as high-interest debt. Credit cards often belong here.',
    options: [
      { label: 'Yes', detail: 'Pay this debt before building the full emergency fund.', next: 'pay-high-debt' },
      { label: 'No', detail: 'Build the full emergency fund.', next: 'full-emergency-fund' },
    ],
  },
  {
    id: 'pay-high-debt', phase: 3, kind: 'action', title: 'Pay high-interest debt.',
    text: 'Keep every minimum payment current. Put extra money toward one debt at a time.',
    items: ['Avalanche: pay the highest interest rate first. This usually costs less.', 'Snowball: pay the smallest balance first. This can provide faster wins.'],
    options: [{ label: 'High-interest debt is paid', next: 'full-emergency-fund' }],
  },
  {
    id: 'full-emergency-fund', phase: 3, kind: 'action', title: 'Build a full emergency fund.',
    text: 'Save three to six months of essential expenses. Consider more when income is variable or uncertain.',
    items: ['Keep the money safe and easy to reach.', 'Do not use stocks, credit, or a home equity line as the emergency fund.'],
    options: [{ label: 'My full emergency fund is ready', next: 'moderate-interest-debt' }],
  },
  {
    id: 'moderate-interest-debt', phase: 3, kind: 'question', title: 'Do you have non-mortgage debt above about 4% to 5% interest?',
    text: 'The source flowchart treats this as moderate-interest debt. Your risk tolerance can change this choice.',
    options: [
      { label: 'Yes', detail: 'Decide whether to pay it before investing more.', next: 'pay-moderate-debt' },
      { label: 'No', detail: 'Move to retirement saving.', next: 'start-retirement' },
    ],
  },
  {
    id: 'pay-moderate-debt', phase: 3, kind: 'action', title: 'Choose how to handle moderate-interest debt.',
    text: 'Paying debt gives a guaranteed return equal to its interest rate. Investing may earn more, but returns are not guaranteed.',
    items: ['Use avalanche when lower total interest is the main goal.', 'Use snowball when early wins will help you continue.', 'You can divide extra money between debt and investing.'],
    options: [{ label: 'I have chosen a debt plan', next: 'start-retirement' }],
  },
  {
    id: 'start-retirement', phase: 4, kind: 'action', title: 'Start tax-advantaged retirement saving.',
    text: 'Review a Roth IRA and a Traditional IRA. Choose the account that fits your tax situation. Use current contribution and income limits.',
    items: ['A Roth IRA uses money after tax.', 'A Traditional IRA can provide a tax deduction when you qualify.', 'A good workplace plan can come before an IRA when it has low costs and useful investment choices.'],
    options: [{ label: 'I have chosen where to save', next: 'required-purchase' }],
  },
  {
    id: 'required-purchase', phase: 4, kind: 'question', title: 'Do you expect a large required cost in the next few years?',
    text: 'Examples include your own education, required training, or a car that you need for work.',
    options: [
      { label: 'Yes', detail: 'Save for it before increasing retirement contributions.', next: 'save-required-purchase' },
      { label: 'No', detail: 'Check your retirement saving rate.', next: 'retirement-rate' },
    ],
  },
  {
    id: 'save-required-purchase', phase: 4, kind: 'action', title: 'Save for the required cost.',
    text: 'Keep money needed soon in an insured savings or checking account. Do not expose a near-term need to large market changes.',
    options: [{ label: 'This cost has a savings plan', next: 'retirement-rate' }],
  },
  {
    id: 'retirement-rate', phase: 5, kind: 'question', title: 'Are you saving at least 15% of gross income for retirement?',
    text: 'Count your retirement contributions. The source guide uses at least 15% and up to 20% as a target. Save more when you are behind.',
    options: [
      { label: 'Yes', detail: 'Continue to other tax-advantaged goals.', next: 'hsa' },
      { label: 'No', detail: 'Choose where to increase retirement saving.', next: 'more-workplace-saving' },
    ],
  },
  {
    id: 'more-workplace-saving', phase: 5, kind: 'question', title: 'Can you save more in a workplace retirement plan?',
    text: 'Examples include a 401(k), 403(b), or similar plan.',
    options: [
      { label: 'Yes', detail: 'Increase payroll contributions toward the target.', next: 'increase-retirement' },
      { label: 'No', detail: 'Use the available individual options.', next: 'individual-retirement' },
    ],
  },
  {
    id: 'increase-retirement', phase: 5, kind: 'action', title: 'Increase workplace retirement contributions.',
    text: 'Raise the payroll contribution toward 15%. Keep enough take-home pay to cover the budget.',
    options: [{ label: 'My contribution plan is set', next: 'hsa' }],
  },
  {
    id: 'individual-retirement', phase: 5, kind: 'action', title: 'Use the retirement accounts available to you.',
    text: 'A self-employed person can review an individual 401(k), SEP IRA, or SIMPLE IRA. Other workers can finish eligible IRA contributions before using a taxable account.',
    options: [{ label: 'My contribution plan is set', next: 'hsa' }],
  },
  {
    id: 'hsa', phase: 6, kind: 'question', title: 'Can you contribute to a Health Savings Account?',
    text: 'You must have an eligible high-deductible health plan and meet the other HSA rules.',
    options: [
      { label: 'Yes', detail: 'Consider funding the HSA to the current annual limit.', next: 'fund-hsa' },
      { label: 'No', detail: 'Continue to education goals.', next: 'child-education' },
    ],
  },
  {
    id: 'fund-hsa', phase: 6, kind: 'action', title: 'Consider increasing HSA savings.',
    text: 'An HSA can pay eligible health costs. It also has tax benefits when you qualify. Check current limits and plan rules.',
    options: [{ label: 'I have reviewed the HSA', next: 'child-education' }],
  },
  {
    id: 'child-education', phase: 6, kind: 'question', title: 'Do you want to help pay another person’s education costs?',
    text: 'Make sure your own retirement plan is on track before you fund this goal.',
    options: [
      { label: 'Yes', detail: 'Review education savings choices such as a 529 plan.', next: 'fund-education' },
      { label: 'No', detail: 'Choose your other goals.', next: 'choose-goal' },
    ],
  },
  {
    id: 'fund-education', phase: 6, kind: 'action', title: 'Choose an education savings plan.',
    text: 'Compare your state’s 529 plan with other savings and investment choices. Check fees, tax benefits, and how soon the money is needed.',
    options: [{ label: 'I have reviewed education saving', next: 'choose-goal' }],
  },
  {
    id: 'choose-goal', phase: 6, kind: 'question', title: 'What should the next money support?',
    text: 'You have more choice after the earlier priorities are secure. You can return and review both paths.',
    options: [
      { label: 'Earlier retirement', detail: 'Increase long-term investing.', next: 'early-retirement' },
      { label: 'A goal within several years', detail: 'Match the account to the goal date.', next: 'nearer-goal' },
      { label: 'Giving or another goal', detail: 'Use the plan that fits your values.', next: 'other-goal' },
    ],
  },
  {
    id: 'early-retirement', phase: 6, kind: 'finish', title: 'Increase long-term retirement saving.',
    text: 'Use available tax-advantaged accounts before a taxable account. Check withdrawal rules before you plan to retire early. Advanced choices, such as a backdoor or mega backdoor Roth, need careful tax review.',
    options: [{ label: 'Start again', next: 'foundation' }],
  },
  {
    id: 'nearer-goal', phase: 6, kind: 'finish', title: 'Match the account to the goal date.',
    text: 'For a goal within three to five years, prefer stable savings. A longer and flexible goal can take more investment risk.',
    items: ['Examples include a home deposit, vehicle, vacation, or early loan payment.', 'Name the goal, amount, and date in your budget.'],
    options: [{ label: 'Start again', next: 'foundation' }],
  },
  {
    id: 'other-goal', phase: 6, kind: 'finish', title: 'Use extra money for a goal that matters to you.',
    text: 'You can give, improve your home, reduce low-interest debt, or save for another personal goal. Name the goal and fund it on purpose.',
    options: [{ label: 'Start again', next: 'foundation' }],
  },
]
