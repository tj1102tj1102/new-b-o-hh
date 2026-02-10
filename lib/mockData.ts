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
        balance: -6100.0,
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
            merchant: 'Transfer from Alice Johnson',
            category: '****4821',
            date: 'Dec 15, 2018',
            amount: 48000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Michael Smith',
            category: '****9374',
            date: 'Nov 03, 2018',
            amount: -35000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sarah Lee',
            category: '****1265',
            date: 'Jan 22, 2018',
            amount: 42000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to David Brown',
            category: '****8432',
            date: 'Oct 12, 2017',
            amount: -30000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Emily Clark',
            category: '****5910',
            date: 'Jul 08, 2017',
            amount: 46000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to John Doe',
            category: '****3748',
            date: 'Mar 19, 2017',
            amount: -28000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Laura White',
            category: '****6592',
            date: 'Dec 05, 2016',
            amount: 47000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Kevin Green',
            category: '****2081',
            date: 'Aug 23, 2016',
            amount: -26000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Rachel Adams',
            category: '****7319',
            date: 'Feb 11, 2016',
            amount: 45000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Brian Scott',
            category: '****1942',
            date: 'Nov 14, 2015',
            amount: -24000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Megan Hall',
            category: '****8623',
            date: 'Jun 29, 2015',
            amount: 44000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Steven King',
            category: '****5107',
            date: 'Mar 03, 2015',
            amount: -22000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Olivia Turner',
            category: '****3784',
            date: 'Dec 18, 2014',
            amount: 46000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Nathan Wright',
            category: '****9462',
            date: 'Sep 07, 2014',
            amount: -25000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Chloe Baker',
            category: '****1259',
            date: 'Apr 25, 2014',
            amount: 43000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Tyler Evans',
            category: '****7341',
            date: 'Oct 30, 2013',
            amount: -20000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sophia Collins',
            category: '****5683',
            date: 'Jul 21, 2013',
            amount: 48000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Jason Ramirez',
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
        expiryDate: '08/27',
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
