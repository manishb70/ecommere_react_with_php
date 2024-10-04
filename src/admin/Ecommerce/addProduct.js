import React from "react";
import img1 from './apron with cap and checks.png'


function AddProdcut() {


    return (

        <>

            <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 gap-6 px-7">
                <section class="lg:col-span-2 bg-white">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        {/* <h2 class="mb-4 text-xl font-bold text-gray-900">Add a new product</h2> */}
                        <form action="#">
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                                    <input type="text" name="name" id="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Type product name" required="" />
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900">Brand</label>
                                    <input type="text" name="brand" id="brand" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Product brand" required="" />
                                </div>
                                <div class="w-full">
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                    <input type="number" name="price" id="price" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="₹ 2999" required="" />
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                    <select id="category" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                        <option selected="">Select category</option>
                                        <option value="TV">Washing Machine Code</option>
                                        <option value="PC">Table Cover</option>
                                        <option value="GA">Fridge Top Cover</option>
                                        <option value="PH">Fridge Mat</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900">Size</label>
                                    <input type="number" name="item-weight" id="item-weight" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="12" required="" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                    <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
                                </div>
                            </div>
                            {/* <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                                Add product
                            </button> */}
                        </form>
                    </div>
                </section>
                <section class="bg-white">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        {/* <h2 class="mb-4 text-xl font-bold text-gray-900">Upload images</h2> */}
                        <form action="#">
                            <div className="flex flex-wrap gap-2 mb-5">
                                <img className="w-40 border border-gray-200 shadow-md p-3 bg-transparent rounded-lg" src={img1} alt="" />
                                <img className="w-40 border border-gray-200 shadow-md p-3 bg-transparent rounded-lg" src={img1} alt="" />
                            </div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Upload Images</label>
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                                Add product
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </>



    );



}


export default AddProdcut;