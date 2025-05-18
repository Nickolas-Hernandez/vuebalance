<script setup>
import { useDate } from '@/composables/useDate';
import { useCurrency } from '@/composables/useCurrency';
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid';

const { formatDate } = useDate();
const { formatCurrency } = useCurrency();

const { transactions } = defineProps(['transactions']);
</script>

<template>
    <section class="recent-transactions">
        <h2>Recent Transactions</h2>
        <ul v-if="transactions.length" class="recent-transactions__transactions-list">
            <li v-for="txn in transactions" :key="txn.id">
                <div>
                    <p class="text-sm font-medium text-gray-900 truncate">{{ txn.description }}</p>
                    <p class="text-xs text-gray-500">{{ formatDate(txn.date) }}</p>
                </div>
                <div
                    :class="[
                        'text-sm font-semibold ml-auto mr-4',
                        txn.type === 'income' ? 'text-green-600' : 'text-red-600',
                    ]">
                    {{ formatCurrency(txn.amount) }}
                </div>
                <div class="recent-transactions__buttons">
                    <button class="edit-button" style="width: 18px; height: 18px">
                        <PencilIcon />
                    </button>
                    <button class="delete-button" style="width: 18px; height: 18px">
                        <TrashIcon />
                    </button>
                </div>
            </li>
        </ul>

        <p v-else class="text-sm text-gray-500 italic text-center">No transactions yet.</p>
    </section>
</template>

<style>
.recent-transactions {
    @apply bg-white rounded-lg shadow p-4;
}

.recent-transactions h2 {
    @apply text-lg font-semibold text-gray-800 mb-4;
}

.recent-transactions ul {
    @apply space-y-3;
}

.recent-transactions ul > li {
    @apply flex items-center justify-between border-b pb-2 last:border-b-0;
}

.recent-transactions__buttons {
    @apply flex flex-row flex-nowrap gap-x-2;
}

.recent-transactions__buttons button {
    @apply text-gray-500 hover:text-gray-700 transition;
}
</style>
