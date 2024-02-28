import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { GetAllColors } from '../features/color/ColorSlice';
import { GetAllBrands } from '../features/brand/brandSlice';
import { GetProducts } from '../features/product/ProductSlice';
import ProductCard from '../components/ProductCard';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Catalog = () => {
  const { categoryName } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const dispatch = useDispatch();

  const [filters, setFilters] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [productList, setProductList] = useState([]);
  
  const products = useSelector(state => state.products);
  const [page, setPage] = useState(1);
  const [maxResult, setMaxResult] = useState(10);

  useEffect(() => {
    let colorOptions = {
      id: 'colors',
      name: "Couleurs",
      options : {}
    }
    let brandOptions = {
      id: 'brands',
      name: "Marques",
      options : {}
    }
    dispatch(GetAllColors({page: 1, maxResult: 10})).then((res) => {
      colorOptions.options = res.payload
      dispatch(GetAllBrands({page: 1, maxResult: 10})).then((response) => {
        brandOptions.options = response.payload
        setFilters([colorOptions, brandOptions])
      });
    });
  }, [])

  useEffect(() => {
    dispatch(GetProducts({page: page, maxResult: maxResult, brands : brandList, colors: colorList, categories: [categoryName]})).then((res) => {
      setProductList(res.payload)
    })
  }, [])

  const SearchForProducts = (e) => {
    e.preventDefault()
    dispatch(GetProducts({page: page, maxResult: maxResult, brands : brandList, colors: colorList, categories: [categoryName]})).then((res) => {
      setProductList(res.payload)
    })
  }

  const resetAndResearch = () => {
    dispatch(GetProducts({page: page, maxResult: maxResult, brands : [], colors: [], categories: [categoryName]})).then((res) => {
      setBrandList([])
      setColorList([])
      setProductList(res.payload)
    })
  }

  const checkIfCheckedCheckBox = (filterName, data) => {
    switch(filterName) {
      case 'brands':
        let indexBrand = brandList.findIndex(brand => brand == data);
        if(indexBrand >= 0) {
          return true
        } else {
          return false
        }
      case 'colors':
        let indexColors = colorList.findIndex(color => color == data);
        if(indexColors >= 0) {
          return true
        } else {
          return false
        }
    }
  }

  const AddToFilters = (filterName, data) => {
    switch(filterName) {
      case 'brands':
        let copyBrand = [...brandList];
        let indexBrand = copyBrand.findIndex(brand => brand == data);
        if(indexBrand >= 0) {
          copyBrand.splice(indexBrand, 1);
        } else {
          copyBrand.push(data)
        }
        setBrandList(copyBrand);
        break;
      case 'colors':
        let copyColor = [...colorList];
        let indexColor = copyColor.findIndex(brand => brand == data);
        if(indexColor >= 0) {
          copyColor.splice(indexColor, 1);
        } else {
          copyColor.push(data)
        }
        setColorList(copyColor);
        break;
    }
  };

    return (
      <div className="min-h-[100vh] h-auto bg-white">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 xl:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form onSubmit={(e) => SearchForProducts(e)} className="mt-4">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.name} className="border-t border-gray-200 pb-4 pt-4">
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pb-2 pt-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => {(
                                <div key={option.id} className="flex items-center">
                                  <input
                                    id={option.id}
                                    name={option.name}
                                    defaultValue={option.name}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 colorText focus:ring-0 focus:none"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.name}
                                  </label>
                                </div>
                              )})}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                  <button type="submit" className='m-4 smallerBtn bgPrimaryColor w-[80%]'>Actualiser</button>
                  <button onClick={() => resetAndResearch()} className='m-4 smallerBtn bgSecondaryColor w-[80%]'>Reset</button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-2xl px-8 sm:px-6 md:max-w-7xl xl:px-8">

        <div className="pt-12 pb-12 flex flex-col	justify-center sm:grid sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4">
          <aside className="col-span-1">
            <h2 className="sr-only">Filtres</h2>

            <button
              type="button"
              className="inline-flex items-center xl:hidden p-4"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-md colorText">Filtres</span>
              <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 colorText" aria-hidden="true" />
            </button>
                                  
            <div className="hidden xl:block">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <select
                id="location"
                name="location"
                className="mt-2 block w-[70%] rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="25"
                onChange={(e) => setMaxResult(e.target.value)}
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <form onSubmit={(e) => SearchForProducts(e)} className="space-y-10 divide-y divide-gray-200">
                {filters.map((section, sectionIdx) => (
                  <div key={section.name} className="pt-10">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                      <div className="space-y-3 pt-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.id} className="flex items-center">
                            <input
                              id={option.id}
                              name={option.name}
                              defaultValue={option.name}
                              type="checkbox"
                              checked={checkIfCheckedCheckBox(section.id, option.name)}
                              className={`h-4 w-4 rounded border-gray-300 colorText focus:ring-0 focus:none`}
                              onChange={() => AddToFilters(section.id, option.name)}
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}-mobile`}
                              className="ml-3 text-sm text-gray-500"
                            >
                              {option.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
                <button type="submit" className='smallerBtn bgPrimaryColor flex flew-row w-[30%] m-1'>Actualiser</button>
                <button onClick={() => resetAndResearch()} className='smallerBtn bgSecondaryColor w-[30%] m-1'>Reset</button>
              </form>
            </div>
          </aside>
        {/* Product section */}
        {productList.length > 1 ?
        <div className="col-span-3">
          {/* Ici, ajoutez le contenu de votre seconde grille qui prendra 75% de la largeur */}
            <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productList.map((product, index) => (
                <div key={index} className='flex items-center'>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
        </div> :
        <div className='text-center w-full col-span-3'>
          <span className=''>Aucun produit trouvé correspondant à vos recherches. {!categoryName ?? "Catégorie demandée : " + categoryName}</span>
        </div>}
        </div>
      </main>
    </div>
    );
    };
    
export default Catalog;