import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { plantCategories } from '../data/plants';
import { addItem, selectCartItems } from '../redux/CartSlice';
import { formatPrice } from '../utils/currency';
import { ArrowRightIcon, CheckIcon } from './Icons';

function ProductCard({ plant, isInCart, onAdd }) {
  const titleId = `plant-title-${plant.id}`;

  return (
    <article className="product-card" aria-labelledby={titleId}>
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={plant.image}
          alt={`${plant.name} botanical illustration`}
          width="800"
          height="600"
          decoding="async"
        />
        {isInCart && (
          <span className="product-badge">
            <CheckIcon /> In cart
          </span>
        )}
      </div>

      <div className="product-card-body">
        <div className="product-title-row">
          <h3 id={titleId}>{plant.name}</h3>
          <span className="product-price">{formatPrice(plant.price)}</span>
        </div>
        <p className="product-description">{plant.description}</p>
        <p className="product-specs">
          {plant.light} <span aria-hidden="true">&middot;</span> {plant.care} care
        </p>
        <button
          type="button"
          className={`add-to-cart${isInCart ? ' is-added' : ''}`}
          onClick={() => onAdd(plant)}
          disabled={isInCart}
          aria-label={isInCart ? `${plant.name} is already in your cart` : `Add ${plant.name} to cart`}
        >
          {isInCart ? (
            <>
              <CheckIcon /> Added to cart
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cartIds = useMemo(() => new Set(cartItems.map((item) => item.id)), [cartItems]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <header className="collection-header">
        <div className="collection-header-grid container">
          <div className="collection-header-copy">
            <span className="eyebrow">The collection <span aria-hidden="true">&middot;</span> 2026</span>
            <h1>Plants for the way you live.</h1>
          </div>
          <div className="collection-header-aside">
            <p>
              Eighteen handpicked houseplants, grouped by the kind of green you are
              craving. Every order includes a care card written for your plant&apos;s
              exact needs.
            </p>
            <dl className="collection-meta">
              <div>
                <dt>Varieties</dt>
                <dd>18</dd>
              </div>
              <div>
                <dt>Collections</dt>
                <dd>03</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>Free over $75</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="category-nav-wrap">
        <nav className="category-nav container" aria-label="Plant categories">
          <span className="category-nav-label">Browse by</span>
          {plantCategories.map((category, index) => (
            <a key={category.id} href={`#${category.id}`} className="category-link">
              <span className="category-num">{String(index + 1).padStart(2, '0')}</span>
              {category.name}
              <span className="category-total">({category.plants.length})</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="container">
        {plantCategories.map((category, index) => (
          <section key={category.id} id={category.id} className="category-section">
            <header className="category-heading">
              <span className="category-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="category-heading-copy">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <span className="category-count">{category.plants.length} plants</span>
            </header>

            <div className="product-grid">
              {category.plants.map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  isInCart={cartIds.has(plant.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="care-note" aria-labelledby="care-note-title">
          <span className="care-note-index">Need a hand?</span>
          <div className="care-note-body">
            <h2 id="care-note-title">Not sure where to start?</h2>
            <p>
              Begin with a ZZ Plant, Golden Pothos, or Snake Plant. They forgive missed
              waterings and adapt beautifully to almost any light.
            </p>
          </div>
          <Link to="/about" className="text-link">
            Meet the nursery <ArrowRightIcon />
          </Link>
        </section>
      </div>
    </div>
  );
}
