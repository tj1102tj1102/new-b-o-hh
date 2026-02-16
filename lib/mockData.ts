import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg:
      "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'Walter Raymond',
    lastName: 'Menza',
    email: 'w*@gmail.com',
    username: 'Wallymenza12',
    password: 'Raywally2026#',
    transactionCode: '7894',
    createdAt: '2026-1-27', // y-m-d
    updatedAt: '2026-2-6', // y-m-d
    transactionMsg:
      'Hi, Walter Menza your account have been hold. you can make transaction after 24 hours of account activation',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 1500500.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from Fahlon Brown',
            category: '****3537',
            date: 'Feb 14, 2026',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Fahlon Brown',
            category: '****7355',
            date: 'Feb 6, 2026',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Debit Lotto~account',
            category: '****4346',
            date: 'Feb 6, 2026',
            amount: -500.0,
            status: 'success'
          },
          {
            merchant: 'Fahlon brown Bnkofamerica',
            category: '****3543',
            date: 'Feb 5, 2026',
            amount: -900.0,
            status: 'success'
          },
          {
            merchant: 'Lottery Account open fees',
            category: '****6533',
            date: 'Jan 30, 2026',
            amount: -7500.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Publisher Clearing House',
            category: '****7463',
            date: 'Jan 27, 2026',
            amount: 1500000.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****8553',
            date: 'Jan 24, 2026',
            amount: -230.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****9653',
            date: 'Jan 22, 2026',
            amount: -350.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****2663',
            date: 'Jan 20, 2026',
            amount: -420.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****3553',
            date: 'Jan 18, 2026',
            amount: -230.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****4347',
            date: 'Jan 16, 2026',
            amount: -250.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****6335',
            date: 'Jan 14, 2026',
            amount: -250.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****7993',
            date: 'Jan 14, 2026',
            amount: -250.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'account',
        name: 'Lottery Open Account',
        accountNumber: '0987654321',
        balance: -5100.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789011',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0003',
    firstName: 'Rachael',
    lastName: 'Angie',
    email: 'r*@gmail.com',
    username: 'angie0733',
    password: 'Finace20!5',
    transactionCode: '7894',
    createdAt: '2026-1-27', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 486465.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Point of service payment withdrawal',
            category: '****8429',
            date: 'Jan 27, 2026',
            amount: -355.0,
            status: 'success'
          },
          {
            merchant: 'POS debit',
            category: '****3176',
            date: 'Jan 26, 2026',
            amount: -168.0,
            status: 'success'
          },
          {
            merchant: 'Authorized online payment',
            category: '****5903',
            date: 'Jan 24, 2026',
            amount: -99056.0,
            status: 'success'
          },
          {
            merchant: 'Card POS charge',
            category: '****7741',
            date: 'Jan 22, 2026',
            amount: -72000.0,
            status: 'success'
          },
          {
            merchant: 'Online payment',
            category: '****2284',
            date: 'Jan 21, 2026',
            amount: -425376.0,
            status: 'success'
          },
          {
            merchant: 'Order charge',
            category: '****9610',
            date: 'Jan 18, 2026',
            amount: -204655.0,
            status: 'success'
          },
          {
            merchant: 'ATM machine withdrawal',
            category: '****4037',
            date: 'Jan 17, 2026',
            amount: -1000.0,
            status: 'success'
          },
          {
            merchant: 'Walmart POS',
            category: '****6892',
            date: 'Jan 15, 2026',
            amount: -903.0,
            status: 'success'
          },
          {
            merchant: 'Cheapoair',
            category: '****5128',
            date: 'Jan 14, 2026',
            amount: -1460.0,
            status: 'success'
          },
          {
            merchant: 'Check deposit',
            category: '****7354',
            date: 'Jan 13, 2026',
            amount: 893190.0,
            status: 'success'
          },
          {
            merchant: 'POS charge',
            category: '****1846',
            date: 'Jan 11, 2026',
            amount: -102.0,
            status: 'success'
          },
          {
            merchant: 'Electronic funds transfer (Cash)',
            category: '****9061',
            date: 'Jan 11, 2026',
            amount: -2500.0,
            status: 'success'
          },
          {
            merchant: 'Opening wire deposit',
            category: '****8421',
            date: 'Jan 09, 2026',
            amount: 38000.0,
            status: 'success'
          },
          {
            merchant: 'Grocery store: purchase',
            category: '****4738',
            date: 'Dec 18, 2025',
            amount: -1250.0,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****6512',
            date: 'Oct 06, 2025',
            amount: -842.5,
            status: 'success'
          },
          {
            merchant: 'Vat Fee - Charges',
            category: '****3904',
            date: 'Aug 21, 2025',
            amount: -185.0,
            status: 'success'
          },
          {
            merchant: 'Walmart Supercenter - Online',
            category: '****8841',
            date: 'May 14, 2025',
            amount: -2560.34,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: '****2279',
            date: 'Feb 02, 2025',
            amount: -155.49,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0004',
    firstName: 'Thomas',
    lastName: 'Wyant',
    email: 'tw*@gmail.com',
    username: 'ThomasWyant1968',
    password: 'Twyant1968',
    transactionCode: '7894',
    createdAt: '2026-2-10', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 850000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from Us Truck LLC',
            category: '****4821',
            date: 'Dec 15, 2018',
            amount: 48000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Tankstar USA Inc',
            category: '****9374',
            date: 'Nov 03, 2018',
            amount: -35000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Windsor Steel Corporation',
            category: '****1265',
            date: 'Jan 22, 2018',
            amount: 42000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Sophia Collins',
            category: '****8432',
            date: 'Oct 12, 2017',
            amount: -30000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Tyler Evans',
            category: '****5910',
            date: 'Jul 08, 2017',
            amount: 46000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Bravo Steel Manufacturing Corp.',
            category: '****3748',
            date: 'Mar 19, 2017',
            amount: -28000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Publisher Clearing House',
            category: '****6592',
            date: 'Dec 05, 2016',
            amount: 47000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to BluePeak Industries',
            category: '****2081',
            date: 'Aug 23, 2016',
            amount: -26000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Silverline Corp.',
            category: '****7319',
            date: 'Feb 11, 2016',
            amount: 45000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to TChloe Baker',
            category: '****1942',
            date: 'Nov 14, 2015',
            amount: -24000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Quantum Dynamics Ltd.',
            category: '****8623',
            date: 'Jun 29, 2015',
            amount: 44000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to NorthStar Enterprises',
            category: '****5107',
            date: 'Mar 03, 2015',
            amount: -22000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Crestview Solutions',
            category: '****3784',
            date: 'Dec 18, 2014',
            amount: 46000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Edgewater Tech',
            category: '****9462',
            date: 'Sep 07, 2014',
            amount: -25000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Apexium Consulting',
            category: '****1259',
            date: 'Apr 25, 2014',
            amount: 43000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Orion Ventures',
            category: '****7341',
            date: 'Oct 30, 2013',
            amount: -20000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Steven King',
            category: '****5683',
            date: 'Jul 21, 2013',
            amount: 48000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Olivia Turner',
            category: '****9210',
            date: 'Mar 12, 2013',
            amount: -21000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/19',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0005',
    firstName: 'Rose E',
    lastName: 'Martha',
    email: 're*@gmail.com',
    username: 'Rose-martha123',
    password: 'Security123',
    transactionCode: '7894',
    createdAt: '2026-2-16', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 314450.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'AJ Paintings',
            category: '****3726',
            date: 'Feb 18, 2026',
            amount: -73400.0,
            status: 'success'
          },
          {
            merchant: 'Superspar',
            category: '****4653',
            date: 'Feb 18, 2026',
            amount: -4500.0,
            status: 'success'
          },

          {
            merchant: 'Wire transfer',
            category: '****8194',
            date: 'Feb 17, 2026',
            amount: -17600.0,
            status: 'success'
          },
          {
            merchant: 'Rescord',
            category: '****2407',
            date: 'Feb 17, 2026',
            amount: -11000.0,
            status: 'success'
          },
          {
            merchant: 'Infinite ventures',
            category: '****5931',
            date: 'Feb 17, 2026',
            amount: -42000.0,
            status: 'success'
          },
          {
            merchant: 'Groceries',
            category: '****7742',
            date: 'Feb 17, 2026',
            amount: -3700.0,
            status: 'success'
          },

          {
            merchant: 'Wire deposit',
            category: '****9185',
            date: 'Feb 16, 2026',
            amount: 67800.0,
            status: 'success'
          },
          {
            merchant: 'ACH debit',
            category: '****6639',
            date: 'Feb 16, 2026',
            amount: -23650.0,
            status: 'success'
          },

          {
            merchant: 'Transfer',
            category: '****4820',
            date: 'Feb 15, 2026',
            amount: -14000.0,
            status: 'success'
          },

          {
            merchant: 'Restaurant',
            category: '****1093',
            date: 'Feb 14, 2026',
            amount: -14500.0,
            status: 'success'
          },
          {
            merchant: 'Debit card tacos',
            category: '****5548',
            date: 'Feb 14, 2026',
            amount: -6450.0,
            status: 'success'
          },
          {
            merchant: 'Cocs',
            category: '****7281',
            date: 'Feb 14, 2026',
            amount: -4200.0,
            status: 'success'
          },
          {
            merchant: 'Plasti',
            category: '****9914',
            date: 'Feb 14, 2026',
            amount: -980.0,
            status: 'success'
          },

          {
            merchant: 'Palms deposit',
            category: '****3568',
            date: 'Feb 13, 2026',
            amount: 46500.0,
            status: 'success'
          },
          {
            merchant: 'Family org',
            category: '****6402',
            date: 'Feb 13, 2026',
            amount: -33600.0,
            status: 'success'
          },
          {
            merchant: 'Rubber taco',
            category: '****1873',
            date: 'Feb 13, 2026',
            amount: -21570.0,
            status: 'success'
          },

          {
            merchant: 'Contact',
            category: '****9035',
            date: 'Feb 12, 2026',
            amount: -21900.0,
            status: 'success'
          },
          {
            merchant: 'Restaurant',
            category: '****2746',
            date: 'Feb 12, 2026',
            amount: -7200.0,
            status: 'success'
          },

          {
            merchant: 'Restaurant',
            category: '****8821',
            date: 'Feb 11, 2026',
            amount: -700.0,
            status: 'success'
          },

          {
            merchant: 'Industry',
            category: '****3319',
            date: 'Feb 10, 2026',
            amount: -22990.0,
            status: 'success'
          },

          {
            merchant: 'Debit card',
            category: '****7645',
            date: 'Feb 9, 2026',
            amount: -12900.0,
            status: 'success'
          },
          {
            merchant: 'Incoming wire',
            category: '****7284',
            date: 'Feb 9, 2026',
            amount: 189900.0,
            status: 'success'
          },
          {
            merchant: 'Debit',
            category: '****1157',
            date: 'Feb 9, 2026',
            amount: -800.0,
            status: 'success'
          },

          {
            merchant: 'Debit card',
            category: '****6690',
            date: 'Feb 7, 2026',
            amount: -5600.0,
            status: 'success'
          },

          {
            merchant: 'Transfer',
            category: '****4412',
            date: 'Feb 6, 2026',
            amount: -23560.0,
            status: 'success'
          },

          {
            merchant: 'Transfer',
            category: '****5078',
            date: 'Feb 5, 2026',
            amount: -122450.0,
            status: 'success'
          },
          {
            merchant: 'Wire transfer marble Ilc',
            category: '****9821',
            date: 'Feb 5, 2026',
            amount: -145600.0,
            status: 'success'
          },

          {
            merchant: 'Debit card',
            category: '****2741',
            date: 'Feb 4, 2026',
            amount: -6500.0,
            status: 'success'
          },
          {
            merchant: 'Cleber',
            category: '****9031',
            date: 'Feb 4, 2026',
            amount: -4300.0,
            status: 'success'
          },
          {
            merchant: 'Screeding',
            category: '****6672',
            date: 'Feb 4, 2026',
            amount: -82700.0,
            status: 'success'
          },

          {
            merchant: 'Catcher',
            category: '****5530',
            date: 'Feb 3, 2026',
            amount: -9200.0,
            status: 'success'
          },

          {
            merchant: 'Fabricate',
            category: '****7104',
            date: 'Feb 2, 2026',
            amount: -72500.0,
            status: 'success'
          },

          {
            merchant: 'Vinci Co deposit',
            category: '****5402',
            date: 'Feb 1, 2026',
            amount: 250990.0,
            status: 'success'
          },
          {
            merchant: 'Ventures',
            category: '****6189',
            date: 'Feb 1, 2026',
            amount: 25500.0,
            status: 'success'
          },

          {
            merchant: 'Debit card',
            category: '****8015',
            date: 'Jan 30, 2026',
            amount: -7000.0,
            status: 'success'
          },
          {
            merchant: 'Debit',
            category: '****4426',
            date: 'Jan 30, 2026',
            amount: -4500.0,
            status: 'success'
          },
          {
            merchant: 'Gas',
            category: '****3379',
            date: 'Jan 30, 2026',
            amount: -620.0,
            status: 'success'
          },

          {
            merchant: 'Adid',
            category: '****9044',
            date: 'Jan 29, 2026',
            amount: -2000.0,
            status: 'success'
          },
          {
            merchant: 'Wire transfer deposit',
            category: '****6817',
            date: 'Jan 29, 2026',
            amount: 269000.0,
            status: 'success'
          },
          {
            merchant: 'Wire transfer',
            category: '****2298',
            date: 'Jan 29, 2026',
            amount: -140000.0,
            status: 'success'
          },
          {
            merchant: 'ITV deposit',
            category: '****7749',
            date: 'Jan 29, 2026',
            amount: 4590.0,
            status: 'success'
          },
          {
            merchant: 'Xfinity deposit',
            category: '****1186',
            date: 'Jan 29, 2026',
            amount: 12400.0,
            status: 'success'
          },

          {
            merchant: 'Delta Airlines',
            category: '****6679',
            date: 'Jan 28, 2026',
            amount: -4000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer',
            category: '****3021',
            date: 'Jan 28, 2026',
            amount: -45000.0,
            status: 'success'
          },
          {
            merchant: 'Wire transfer',
            category: '****9983',
            date: 'Jan 28, 2026',
            amount: -246000.0,
            status: 'success'
          },
          {
            merchant: 'Wire transfer',
            category: '****4720',
            date: 'Jan 28, 2026',
            amount: -63000.0,
            status: 'success'
          },
          {
            merchant: 'Crochet',
            category: '****6154',
            date: 'Jan 28, 2026',
            amount: -9499.0,
            status: 'success'
          },

          {
            merchant: 'Withdraw',
            category: '****7721',
            date: 'Jan 27, 2026',
            amount: -10000.0,
            status: 'success'
          },
          {
            merchant: 'ATM debit',
            category: '****8834',
            date: 'Jan 27, 2026',
            amount: -2000.0,
            status: 'success'
          },
          {
            merchant: 'Wire transfer channel',
            category: '****1907',
            date: 'Jan 27, 2026',
            amount: -23500.0,
            status: 'success'
          },
          {
            merchant: 'Transfer',
            category: '****6648',
            date: 'Jan 27, 2026',
            amount: -41970.0,
            status: 'success'
          },
          {
            merchant: 'Withdrawal',
            category: '****3185',
            date: 'Jan 27, 2026',
            amount: -19990.0,
            status: 'success'
          },
          {
            merchant: 'Engine garage',
            category: '****7420',
            date: 'Jan 27, 2026',
            amount: -600.0,
            status: 'success'
          },

          {
            merchant: 'Channel',
            category: '****5017',
            date: 'Jan 26, 2026',
            amount: -1200.0,
            status: 'success'
          },
          {
            merchant: 'Fountain Mall',
            category: '****2649',
            date: 'Jan 26, 2026',
            amount: -14500.0,
            status: 'success'
          },
          {
            merchant: 'Fourth ways',
            category: '****7091',
            date: 'Jan 26, 2026',
            amount: -18890.0,
            status: 'success'
          },
          {
            merchant: 'Check deposit',
            category: '****9036',
            date: 'Jan 26, 2026',
            amount: 898340.01,
            status: 'success'
          },

          {
            merchant: 'Industry',
            category: '****5512',
            date: 'Jan 25, 2026',
            amount: -8900.0,
            status: 'success'
          },
          {
            merchant: 'Family dollar',
            category: '****3284',
            date: 'Jan 25, 2026',
            amount: -4500.0,
            status: 'success'
          },
          {
            merchant: 'Transfer',
            category: '****1176',
            date: 'Jan 25, 2026',
            amount: 7800.0,
            status: 'success'
          },
          {
            merchant: 'Thirst',
            category: '****6694',
            date: 'Jan 25, 2026',
            amount: -2500.0,
            status: 'success'
          },
          {
            merchant: 'Groceries',
            category: '****8032',
            date: 'Jan 25, 2026',
            amount: -9000.0,
            status: 'success'
          },

          {
            merchant: 'Gasoline',
            category: '****2158',
            date: 'Jan 24, 2026',
            amount: -600.0,
            status: 'success'
          },
          {
            merchant: 'Mike store',
            category: '****4473',
            date: 'Jan 24, 2026',
            amount: -5600.0,
            status: 'success'
          },
          {
            merchant: 'City restaurants',
            category: '****1904',
            date: 'Jan 24, 2026',
            amount: -3200.0,
            status: 'success'
          },
          {
            merchant: 'Insurance',
            category: '****6041',
            date: 'Jan 24, 2026',
            amount: -4500.0,
            status: 'success'
          },
          {
            merchant: 'Verizon',
            category: '****8892',
            date: 'Jan 24, 2026',
            amount: -400.0,
            status: 'success'
          },
          {
            merchant: 'Credit card payment',
            category: '****7751',
            date: 'Jan 24, 2026',
            amount: -7400.0,
            status: 'success'
          },

          {
            merchant: 'Easy pricing',
            category: '****2268',
            date: 'Jan 23, 2026',
            amount: -4200.0,
            status: 'success'
          },
          {
            merchant: 'Beu restaurant',
            category: '****9182',
            date: 'Jan 23, 2026',
            amount: -850.0,
            status: 'success'
          },
          {
            merchant: 'Sall gar',
            category: '****3374',
            date: 'Jan 23, 2026',
            amount: -870.0,
            status: 'success'
          },
          {
            merchant: 'Mick',
            category: '****5416',
            date: 'Jan 23, 2026',
            amount: -800.0,
            status: 'success'
          },
          {
            merchant: 'Transfer',
            category: '****6629',
            date: 'Jan 23, 2026',
            amount: 18670.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/19',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
