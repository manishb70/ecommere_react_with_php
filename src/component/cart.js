import React from "react";
import img1 from '../Apron/Jeana-Apron.png'
import img2 from '../Apron/apron with cap and checks.png'
import img3 from '../Fridge Top Cover/Bristly Fridge Top.png'
import img4 from '../Fridge Top Cover/Flock.png'
import { Link } from "react-router-dom";


function Cart() {

    return (

        <>

            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-8xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="md:h-24 md:w-24 w-full h-60  dark:hidden" src={img1} alt="imac image" />
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                {/* <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                    </svg>
                                                </button> */}
                                                <span className="text-xs bg-gray-50 h-9 flex items-center w-12 justify-center">Qty : </span>
                                                <input type="text" id="counter-input" data-input-counter className="w-14 shrink-0 border-0 bg-gray-50 text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="0" required />
                                                {/* <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button> */}
                                            </div>
                                            <div className="text-end md:order-4 md:w-32">
                                                <p className="text-base font-bold text-gray-900 dark:text-white">&#x20b9;2,500</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" className="text-xs font-bold text-gray-700 hover:underline dark:text-white">#2901</a>
                                        </div>
                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#" className="text-base font-bold text-gray-900 dark:text-white">Jeana Apron</a>

                                            <div>
                                                <span href="#" className="block text-xs text-gray-700 dark:text-white">Size : 40 x 40</span>
                                                {/* <span href="#" className="text-xs text-gray-700 dark:text-white">Color : Blue</span> */}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <button type="button" className="inline-flex underline items-center text-xs text-gray-600 hover:underline dark:text-red-500">
                                                    Add to Wishlist
                                                </button>
                                                <button type="button" className="inline-flex underline items-center text-xs text-red-600 hover:underline dark:text-red-500">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="md:h-24 md:w-24 w-full h-60  dark:hidden" src={img2} alt="imac image" />
                                        </a>

                                        <label for="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                {/* <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                    </svg>
                                                </button> */}

                                                <span className="text-xs bg-gray-50 text-black h-9 flex items-center w-12 justify-center">Qty : </span>
                                                <input type="text" id="counter-input" data-input-counter className="w-14 shrink-0 border-0 bg-gray-50 text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="0" required />


                                                {/* <input type="text" id="counter-input-2" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required /> */}
                                                {/* <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button> */}
                                            </div>
                                            <div className="text-end md:order-4 md:w-32">
                                                <p className="text-base font-bold text-gray-900 dark:text-white">&#x20b9;3,500</p>
                                            </div>
                                        </div>

                                        <div>
                                            <a href="#" className="text-xs font-bold text-gray-700 hover:underline dark:text-white">#1276</a>
                                        </div>
                                        <div className="w-full min-w-0 flex-1 space-y-3 md:order-2 md:max-w-md">
                                            <a href="#" className="text-base font-bold text-gray-900 dark:text-white">Kitchen Apron Check with Cap</a>
                                            <div>
                                                <span href="#" className="block text-xs text-gray-700 dark:text-white">Size : 32 x 32</span>
                                                {/* <span href="#" className="text-xs text-gray-700 dark:text-white">Color : Blue</span> */}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <button type="button" className="inline-flex underline items-center text-xs text-gray-600 hover:underline dark:text-red-500">
                                                    Add to Wishlist
                                                </button>
                                                <button type="button" className="inline-flex underline items-center text-xs text-red-600 hover:underline dark:text-red-500">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="md:h-24 md:w-24 w-full h-60  dark:hidden" src={img3} alt="imac image" />
                                        </a>

                                        <label for="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                {/* <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                    </svg>
                                                </button> */}

                                                <span className="text-xs bg-gray-50 text-black h-9 flex items-center w-12 justify-center">Qty : </span>
                                                <input type="text" id="counter-input" data-input-counter className="w-14 shrink-0 border-0 bg-gray-50 text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="0" required />


                                                {/* <input type="text" id="counter-input-2" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required /> */}
                                                {/* <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button> */}
                                            </div>
                                            <div className="text-end md:order-4 md:w-32">
                                                <p className="text-base font-bold text-gray-900 dark:text-white">&#x20b9;1,500</p>
                                            </div>
                                        </div>

                                        <div>
                                            <a href="#" className="text-xs font-bold text-gray-700 hover:underline dark:text-white">#9866</a>
                                        </div>
                                        <div className="w-full min-w-0 flex-1 space-y-3 md:order-2 md:max-w-md">
                                            <a href="#" className="text-base font-bold text-gray-900 dark:text-white">Fridge Top Cover</a>
                                            <div>
                                                <span href="#" className="block text-xs text-gray-700 dark:text-white">Color : Blue</span>
                                                {/* <span href="#" className="text-xs text-gray-700 dark:text-white">Color : Blue</span> */}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <button type="button" className="inline-flex underline items-center text-xs text-gray-600 hover:underline dark:text-red-500">
                                                    Add to Wishlist
                                                </button>
                                                <button type="button" className="inline-flex underline items-center text-xs text-red-600 hover:underline dark:text-red-500">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="md:h-24 md:w-24 w-full h-60  dark:hidden" src={img4} alt="imac image" />
                                        </a>

                                        <label for="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                {/* <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                    </svg>
                                                </button> */}

                                                <span className="text-xs bg-gray-50 text-black h-9 flex items-center w-12 justify-center">Qty : </span>
                                                <input type="text" id="counter-input" data-input-counter className="w-14 shrink-0 border-0 bg-gray-50 text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="0" required />


                                                {/* <input type="text" id="counter-input-2" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required /> */}
                                                {/* <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button> */}
                                            </div>
                                            <div className="text-end md:order-4 md:w-32">
                                                <p className="text-base font-bold text-gray-900 dark:text-white">&#x20b9;1,000</p>
                                            </div>
                                        </div>

                                        <div>
                                            <a href="#" className="text-xs font-bold text-gray-700 hover:underline dark:text-white">#4346</a>
                                        </div>
                                        <div className="w-full min-w-0 flex-1 space-y-3 md:order-2 md:max-w-md">
                                            <a href="#" className="text-base font-bold text-gray-900 dark:text-white">Flock Fridge Top Cover</a>
                                            <div>
                                                <span href="#" className="block text-xs text-gray-700 dark:text-white">Color : Red</span>
                                                {/* <span href="#" className="text-xs text-gray-700 dark:text-white">Color : Blue</span> */}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <button type="button" className="inline-flex underline items-center text-xs text-gray-600 hover:underline dark:text-red-500">
                                                    Add to Wishlist
                                                </button>
                                                <button type="button" className="inline-flex underline items-center text-xs text-red-600 hover:underline dark:text-red-500">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-base border-b pb-2 border-gray-200 font-semibold text-gray-900 dark:text-white">Price Details</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-sm  font-normal text-gray-500 dark:text-gray-400">Total MRP</dt>
                                            <dd className="text-sm font-medium text-gray-900 dark:text-white">&#x20b9;7,500.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Discount on MRP</dt>
                                            <dd className="text-sm font-medium text-green-600">-&#x20b9;100.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Shipping Fee</dt>
                                            <dd className="text-sm font-medium text-gray-900 dark:text-white">&#x20b9;100</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">GST</dt>
                                            <dd className="text-sm font-medium text-gray-900 dark:text-white">&#x20b9;499</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-sm font-bold text-gray-900 dark:text-white">Total Amount</dt>
                                        <dd className="text-sm font-bold text-gray-900 dark:text-white">&#x20b9;8,999.00</dd>
                                    </dl>
                                </div>

                                <Link to={"/cart/checkout"} className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed to Checkout</Link>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <form className="space-y-4">
                                    <div>
                                        <label for="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                                        <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="" required />
                                    </div>
                                    <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply Code</button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>



        </>


    );
}


export default Cart;