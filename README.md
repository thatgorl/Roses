# Welcome to my first README File 🙏

ReadMe for the Rose online store.

## What can you do in the store

- you can contact the store
- you can purchase you chosen arrangemnt
- have it shipped to you

  _Here's a sneak peek 👀_

![New Arrival](src/components/Images/02-5-320x320.jpg)

### Here is a sample of my code:

```javascript
import React from "react";
import products from "./Products"; // Import the products data

// used the map method to render each card.

function ProductPage() {
  return (
    <div id="ProductPage" className="container py-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-2 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h4>{product.price}</h4>
                <a href="#CartPage" className="btn btn-light">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
```
