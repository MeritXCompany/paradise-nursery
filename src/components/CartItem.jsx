import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  selectCartItems,
  selectCartTotal,
  selectTotalQuantity,
  updateQuantity,
} from '../redux/CartSlice';
import { formatPrice } from '../utils/currency';
import pothos from '../assets/plants/pothos.svg';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GiftIcon,
  MinusIcon,
  PlusIcon,
  ShieldIcon,
  TrashIcon,
  TruckIcon,
} from './Icons';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartTotal = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleCheckout = () => {
    setCheckoutMessage('Checkout is coming soon. Your plants are waiting safely in your cart.');
  };

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart-page">
        <div className="empty-cart-grid container">
          <div className="empty-cart-copy">
            <span className="eyebrow">
              Your cart <span aria-hidden="true">&middot;</span> 00 items
            </span>
            <h1>There is room for something green.</h1>
            <p>
              Your cart is empty right now. Explore our tropical favorites, easy-care
              succulents, and calm blooming plants to find the one that feels like home.
            </p>
            <div className="empty-cart-actions">
              <Link to="/plants" className="button button-primary">
                Browse the collection <ArrowRightIcon />
              </Link>
              <Link to="/" className="text-link">
                <ArrowLeftIcon /> Back to home
              </Link>
            </div>
          </div>
          <figure className="empty-cart-plate">
            <span className="empty-cart-plate-index">Botanical study &middot; No. 07</span>
            <img
              src={pothos}
              alt="Botanical illustration of a Golden Pothos"
              width="800"
              height="600"
            />
            <figcaption>Golden Pothos &middot; Easy care</figcaption>
          </figure>
        </div>
      </section>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <header className="cart-header">
          <div>
            <span className="eyebrow">
              Your selections <span aria-hidden="true">&middot;</span> {totalQuantity}{' '}
              {totalQuantity === 1 ? 'plant' : 'plants'}
            </span>
            <h1>Your cart</h1>
            <p>Everything here is ready to make your space a little greener.</p>
          </div>
          <Link to="/plants" className="text-link cart-continue-top">
            <ArrowLeftIcon /> Continue shopping
          </Link>
        </header>

        <div className="cart-layout">
          <section className="cart-list" aria-label="Items in your shopping cart">
            <div className="cart-list-head" aria-hidden="true">
              <span>Plant</span>
              <span>Unit price</span>
              <span>Quantity</span>
              <span>Item total</span>
            </div>

            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-item-product">
                  <div className="cart-item-media">
                    <img
                      src={item.image}
                      alt={`${item.name} botanical illustration`}
                      width="800"
                      height="600"
                    />
                  </div>

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <button
                      type="button"
                      className="remove-link"
                      onClick={() => dispatch(removeItem(item.id))}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <TrashIcon /> Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-unit">
                  <span className="control-label">Unit price</span>
                  <strong>{formatPrice(item.price)}</strong>
                </div>

                <div className="cart-item-quantity">
                  <span className="control-label">Quantity</span>
                  <div className="quantity-stepper">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id, quantity: item.quantity - 1 }),
                        )
                      }
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <MinusIcon />
                    </button>
                    <span className="quantity-value" aria-live="polite">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id, quantity: item.quantity + 1 }),
                        )
                      }
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <span className="control-label">Item total</span>
                  <strong>{formatPrice(item.price * item.quantity)}</strong>
                </div>
              </article>
            ))}
          </section>

          <aside className="order-summary" aria-labelledby="order-summary-title">
            <div className="summary-heading">
              <h2 id="order-summary-title">Order summary</h2>
              <span className="summary-count">{totalQuantity} items</span>
            </div>

            <dl className="summary-list">
              <div className="summary-row">
                <dt>Subtotal</dt>
                <dd>{formatPrice(cartTotal)}</dd>
              </div>
              <div className="summary-row">
                <dt>Delivery</dt>
                <dd className="summary-free">Free</dd>
              </div>
              <div className="summary-row">
                <dt>Plant care guide</dt>
                <dd>Included</dd>
              </div>
              <div className="summary-row summary-total">
                <dt>Total</dt>
                <dd>{formatPrice(cartTotal)}</dd>
              </div>
            </dl>

            <button
              type="button"
              className="button button-primary button-full checkout-button"
              onClick={handleCheckout}
            >
              Checkout <ArrowRightIcon />
            </button>

            <p className="checkout-message" role="status" aria-live="polite">
              {checkoutMessage}
            </p>

            <Link to="/plants" className="button button-outline button-full">
              Continue Shopping
            </Link>

            <p className="summary-note">
              <ShieldIcon /> 30-day happiness guarantee on every plant.
            </p>
          </aside>
        </div>

        <div className="cart-assurance">
          <div className="assurance-item">
            <TruckIcon />
            <div>
              <strong>Free, carbon-neutral delivery</strong>
              <span>Packaged with recycled and compostable materials.</span>
            </div>
          </div>
          <div className="assurance-item">
            <GiftIcon />
            <div>
              <strong>A care card in every box</strong>
              <span>Simple watering and light notes for your exact plant.</span>
            </div>
          </div>
          <div className="assurance-item">
            <ShieldIcon />
            <div>
              <strong>Arrives healthy, guaranteed</strong>
              <span>If your plant struggles, we will make it right.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
