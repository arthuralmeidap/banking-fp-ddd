import accountService from '../account.service'
import { createAccount } from '../account'

describe('Account Service', () => {
  describe('Transfer funds', () => {
    it('Should transfer an amount between accounts', () => {
      const acc1 = createAccount({
        identifier: 'acc1',
        name: 'John Doe',
        dateOfOpening: new Date(),
        balance: { amount: 350 }
      })
      const acc2 = createAccount({
        identifier: 'acc1',
        name: 'John Doe',
        dateOfOpening: new Date(),
        balance: { amount: 0 }
      })
      const [acc3, acc4] = accountService.transfer(acc1, acc2, 150);

      expect (acc1.balance.amount).toEqual(350)
      expect (acc2.balance.amount).toEqual(0)
      expect (acc3.balance.amount).toEqual(200)
      expect (acc4.balance.amount).toEqual(150)
    })
  })
})