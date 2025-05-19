# VueBalance

A modern, responsive personal finance tracker built with **Vue 3** and the **Composition API**.  
VueBalance lets users add, edit, and delete transactions, view their financial summary, and filter data — all

---

## Features

- ✅ Add, edit, and delete transactions
- ✅ Summary cards for income, expenses, and balance
- ✅ Pagination with custom controls
- ✅ Transaction filtering (Income / Expense / All)
- ✅ Smart container + dumb component architecture
- ✅ Persistent state with `localStorage`
- ✅ Fully modular with reusable components
- ✅ Built with Vue 3's Composition API
- ✅ Mobile-first responsive layout

---

## Technologies Used

- [Vue.js 3](https://vuejs.org/) (Composition API)
- [Vite](https://vitejs.dev/) – lightning-fast dev server
- [Chart.js](https://www.chartjs.org/) or [ApexCharts](https://apexcharts.com/vue-chart-demos/) _(optional)_
- [Tailwind CSS](https://tailwindcss.com/) _(optional)_
- `localStorage` for data persistence

---

## Project Structure

<pre lang="markdown"><code>
├── components/           # Reusable UI components (forms, lists, modals, etc.)
│   ├── AddTransactionForm.vue
│   ├── Modal.vue
│   ├── PaginationControls.vue
│   ├── RecentTransactions.vue
│   ├── SummaryCard.vue
|   └── TransactionTypeFilter.vue
│
├── composables/          # Logic and reusable state with Composition API
│   ├── useCurrency.js
│   ├── useDate.js
│   └── useTransactions.js
│
├── views/                # Route views/pages
│   └── Dashboard.vue
│
├── App.vue               # Root component
└── main.js               # App entry point
</code></pre>

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Build for production
npm run build
```

---

## Potential Improvements

- Category filter and management (e.g. Food, Bills)
- Toast notifications for feedback
- Dark mode toggle with theme persistence
- Export data to a csv file
- Reset all data button
- Better accessibility (a11y) support
- Deploy to Netlify/Vercel for live demo

---

## Screenshots

### Dashboard View

![Screenshot 2025-05-18 at 17 12 15](https://github.com/user-attachments/assets/fba87fbf-f0a0-4d96-a0f1-42c62a2bbe1f)

### Responsive Mobile View

![Screenshot 2025-05-18 at 17 13 30](https://github.com/user-attachments/assets/468b4651-c657-4493-9aba-52742743cf50)

