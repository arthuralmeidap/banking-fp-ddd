import { Account, createAccount, credit, debit } from '../account';

describe("Deixa eu pensar...", () => {
  it ('Should create an account with 0dds balance', () => {
    const account = createAccount({ identifier: 'a1',name: 'John',dateOfOpening: new Date('now')})
    expect(account.balance === { amount: 0 })
  });

  it ('Should create an account with balance', () => {
    const account = createAccount({ 
      identifier: 'a1',
      name: 'John',
      dateOfOpening: new Date('now'),
      balance: { amount: 200}
    })
    expect(account.balance === { amount: 200 })
  });

  it ('should credit money and return a new account', () => {
    const acc1 = createAccount({ identifier: 'a1',name: 'John',dateOfOpening: new Date('now')})
    const acc2 = credit(acc1, 100);

    expect(acc1.balance === { amount: 0 })
    expect(acc2.balance === { amount: 100 })
  })

  it ('should debit money and return a new account', () => {
    const acc1 = createAccount({ identifier: 'a1',name: 'John',dateOfOpening: new Date('now')})
    const acc2 = credit(acc1, 200);
    const acc3 = debit(acc2, 77);

    expect(acc1.balance === { amount: 0 })
    expect(acc2.balance === { amount: 200 })
    expect(acc3.balance === { amount: 133 })
  })
})