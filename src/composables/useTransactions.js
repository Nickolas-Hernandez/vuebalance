import { ref, computed } from 'vue';

export function useTransactions() {
    const transactions = ref([
        {
            id: 1,
            description: 'Paycheck',
            amount: 2500.0,
            type: 'income',
            category: 'Salary',
            date: '2025-04-25',
        },
        {
            id: 2,
            description: 'Grocery Store',
            amount: 145.23,
            type: 'expense',
            category: 'Food',
            date: '2025-04-26',
        },
        {
            id: 3,
            description: 'Electric Bill',
            amount: 87.65,
            type: 'expense',
            category: 'Utilities',
            date: '2025-04-23',
        },
        {
            id: 4,
            description: 'Freelance Client',
            amount: 600.0,
            type: 'income',
            category: 'Side Hustle',
            date: '2025-04-20',
        },
        {
            id: 5,
            description: 'Netflix Subscription',
            amount: 15.99,
            type: 'expense',
            category: 'Entertainment',
            date: '2025-04-21',
        },
    ]);

    const income = computed(() =>
        transactions.value.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0),
    );

    const expenses = computed(() =>
        transactions.value.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0),
    );

    const balance = computed(() => income.value - expenses.value);

    return { transactions, income, expenses, balance };
}
