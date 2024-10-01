function AddCategory() {

    return (

        <>
            <div className="bg-gray-100">



                <section class="lg:col-span-2 overflow-x-hidden bg-white dark:bg-gray-900 border boder-gray-900 mx-7">
                    <div class="py-8 px-4 mx-auto max-w-2xl">
                        {/* <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2> */}
                        <form action="#">
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                                    <input type="text" name="name" id="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter category name" required="" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attributes Name</label>
                                    <input type="text" name="name" id="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Attribute name" required="" />
                                </div>
                            </div>
                            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Add Category
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </>

    );



}

export default AddCategory;