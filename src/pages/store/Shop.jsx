import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components import
import "./ShopStyle.css";
import "./ShopResponsive.css";

import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

// slice/reducer action import
import { fetchAction } from "../../reducers/SearchFilterProductsSlice";

const Shop = () => {
  //
  const dispatch = useDispatch();

  const [Filter, setFilter] = useState("trending_now");
  const [Products_Counter, setProducts_Counter] = useState(8);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchAction(Filter));
  }, []);

  const { loading, promiseState, productList, error } = useSelector(
    (state) => state.SearchFilterProductsSliceKey
  );

  const showMoreProduct = () => {
    setProducts_Counter((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    if (productList) {
      setProducts(productList.slice(0, Products_Counter));
    }
  }, [productList, Products_Counter]);

  return (
    <>
      <Nav />

      <section className="store">
        <main className="container">
          <div className="store">
            {/* search filter  */}
            <div className="store__search__filter">
              <div className="search__filter__input">
                {/* <i class="bi bi-search"></i> */}
                <input
                  type="search"
                  name="search"
                  placeholder="start typing to filter..."
                />
              </div>
            </div>

            {/* products  */}
            <div className="search__products__show">
              <div className="search__products__show__heading">products:</div>

              <div className="products__show__grid">
                {/* grid */}
                {productList &&
                  promiseState === "fulfilled" &&
                  Products.map((product) => (
                    <div
                      className="products__show__grid__item"
                      key={product.product_id}
                    >
                      <div className="grid__item__img">
                        <img src={product.image_thumbNail} alt="item" />
                      </div>

                      <div className="grid__item__name__rating">
                        <div className="grid__item__name">{product.name}</div>
                        <div className="grid__item__rating" data-id="">
                          <img src="/stars_img_removebg.png" alt="rating" />
                        </div>
                      </div>

                      <div className="grid__item__price__cartBtn">
                        <div className="grid__item__price">{product.price}</div>
                        <div className="grid__item__cartBtn">
                          <p>add to cart</p>
                          <i className="bi bi-bag"></i>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* show more products button  */}
            {productList && (
              <div
                className={`${
                  Products_Counter == productList.length
                    ? "showMore__btn theme_btn btn__disabled"
                    : "showMore__btn theme_btn"
                }`}
                onClick={showMoreProduct}
              >
                show more
              </div>
            )}
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
