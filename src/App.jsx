import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import { featuredPlant, plantCategories } from './data/plants';
import { formatPrice } from './utils/currency';
import pothos from './assets/plants/pothos.svg';
import {
  ArrowRightIcon,
  GiftIcon,
  LeafMark,
  ShieldIcon,
  SproutIcon,
  TruckIcon,
} from './components/Icons';

const pageTitles = {
  '/': 'Paradise Nursery | Plants for a happier home',
  '/plants': 'Shop houseplants | Paradise Nursery',
  '/about': 'Our story | Paradise Nursery',
  '/cart': 'Your cart | Paradise Nursery',
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page not found | Paradise Nursery';
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function LandingPage() {
  return (
    <>
      <section className="landing-page">
        <div className="landing-inner container">
          <div className="landing-copy">
            <span className="eyebrow">
              Online plant atelier <span aria-hidden="true">&middot;</span> Portland, Oregon
            </span>
            <h1 className="landing-title">
              Paradise <em>Nursery</em>
            </h1>
            <p className="landing-lede">
              Handpicked houseplants for slower mornings, softer rooms, and a home that
              feels a little more alive.
            </p>
            <div className="landing-actions">
              <Link to="/plants" className="button button-primary">
                Get Started <ArrowRightIcon />
              </Link>
              <Link to="/about" className="text-link">
                Our story <ArrowRightIcon />
              </Link>
            </div>
            <div className="landing-meta">
              <div>
                <strong>18</strong>
                <span>Plant varieties</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Curated collections</span>
              </div>
              <div>
                <strong>30</strong>
                <span>Day plant guarantee</span>
              </div>
            </div>
          </div>

          <aside className="landing-aside" aria-label="Featured plant">
            <div className="plate-top">
              <span>Botanical study</span>
              <span>No. 01</span>
            </div>
            <figure className="hero-plate">
              <div className="plate-media">
                <img
                  src={featuredPlant.image}
                  alt="Monstera Deliciosa with its signature split leaves"
                  width="800"
                  height="600"
                />
              </div>
              <figcaption className="plate-caption">
                <div>
                  <span className="plate-label">Tropical Favorites</span>
                  <h2>{featuredPlant.name}</h2>
                </div>
                <span className="plate-price">From {formatPrice(featuredPlant.price)}</span>
              </figcaption>
            </figure>
            <Link to="/plants" className="plate-link">
              Shop the collection <ArrowRightIcon />
            </Link>
            <p className="plate-note">
              Every plant ships with a care card written for its species, not a generic
              guide.
            </p>
          </aside>
        </div>
      </section>

      <section className="service-strip" aria-label="The Paradise standard">
        <div className="container service-grid">
          <div className="service-item">
            <TruckIcon />
            <div>
              <strong>Free delivery over $75</strong>
              <span>Carbon-neutral, carefully packed</span>
            </div>
          </div>
          <div className="service-item">
            <GiftIcon />
            <div>
              <strong>A care guide in every box</strong>
              <span>Written for your exact species</span>
            </div>
          </div>
          <div className="service-item">
            <ShieldIcon />
            <div>
              <strong>30-day plant guarantee</strong>
              <span>Real help if your plant struggles</span>
            </div>
          </div>
          <div className="service-item">
            <SproutIcon />
            <div>
              <strong>Grown in Portland</strong>
              <span>By small, family-run growers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-collections" aria-labelledby="home-collections-title">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">The collection</span>
            <div className="section-head-row">
              <h2 id="home-collections-title">Three collections, one greener home.</h2>
              <Link to="/plants" className="text-link">
                Browse all 18 plants <ArrowRightIcon />
              </Link>
            </div>
          </header>

          <div className="collection-index">
            {plantCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/plants#${category.id}`}
                className="collection-entry"
              >
                <div className="collection-entry-media">
                  <img
                    src={category.plants[0].image}
                    alt=""
                    width="800"
                    height="600"
                  />
                </div>
                <div className="collection-entry-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{category.plants.length} plants</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="collection-link">
                  Explore collection <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-story">
        <div className="container home-story-grid">
          <div className="home-story-copy">
            <span className="eyebrow eyebrow-light">Our approach</span>
            <h2>Plants chosen for real rooms, not perfect ones.</h2>
            <p>
              We look for character over perfection: a leaf with a story, a plant that
              tolerates a forgetful week, a shape that makes a quiet corner feel
              considered. Then we tell you exactly how to care for it.
            </p>
            <Link to="/about" className="button button-outline-light">
              Read our story <ArrowRightIcon />
            </Link>
          </div>

          <div className="home-story-side">
            <blockquote className="story-quote">
              &ldquo;A plant should make your life easier, not more complicated.&rdquo;
            </blockquote>
            <p className="story-attribution">Maya Chen, founder of Paradise Nursery</p>
            <dl className="story-facts">
              <div>
                <dt>Est.</dt>
                <dd>2018</dd>
              </div>
              <div>
                <dt>Grown in</dt>
                <dd>Portland</dd>
              </div>
              <div>
                <dt>Delivered</dt>
                <dd>Nationwide</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-grid container">
        <div className="not-found-copy">
          <span className="eyebrow">Error 404</span>
          <h1>This path has grown over.</h1>
          <p>
            The page you are looking for does not exist, but the greenhouse is still
            open.
          </p>
          <Link to="/plants" className="button button-primary">
            Browse the collection <ArrowRightIcon />
          </Link>
        </div>
        <div className="not-found-plate" aria-hidden="true">
          <span>404</span>
          <img src={pothos} alt="" width="800" height="600" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="Paradise Nursery home">
              <span className="brand-mark">
                <LeafMark />
              </span>
              <span className="brand-text">
                Paradise <em>Nursery</em>
              </span>
            </Link>
            <p>
              Handpicked houseplants and thoughtful care guidance for greener, calmer
              homes.
            </p>
            <a href="mailto:hello@paradisenursery.com" className="footer-email">
              hello@paradisenursery.com
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <h3>Shop</h3>
              <Link to="/plants">All plants</Link>
              <Link to="/plants#tropical-favorites">Tropical Favorites</Link>
              <Link to="/plants#easy-care">Succulents &amp; Easy Care</Link>
              <Link to="/plants#blooms-and-calm">Blooms &amp; Calm</Link>
            </div>
            <div>
              <h3>Company</h3>
              <Link to="/about">About us</Link>
              <Link to="/cart">Shopping cart</Link>
              <a href="mailto:hello@paradisenursery.com?subject=Order%20help">Order help</a>
              <span>Mon&ndash;Fri &middot; 9am&ndash;5pm PT</span>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Paradise Nursery. Grown with patience in
            Portland, Oregon.
          </p>
          <p>Free carbon-neutral delivery on every order.</p>
          <Link to="/" className="footer-top-link">
            Back to top &uarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
