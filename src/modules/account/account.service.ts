import { Account, Amount, debit, credit } from './account'

type Transfer = [Account, Account, Amount];

interface AccountService {
  transfer: (from: Account, to: Account, amount: Amount) => Transfer
}

const transfer =  (from: Account, to: Account, amount: Amount) => {
  const acc3 = debit(from, amount)
  const acc4 = credit(to, amount)

  return [acc3, acc4, amount]
}

export default { transfer } as AccountService;