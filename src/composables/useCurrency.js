export function useCurrency() {
    const formatCurrency = value => {
        if (value == null) return 'N/A';

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value);
    };

    return { formatCurrency };
}
