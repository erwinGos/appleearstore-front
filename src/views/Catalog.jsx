import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { GetAllColors } from '../features/color/ColorSlice';
import { GetAllBrands } from '../features/brand/brandSlice';
import { GetProducts } from '../features/product/ProductSlice';
import { setLatestCategory } from '../features/product/ProductSlice';
import ProductCard from '../components/Product/ProductCard';

import { Pagination } from '../components/Pagination';

const Catalog = () => {
  const { categoryName } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const dispatch = useDispatch();

  const [filters, setFilters] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  
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
    dispatch(GetAllColors({page: 1, maxResult: 20})).then((res) => {
      colorOptions.options = res.payload
      dispatch(GetAllBrands({page: 1, maxResult: 20})).then((response) => {
        brandOptions.options = response.payload
        setFilters([colorOptions, brandOptions])
      });
    });
  }, [])

  useEffect(() => {
    if(products.maxPages < 1) {
      SearchForProducts()
    }
    dispatch(setLatestCategory({ categoryName : categoryName ? categoryName : ""}))
  }, [])

  const SearchForProducts = (e) => {
    if(e) {
      e.preventDefault()
    }
    dispatch(GetProducts({page: page, maxResult: maxResult, brands : brandList, colors: colorList, categories: [categoryName]}))
  }

  const resetAndResearch = () => {
    dispatch(GetProducts({page: page, maxResult: maxResult, brands : [], colors: [], categories: [categoryName]})).then((res) => {
      setBrandList([])
      setColorList([])
    })
  }

  const setPageFunction = (page) => {
    setPage(page)
    SearchForProducts()
  };
  
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
      <div className="min-h-[100vh] h-auto backgroundSecondarySection">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium colorText">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 secondaryText"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Fermer l'onglet</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 secondaryText hover:colorText">
                                <span className="colorText">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className={`h-4 w-4 rounded border-gray-300 secondaryText focus:ring-0 focus:none`}
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 colorText"
                                    >
                                      {option.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
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
              <label htmlFor="results" className="block text-sm font-medium leading-6 text-gray-900">
                Résultats
              </label>
              <select
                id="results"
                name="results"
                className="mt-2 block w-[70%] rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="10"
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
                      <legend className="block text-sm font-medium colorText">{section.name}</legend>
                      <div className="space-y-3 pt-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.id} className="flex items-center">
                            <input
                              id={option.id}
                              name={option.name}
                              defaultValue={option.name}
                              type="checkbox"
                              checked={checkIfCheckedCheckBox(section.id, option.name)}
                              className={`h-4 w-4 rounded border-gray-300 secondaryText focus:ring-0 focus:none`}
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
                <div className='flex'>
                  <button type="submit" className='smallerBtn bgPrimaryColor flex flew-row w-[30%] m-1'>Actualiser</button>
                  <button onClick={() => resetAndResearch()} className='smallerBtn bgSecondaryColor w-[30%] m-1'>Reset</button>
                </div>
              </form>
            </div>
          </aside>
          <div className='text-center w-full col-span-3 flex flex-col items-center'>
            <Pagination setPageFunction={setPageFunction} page={page} maxPage={products.maxPages}/>
            {/* Product section */}
            {products.maxPages == 0 || (products.products.length < 1 && products.loading == false) ?
              <div className='text-center w-full col-span-3'>
                <span className='colorText'>Aucun produit trouvé correspondant à vos recherches. {!categoryName ?? "Catégorie demandée : " + categoryName}</span>
              </div> : 
              !products.loading ? 
              <div className="col-span-3">
              {/* Ici, ajoutez le contenu de votre seconde grille qui prendra 75% de la largeur */}
                  <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.products.map((product, index) => (
                      <div key={index} className='flex items-center'>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
              </div> : <ReactLoading type={'spinningBubbles'} color={"black"} height={'5%'} width={'5%'} />
            }
          </div>

        </div>
      </main>
    </div>
    );
    };
    
export default Catalog;