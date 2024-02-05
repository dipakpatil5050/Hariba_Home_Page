# Table data for Shopping cart

````javascript

          <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subtotal
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Remove</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="h-10 w-10 rounded-md object-contain object-center"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="h-7 w-7 flex items-center"
                            onClick={() => {
                              const cartItem = cartItems.find(
                                (product) => product.id === item.id
                              );
                              if (cartItem.quantity === 1) {
                                handleRemoveFromCart(item);
                              } else {
                                removeFromCart(item);
                              }
                            }}
                          >
                            -
                          </button>
                          {/* <input
                            type="number"
                            min="1"
                            max="1000"
                            className="mx-1 h-7 w-9 p-2 rounded-md border text-center form-control"
                            value={item.quantity}
                            onChange={handleInputChange}
                          /> */}

                          <p className="border p-3">{item.quantity}</p>

                          <button
                            type="button"
                            className="flex h-7 w-7 items-center justify-center"
                            onClick={() => {
                              addToCart(item);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ₹{item.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ₹{item.price * item.quantity}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Trash size={10} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
       ```

# SubTotal code

```javascript
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">₹{item.price * item.quantity}</div>
</td>
````
