import { Link } from "react-router-dom";

function Checkout() {


    return (


        <>
            <section className="bg-white py-8 antialiased md:py-5 border">
                <h1 className="text-center font-semibold text-3xl border-b border-gray-300 pb-4">Checkout</h1>
                <form action="#" className="mx-auto max-w-6xl px-4 2xl:px-0">
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div className="min-w-0 flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">Delivery Address</h2>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900">First Name </label>
                                        <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:outline-0" placeholder="Enter First Name" required />
                                    </div>

                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900">Last Name </label>
                                        <input type="text" id="your_email" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Last Name" required />
                                    </div>
                                    <div>
                                        <label for="phone-input-3" className="mb-2 block md:text-sm text-xs font-medium text-gray-900"> Phone Number </label>
                                        <div className="flex items-center">
                                            <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-2 py-2.5 text-center md:text-sm text-xs font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100" type="button">
                                                <svg fill="none" aria-hidden="true" className="me-2 h-4 w-4" viewBox="0 0 20 15">
                                                    <rect width="19.6" height="14" y=".5" fill="#FF9933" rx="2" />
                                                    <mask id="a">
                                                        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                                    </mask>
                                                    <g mask="url(#a)">
                                                        <path fill="#FFFFFF" fill-rule="evenodd" d="M19.6 5.167H0v3.667h19.6V5.167z" clip-rule="evenodd" />
                                                        <path fill="#138808" fill-rule="evenodd" d="M19.6 8.834H0v5.167h19.6V8.834z" clip-rule="evenodd" />
                                                        <circle cx="10" cy="7.5" r="2" stroke="#000080" stroke-width="0.5" fill="none" />
                                                        <path fill="none" stroke="#000080" stroke-width="0.5" d="M10,5.5 v2h1.732l-1.5 1.5l-1.5 -1.5h1.732z" />

                                                        <path fill="none" stroke="#000080" stroke-width="0.1" d="M10 5.5 L 10 9.5 M 8.268 6.866 L 11.732 6.866 M 8.268 8.134 L 11.732 8.134" />
                                                    </g>
                                                </svg>

                                                +91
                                            </button>
                                            <div className="relative w-full">
                                                <input type="text" id="phone-input" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:outline-none outline-none" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email" className="mb-2 block md:text-sm text-xs font-medium text-gray-900"> Email </label>
                                        <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="xyz@gmail.com" required />
                                    </div>

                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900"> Address Line 1 </label>
                                        <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Address Line 1" required />
                                    </div>

                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900"> Address Line 2 </label>
                                        <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Address Line 2" required />
                                    </div>
                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900"> Landmark </label>
                                        <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Landmark" required />
                                    </div>
                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900">Locality / Town</label>
                                        <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Town" required />
                                    </div>
                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900"> City </label>
                                        <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter City" required />
                                    </div>
                                    <div>
                                        <label className="mb-2 block md:text-sm text-xs font-medium text-gray-900">State</label>
                                        <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 p-2.5 md:text-sm text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter State" required />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">Payment Method</h3>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="rounded-lg border border-gray-200 p-4 ps-4">
                                        <div className="flex items-start">
                                            <div className="flex h-4 items-center">
                                                <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600" checked />
                                            </div>

                                            <div className="ms-2 md:text-sm text-xs">
                                                <label for="credit-card" className="font-medium leading-none text-gray-900">Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div>
                                <label for="voucher" className="mb-2 block text-sm font-medium text-gray-900"> Enter a gift card, voucher or promotional code </label>
                                <div className="flex max-w-md items-center gap-4">
                                    <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="" required />
                                    <button type="button" className="flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Apply</button>
                                </div>
                            </div> */}
                        </div>

                        <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-16 lg:max-w-xs xl:max-w-md">
                            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                <dt className="text-base text-center border-b pb-2 font-normal text-gray-500">Order Receipt</dt>

                                <div className="-my-3 divide-y divide-gray-200">
                                    <dl className="flex items-center justify-between gap-4 pb-3">
                                        <dt className="text-sm font-normal text-gray-500">Total MRP</dt>
                                        <dd className="text-sm font-medium text-gray-900">&#x20b9;7,500.00</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-sm font-normal text-gray-500">Discount on MRP</dt>
                                        <dd className="text-sm font-medium text-green-500">-100.00</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-sm font-normal text-gray-500">Shipping Charges</dt>
                                        <dd className="text-sm font-medium text-gray-900">&#x20b9;100</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-sm font-normal text-gray-500">GST</dt>
                                        <dd className="text-sm font-medium text-gray-900">&#x20b9;499</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-sm font-bold text-gray-900">Total</dt>
                                        <dd className="text-sm font-bold text-gray-900">&#x20b9;8,999.00</dd>
                                    </dl>
                                </div>
                                <div className="space-y-3">

                                    <Link to='/cart/checkout/receipt' >

                                   
                                    <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300">Proceed to Order</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </section>


        </>



    );


}

export default Checkout;