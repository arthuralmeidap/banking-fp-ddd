type Amount =  number;

export interface Balance {
  amount: Amount
} 

export interface Account {
  identifier: string;
  name: string;
  dateOfOpening: Date;
  balance: Balance;  
}

export const credit = (acc: Account, a: Amount): Account => 
createAccount({ ...acc, balance: { amount: acc.balance.amount + a }})

export const debit = (acc: Account, a: Amount): Account => 
createAccount({ ...acc, balance: { amount: acc.balance.amount - a }})

export const createAccount = ({
  identifier,
  name,
  dateOfOpening,
  balance = { amount: 0 },
}) : Account => ({
  identifier,
  name,
  dateOfOpening,
  balance,
})
