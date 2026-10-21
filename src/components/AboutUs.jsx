import { Link } from 'react-router-dom';
import monstera from '../assets/plants/monstera-deliciosa.svg';
import { ArrowRightIcon } from './Icons';

const values = [
  {
    title: 'Thoughtful sourcing',
    text: 'We work with small, family-run growers who raise plants slowly and treat them well. Every variety is chosen for beauty, resilience, and long-term happiness indoors.',
  },
  {
    title: 'Care that travels home',
    text: 'Each order includes a care card written for that exact plant, plus access to our plant care team. We would rather answer a question than replace a plant.',
  },
  {
    title: 'A lighter footprint',
    text: 'Our boxes are recycled and recyclable, our pots are chosen to last, and every delivery is carbon-neutral. Small choices add up to a greener everyday.',
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-grid container">
          <div className="about-hero-copy">
            <span className="eyebrow eyebrow-light">
              Our story <span aria-hidden="true">&middot;</span> Est. 2018
            </span>
            <h1>Plants, grown with patience.</h1>
            <p>
              Paradise Nursery began in a small Portland apartment with one windowsill,
              three rescue plants, and a simple idea: plant parenthood should feel
              joyful, not intimidating.
            </p>
            <Link to="/plants" className="button button-light">
              Explore the collection <ArrowRightIcon />
            </Link>
          </div>

          <figure className="about-hero-plate">
            <span className="about-plate-index">Portland, Oregon / 2018</span>
            <img
              src={monstera}
              alt="Botanical illustration of a Monstera Deliciosa"
              width="800"
              height="600"
            />
            <figcaption>
              <span>The first windowsill</span>
              <span>No. 01</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story-grid container">
          <div className="about-story-copy">
            <span className="eyebrow">Rooted in care</span>
            <h2 id="about-story-title">From one windowsill to twelve thousand homes.</h2>
          </div>
          <div className="about-story-body">
            <p>
              What started as a weekend hobby became a tiny online shop, then a
              family-run nursery with a team of growers, plant lovers, and very patient
              packers. Today we ship handpicked houseplants to homes across the country.
            </p>
            <p>
              We remain deliberately small in spirit. Every plant is inspected by hand,
              every collection is curated around real rooms and real routines, and every
              customer gets a real person on the other end of the message.
            </p>
          </div>
        </div>

        <dl className="about-facts container">
          <div className="about-fact">
            <dt>01</dt>
            <dd>
              <strong>18</strong>
              <span>handpicked plant varieties</span>
            </dd>
          </div>
          <div className="about-fact">
            <dt>02</dt>
            <dd>
              <strong>12k+</strong>
              <span>homes made greener</span>
            </dd>
          </div>
          <div className="about-fact">
            <dt>03</dt>
            <dd>
              <strong>4.9/5</strong>
              <span>average plant parent rating</span>
            </dd>
          </div>
          <div className="about-fact">
            <dt>04</dt>
            <dd>
              <strong>100%</strong>
              <span>carbon-neutral deliveries</span>
            </dd>
          </div>
        </dl>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">What we stand for</span>
            <div className="section-head-row">
              <h2 id="about-values-title">Good plants, grown with good intentions.</h2>
              <p>
                The way a plant reaches your home matters as much as how it looks when
                it arrives.
              </p>
            </div>
          </header>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <article className="about-value" key={value.title}>
                <span className="about-value-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-voices">
        <div className="about-voices-grid container">
          <div className="about-quote">
            <span className="quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              A plant is not decor. It is a small daily reminder to slow down and pay
              attention.
            </blockquote>
            <p>Maya Chen, founder of Paradise Nursery</p>
          </div>

          <div className="about-contact">
            <span className="eyebrow">Say hello</span>
            <h2>Talk plants with us.</h2>
            <p>
              Questions about light, watering, or finding the right plant for your space?
              Our care team answers every note personally.
            </p>
            <a href="mailto:hello@paradisenursery.com" className="contact-email">
              hello@paradisenursery.com
            </a>
            <span className="about-hours">Monday&ndash;Friday &middot; 9am&ndash;5pm PT</span>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner container">
          <div>
            <span className="eyebrow eyebrow-light">Ready when you are</span>
            <h2>Bring a little paradise home.</h2>
          </div>
          <Link to="/plants" className="button button-light">
            Shop all plants <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
