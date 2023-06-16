import React, { useEffect, useState } from 'react';

const TransactionList = () => {
    const data = () => [
        {
            nomorTransaksi: '202101-0001',
            tanggal: '01-Jan-2021',
            namaCustomer: 'Cust A',
            jumlahBarang: 2,
            subTotal: 250000,
            diskon: 5000,
            ongkir: 0,
            total: 245000,
        },
        {
            nomorTransaksi: '202101-0002',
            tanggal: '01-Jan-2021',
            namaCustomer: 'Cust B',
            jumlahBarang: 5,
            subTotal: 600000,
            diskon: 0,
            ongkir: 15000,
            total: 615000,
        },
        {
            nomorTransaksi: '202101-0003',
            tanggal: '02-Jan-2021',
            namaCustomer: 'Cust A',
            jumlahBarang: 1,
            subTotal: 125000,
            diskon: 0,
            ongkir: 0,
            total: 125000,
        },
        {
            nomorTransaksi: '202101-0004',
            tanggal: '02-Jan-2021',
            namaCustomer: 'Cust C',
            jumlahBarang: 3,
            subTotal: 320000,
            diskon: 0,
            ongkir: 0,
            total: 320000,
        },
        {
            nomorTransaksi: '202101-0005',
            tanggal: '03-Jan-2021',
            namaCustomer: 'Cust D',
            jumlahBarang: 2,
            subTotal: 560000,
            diskon: 0,
            ongkir: 0,
            total: 560000,
        },
    ];

    const [grandTotal, setGrandTotal] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        return () => {
            let totalTemp = 0;
            data()
                .map((el) => el.total)
                .forEach((el) => (totalTemp += el));

            setGrandTotal(new Intl.NumberFormat(['ban', 'id']).format(totalTemp));

            setTransactions(data());
        };
    }, []);

    const searchTheTransaction = (q) => {
        const filteredDatas = [];
        data().forEach((el) => {
            if (el.nomorTransaksi.includes(q)) {
                filteredDatas.push(el);
            }
        });

        if (!filteredDatas.length) {
            data().forEach((el) => {
                if (el.namaCustomer.includes(q)) {
                    filteredDatas.push(el);
                }
            });
        }

        setTransactions(filteredDatas);
    };

    return (
        <div className="border-2 border-gray-200 rounded-lg dark:border-gray-700">
            <div class="relative overflow-x-scroll">
                <div class="p-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" class="sr-only">
                        Search
                    </label>
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            onChange={({ target }) => searchTheTransaction(target.value)}
                            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Cari transaksinya.."
                        />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                NO.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                No. Transaksi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nama Customer
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Jumlah Barang
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Sub Total
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Diskon
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ongkir
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-r-lg">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(({ nomorTransaksi, tanggal, namaCustomer, jumlahBarang, subTotal, diskon, ongkir, total }, index) => (
                            <tr class="bg-white dark:bg-gray-800" key={index}>
                                <th class="px-6 py-4">{index + 1}</th>
                                <td class="px-6 py-4">{nomorTransaksi}</td>
                                <td class="px-6 py-4">{tanggal}</td>
                                <td class="px-6 py-4">{namaCustomer}</td>
                                <td class="px-6 py-4">{jumlahBarang}</td>
                                <td class="px-6 py-4">Rp {subTotal.toLocaleString()}</td>
                                <td class="px-6 py-4">Rp {diskon.toLocaleString()}</td>
                                <td class="px-6 py-4">Rp {ongkir.toLocaleString()}</td>
                                <td class="px-6 py-4">Rp {total.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-900 dark:text-white">
                            <th class="px-6 py-3"></th>
                            <td class="px-6 py-3"></td>
                            <td class="px-6 py-3"></td>
                            <td class="px-6 py-3"></td>
                            <td class="px-6 py-3"></td>
                            <td class="px-6 py-3"></td>
                            <td class="px-6 py-3 text-base" colSpan={2}>
                                Grand Total
                            </td>
                            <td class="px-6 py-3">Rp {grandTotal}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default TransactionList;
