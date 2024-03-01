import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleProduct } from '../../features/product/ProductApi';
import ReactLoading from 'react-loading';
import ImageCaroussel from './ImageCaroussel';
import { AddProduct } from '../../features/product/ProductSlice';
import toast, { Toaster } from 'react-hot-toast';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const notify = () => toast.success('Produit ajouté au panier.');
  const [product, setProduct] = useState();
  const [selectedColor, setSelectedColor] = useState(null)
  let { productId } = useParams();
  
  useEffect(() => {
    GetSingleProduct(productId)
    .then((response) => setProduct(response))
  }, [])
  
  useEffect(() => console.log(selectedColor), [selectedColor])

  const addToCart = (e) => {
    e.preventDefault();
    const checkItem = products.cart.find(item => item.product.id === parseInt(productId));
    let cart = {
      productId: productId,
      quantity: (checkItem ? checkItem.quantity : 0 ) + 1,
      colorName: selectedColor != null ? selectedColor.name : ""
    };
    dispatch(AddProduct(cart)).then(() => notify());

  }


  return (
    product != null ? 
      <div className="pt-6 py-[100px] backgroundPrimarySection">
        <Toaster
          position="top-left"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: 'Toaster',
            duration: 1000,

            // Default options for specific types
            success: {
              duration: 1500,
              iconTheme: {
                primary: '#FFF',
                secondary: 'black',
              },
            },
          }}
        />
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Link to={products.latestCategory ? "/catalog/" + products.latestCategory : "/catalog"}><button type="submit" className='smallerBtn bgPrimaryColor flex flew-row mb-4'>Retour</button></Link>
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{product.productName}</h1>
                <div className='flex flex-col'>
                  <p className="text-xl font-medium text-gray-900 p-1">{product.reduction > 0 ? product.price - product.reduction : product.price} €</p>
                  {product.reduction > 0 ? <span className="text-base md:text-lg line-through text-[#951D46] bg-[#FFB4CD] rounded-full p-1">{product.price} €</span> : null}
                </div>
              </div>
            </div>
            <ImageCaroussel images={product.productImages}/>
            <div className="mt-8 lg:col-span-5">
              <form onSubmit={(e) => addToCart(e)}>
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            style={{backgroundColor: `#${color.hex}`}}
                            className={classNames(
                              color.bgColor,
                              `h-8 w-8 rounded-full border border-black border-opacity-80`
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bgPrimaryColor px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Ajouter au panier
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  : <div className="backgroundPrimarySection w-[100%] min-h-[70vh] flex justify-center items-center">
      <ReactLoading type={'spinningBubbles'} color={"black"} height={'5%'} width={'5%'} />
    </div> 
  )
}

export default ProductDetails;