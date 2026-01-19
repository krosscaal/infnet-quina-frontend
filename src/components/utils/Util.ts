export class Util {
    static formatCurrency(value: number): string {
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    static readonly handleNumericInputBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 9999 && /^\d+$/.test(value))) {
            e.target.value = value;
        } else {
            e.target.value = value.slice(0, -1);
        }
    };

    static readonly handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 80 && /^\d+$/.test(value))) {
            e.target.value = value;
        } else {
            e.target.value = value.slice(0, -1);
        }
    };

    static readonly handleNumericPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 99999999999 && /^\d+$/.test(value)) || value.length === 11) {
            e.target.value = value;
        } else {
            e.target.value = value.slice(0, -1);
        }
    }
    static readonly handleLetras = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^[A-Za-zÀ-ÿ\s]+$/.test(value)) {
            e.target.value = value;
        } else {
            e.target.value = value.slice(0, -1);
        }
    }

}