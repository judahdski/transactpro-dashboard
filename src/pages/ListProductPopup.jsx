import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { products } from '../data';

const ListProductPopup = ({ handleAddOrderDetails }) => {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

    const [barangId, setBarangId] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [diskonPersen, setDiskonPersen] = useState(0);

    return (
        <>
            <Button onClick={() => props.setOpenModal('default')} class="px-4 py-2 w-full bg-green-400 hover:bg-green-500 text-white">
                Tambah
            </Button>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Pilih Barang</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="mb-4">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Daftar barang
                            </label>
                            <select
                                onChange={(e) => setBarangId(e.target.selectedIndex)}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Pilih barang</option>
                                {products.map(({ id, kode, nama, harga }) => (
                                    <option id={id} key={id}>
                                        ({kode}) {nama} &nbsp; - &nbsp; {harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Jumlah Barang
                                </label>
                                <input
                                    type="number"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Diskon (dalam %)
                                </label>
                                <input
                                    type="number"
                                    id="visitors"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="ex. 10 = 10%"
                                    onChange={(e) => setDiskonPersen(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            props.setOpenModal(undefined);
                            handleAddOrderDetails({
                                barangId: barangId,
                                qty: parseInt(quantity),
                                diskonPersen: diskonPersen / 100,
                            });
                        }}
                    >
                        Simpan
                    </Button>
                    <Button color="red" onClick={() => props.setOpenModal(undefined)}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListProductPopup;
