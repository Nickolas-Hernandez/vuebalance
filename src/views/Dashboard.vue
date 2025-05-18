<script setup>
import { ref, computed } from 'vue';
import SummaryCard from '@/components/SummaryCard.vue';
import RecentTransactions from '@/components/RecentTransactions.vue';
import AddTransactionForm from '@/components/AddTransactionForm.vue';
import Modal from '@/components/Modal.vue';
import PaginationControls from '@/components/PaginationControls.vue';
import TransactionTypeFilter from '@/components/TransactionTypeFilter.vue';
import { useTransactions } from '@/composables/useTransactions';

const showModal = ref(false);
const editingTransaction = ref(null);
const currentPage = ref(1);
const pageSize = 5;
const activeFilter = ref('all');

const {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    income,
    expenses,
    balance,
} = useTransactions();

function handleEdit(txn) {
    editingTransaction.value = { ...txn };
    showModal.value = true;
}

function handleTransactionSubmit(txn) {
    if (editingTransaction.value) {
        updateTransaction(editingTransaction.value.id, txn);
        editingTransaction.value = null;
    } else {
        addTransaction(txn);
    }

    showModal.value = false;
}

function closeModal() {
    showModal.value = false;
    editingTransaction.value = null;
}

function handleDelete(id) {
    const confirmed = confirm('Are you sure you want to delete this transaction?');
    if (confirmed) {
        deleteTransaction(id);
    }
}

const filteredTransactions = computed(() => {
    if (activeFilter.value === 'all') return transactions.value;
    return transactions.value.filter(txn => txn.type === activeFilter.value);
});

const paginatedTransactions = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return filteredTransactions.value.slice(start, start + pageSize);
});

const totalPages = computed(() => Math.ceil(filteredTransactions.value.length / pageSize));
</script>

<template>
    <div id="dashboard">
        <SummaryCard :income="income" :balance="balance" :expenses="expenses" />
        <TransactionTypeFilter v-model="activeFilter" />
        <RecentTransactions
            :transactions="paginatedTransactions"
            @edit="handleEdit"
            @delete="handleDelete" />
        <PaginationControls
            :currentPage="currentPage"
            :totalPages="totalPages"
            @prev="() => currentPage--"
            @next="() => currentPage++" />
        <Modal v-if="showModal" @close="closeModal">
            <AddTransactionForm
                :transaction="editingTransaction"
                @submit="handleTransactionSubmit" />
        </Modal>
        <button @click="showModal = true" class="add-transaction-modal-toggle">+</button>
    </div>
</template>

<style>
.add-transaction-modal-toggle {
    @apply fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700 transition;
}
</style>
