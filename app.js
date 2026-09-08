const heroImage = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85';

document.querySelector('#app').innerHTML = `
  <div class="practice-board">
    <header class="tutorial-header">
      <h1>Building a small design system from basic tools</h1>
    </header>

    <section class="hero-panel">
      <div class="hero-copy">
        <p class="eyebrow">FRAME + TEXT</p>
        <h2>Design with intention.</h2>
        <p class="supporting-copy">Frames create the space. Type creates the voice.</p>
        <button class="primary-button">Learn the basics</button>
      </div>

      <div class="hero-visual">
        <img src="${heroImage}" alt="Coffee and pastry still life" />
      </div>
    </section>

    <section class="tool-panel">
      <article class="tool-card shape-card">
        <p class="card-label">SHAPES + COLORS</p>
        <div class="shape-row" aria-label="Color and shape practice examples">
          <span class="shape rect"></span>
          <span class="shape circle"></span>
          <span class="shape triangle"></span>
        </div>
        <p class="card-note">Try fill, stroke, opacity, and corner radius.</p>
      </article>

      <article class="tool-card vector-card">
        <p class="card-label">VECTOR NETWORK</p>
        <div class="vector-box">
          <div class="star-icon" aria-hidden="true"></div>
        </div>
        <p class="card-note">Custom star icon built as a vector.</p>
      </article>

      <article class="tool-card layers-card">
        <p class="card-label">LAYERS + ALIGNMENT</p>
        <div class="layer-stack" aria-label="Layer stacking example">
          <span class="stack-back"></span>
          <span class="stack-middle"></span>
          <span class="stack-front"></span>
        </div>
        <p class="card-note">Stack, align, and reorder objects.</p>
      </article>
    </section>

    <section class="type-panel">
      <div class="type-labels">
        <p class="card-label">TYPE + HIERARCHY</p>
        <p class="type-guide">Use size, weight, and spacing to guide attention.</p>
      </div>

      <div class="type-scale" aria-label="Typography scale examples">
        <p class="heading-example">Heading / 28 px / Semi Bold</p>
        <p class="subheading-example">Subheading / 18 px / Medium</p>
        <p class="body-example">Body / 14 px / Regular</p>
        <p class="caption-example">Caption / 11 px / Uppercase</p>
      </div>
    </section>
  </div>
`;
