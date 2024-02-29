import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

export const Pagination = ({page, setPageFunction, maxPage}) => {

  return (
    <div className="flex items-center justify-between backgroundSecondarySection px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={() => page > 1 ? setPageFunction(page - 1) : null} 
          className="cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 backgroundSecondarySection px-4 py-2 text-sm font-medium colorText hover:bg-gray-50"
        >
          Précédente
        </a>
        <a
          onClick={() => (page + 1) <= maxPage ? setPageFunction(page + 1) : null}
          className="cursor-pointer relative ml-3 inline-flex items-center rounded-md border border-gray-300 backgroundSecondarySection px-4 py-2 text-sm font-medium colorText hover:bg-gray-50"
        >
          Suivante
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button onClick={() => page > 1 ? setPageFunction(page - 1) : null} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only cursor-pointer">Précédente</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button onClick={() => (page + 1) <= maxPage ? setPageFunction(page + 1) : null} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only cursor-pointer">Suivante</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
