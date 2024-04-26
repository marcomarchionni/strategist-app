import { Portfolio } from '../interfaces/entities';

export const portfolios: Portfolio[] = [
  {
    id: 1,
    createdAt: new Date('2021-01-01'),
    name: 'Long Term Portfolio',
    description:
      'This is a long term portfolio that is meant to be held for 10+ years.',
  },
  {
    id: 2,
    createdAt: new Date('2021-02-01'),
    name: 'Active Trading Portfolio',
    description:
      'This is an active trading portfolio that is meant to be traded frequently.',
  },
  {
    id: 3,
    createdAt: new Date('2021-03-01'),
    name: 'Dividend Portfolio',
    description:
      'This is a dividend portfolio that is meant to generate income.',
  },
  {
    id: 4,
    createdAt: new Date('2021-04-28'),
    name: 'Growth Portfolio',
    description: 'This is a growth portfolio that is meant to grow over time.',
  },
];
