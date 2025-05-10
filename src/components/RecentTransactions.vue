<script setup>
import { useDate } from '@/composables/useDate';
import { useCurrency } from '@/composables/useCurrency';

const { formatDate } = useDate();
const { formatCurrency } = useCurrency();

const { transactions } = defineProps(['transactions']);
</script>

<template>
    <div class="recent-transactions">
        <h2>Recent Transactions</h2>
        <ul v-if="transactions.length" class="recent-transactions__transactions-list">
            <li v-for="txn in transactions" :key="txn.id">
                {{ txn.id }}
                <div class="">
                    <p>{{ txn.description }}</p>
                    <p>{{ formatDate(txn.date) }}</p>
                </div>
                <div
                    :class="[
                        'text-sm font-semibold',
                        txn.type === 'income' ? 'text-green-600' : 'text-red-600',
                    ]">
                    {{ formatCurrency(txn.amount) }}
                </div>
            </li>
        </ul>

        <p v-else class="text-sm text-gray-500 italic text-center">No transactions yet.</p>
    </div>
</template>

<style></style>
