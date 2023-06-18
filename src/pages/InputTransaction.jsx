import React, { useState } from 'react';
import { useEffect } from 'react';

const InputTransaction = () => {
    const [transactionCounter, setTransactionCounter] = useState('000000-0000');
    const [orders, setOrders] = useState([]);

    const [grandTotal, setGrandTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0.0);
    const [totalDiscount, setTotalDiscount] = useState(0.0);
    const [totalDeliveryFee, setTotalDeliveryFee] = useState(0.0);

    const generateTransactionNumber = (transactCounter) => {
        const currYear = new Date().getFullYear();
        const currDate = new Date().getDate();

        // make transaction counter
        const counter = transactCounter.toString();
        const strCounter = counter.padStart(4, '0');

        setTransactionCounter(`${currYear}${currDate}-${strCounter}`);
    };

    const addOrderItems = () => {
        const order = {
            kodeBarang: '1234',
            namaBarang: 'Barang A',
            quatity: 1,
            hargaBandrol: 300000,
            diskonPersen: 0.15,
            diskonRupiah: 20000,
            hargaDiskon: 300000,
            total: 30000,
        };

        const orderList = orders;
        orderList.push(order);

        setOrders(orderList);
        countSubTotal();
    };

    const deleteOrderItems = (order_id) => {
        const orderList = orders;
        if (order_id > -1) orderList.splice(order_id, 1);

        setOrders(orderList);
        countSubTotal();
    };

    const countSubTotal = () => {
        let subTotal = 0;

        orders.forEach((order) => (subTotal += order.total));

        setSubTotal(subTotal);
    };

    const handleSetDiscount = ({ target }) => {
        if (isNaN(target.value)) return;

        setTotalDiscount(parseInt(target.value));
    };

    const handleSetDeliveryFee = ({ target }) => {
        if (isNaN(target.value)) return;

        setTotalDiscount(parseInt(target.value));
    };

    useEffect(() => {
        return () => {
            generateTransactionNumber(1522);
        };
    }, []);

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                <div className="border px-3 pt-3 pb-4 rounded-lg shadow">
                    <h3 className="mb-3 font-semibold text-gray-800">Transaksi</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                No.
                            </label>
                            <input
                                type="text"
                                id="transaction_number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={transactionCounter}
                                readOnly
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Tanggal
                            </label>
                            <input
                                type="date"
                                id="transaction_date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="border px-3 pt-3 pb-4 rounded-lg shadow">
                    <h3 className="mb-3 font-semibold text-gray-800">Customer</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Kode
                            </label>
                            <input
                                type="text"
                                id="customer_code"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ex. 0001"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="customer_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ex. John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Telp
                            </label>
                            <input
                                type="tel"
                                id="customer_phone_num"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ex. +6281234567"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="">
                                <button className="px-6 py-3 w-full bg-green-400 hover:bg-green-500 text-white" onClick={addOrderItems}>
                                    Tambah
                                </button>
                            </th>
                            <th scope="col" className="px-6 py-3 w-1">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kode Barang
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Barang
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga Bandrol
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Diskon (%)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Diskon (Rp)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga Diskon
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>
                    {!orders.length ? (
                        <>
                            <tbody></tbody>
                            <tfoot></tfoot>
                        </>
                    ) : (
                        <>
                            <tbody>
                                {orders.map(({ kodeBarang, namaBarang, quatity, hargaBandrol, diskonPersen, diskonRupiah, hargaDiskon, total }, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td scope="row" className="px-1 py-3 flex items-center gap-1">
                                            <button className="px-2 py-1 bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-md">Ubah</button>
                                            <button className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md" onClick={() => deleteOrderItems(index)}>
                                                Hapus
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 w-1">{index + 1}</td>
                                        <td className="px-6 py-4">{kodeBarang}</td>
                                        <td className="px-6 py-4">{namaBarang}</td>
                                        <td className="px-6 py-4">{quatity}</td>
                                        <td className="px-6 py-4">{hargaBandrol}</td>
                                        <td className="px-6 py-4">{diskonPersen}</td>
                                        <td className="px-6 py-4">{diskonRupiah}</td>
                                        <td className="px-6 py-4">{hargaDiskon}</td>
                                        <td className="px-6 py-4">{total}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className=""></th>
                                    <td colSpan={4}></td>
                                    <td colSpan={2} className="px-6 pt-2 pb-1">
                                        <p className="mb-2">Sub Total</p>
                                    </td>
                                    <td colSpan={3} className="px-6 pt-3 pb-2">
                                        <p className="mb-2 text-base">{subTotal.toLocaleString()}</p>
                                    </td>
                                </tr>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className=""></th>
                                    <td colSpan={4}></td>
                                    <td colSpan={2} className="px-6">
                                        <p className="mb-2">Diskon</p>
                                    </td>
                                    <td colSpan={3} className="px-4 py-1">
                                        <input
                                            type="number"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Silahkan isi ongkirnya"
                                            onChange={handleSetDiscount}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className=""></th>
                                    <td colSpan={4}></td>
                                    <td colSpan={2} className="px-6">
                                        <p>Ongkir</p>
                                    </td>
                                    <td colSpan={3} className="px-4 pt-1 pb-2">
                                        <input
                                            type="number"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Silahkan isi ongkirnya"
                                            onChange={handleSetDeliveryFee}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr className="font-semibold text-gray-900 dark:text-white bg-gray-200">
                                    <th scope="row" className=""></th>
                                    <td colSpan={4}></td>
                                    <td colSpan={2} className="px-6 py-3">
                                        Total Bayar
                                    </td>
                                    <td colSpan={3} className="px-6 py-3 text-base">
                                        {(subTotal - totalDiscount - totalDeliveryFee).toLocaleString()}
                                    </td>
                                </tr>
                            </tfoot>
                        </>
                    )}
                </table>
                {!orders.length ? <p className="py-3 text-base text-slate-400 font-medium text-center">Tidak ada data pesanan.</p> : <p></p>}
            </div>

            <div className="w-full flex justify-end gap-4">
                <button
                    type="button"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                    Batal
                </button>

                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Simpan
                </button>
            </div>
        </div>
    );
};

export default InputTransaction;
