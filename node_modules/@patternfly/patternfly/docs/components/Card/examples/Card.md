---
id: Card
section: components
cssPrefix: pf-v5-c-card
---import './Card.css'

## Examples

### Basic

```html
<div class="pf-v5-c-card" id="card-basic-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With image and action

```html
<div class="pf-v5-c-card" id="card-action-example-1">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__header-main">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 706.3 132.5"
        fill="currentColor"
        width="300px"
      >
        <g>
          <path
            d="M197.2,83.9V48.6h15.2c2.2,0,4.1,0.3,5.6,1c1.5,0.7,2.8,1.5,3.7,2.6c1,1.1,1.6,2.3,2.1,3.6
                c0.4,1.3,0.6,2.7,0.6,4c0,0.9-0.1,1.7-0.3,2.6c-0.2,0.9-0.5,1.7-0.9,2.6c-0.4,0.8-0.9,1.6-1.6,2.3c-0.6,0.7-1.4,1.4-2.3,1.9
                c-0.9,0.5-1.9,1-3.1,1.3c-1.2,0.3-2.5,0.5-3.9,0.5h-8.3v13H197.2z M212.7,64.4c0.9,0,1.6-0.1,2.2-0.4c0.6-0.3,1.1-0.6,1.4-1.1
                c0.4-0.4,0.6-0.9,0.8-1.5c0.2-0.6,0.3-1.1,0.3-1.7c0-0.5-0.1-1-0.2-1.6c-0.1-0.5-0.4-1-0.7-1.5c-0.4-0.5-0.8-0.8-1.4-1.1
                c-0.6-0.3-1.4-0.4-2.3-0.4h-8.6v9.4H212.7z"
          />
          <path
            d="M271.6,83.9l-2.7-7.3h-13.6l-2.7,7.3h-7.3l13.5-35.4h6.7l13.5,35.4H271.6z M263.2,61.2
                c-0.2-0.4-0.4-0.9-0.6-1.5c-0.2-0.6-0.4-1.1-0.5-1.7c-0.1,0.5-0.3,1.1-0.5,1.7c-0.2,0.6-0.4,1.1-0.6,1.5l-3.5,9.2h9.2L263.2,61.2z"
          />
          <path d="M317.3,55.2v28.8h-6.8V55.2h-10.1v-6.6h27v6.6H317.3z" />
          <path d="M370.2,55.2v28.8h-6.8V55.2h-10.1v-6.6h27v6.6H370.2z" />
          <path
            d="M408.5,83.9V48.6h24.1v6.5h-17.3v7.4h10.2v6.5h-10.2v8.5h18.4v6.5H408.5z"
          />
          <path
            d="M462.4,83.9V48.6h16.4c2.2,0,4.1,0.3,5.6,0.9c1.5,0.6,2.7,1.4,3.6,2.5c0.9,1,1.6,2.2,2,3.5
                c0.4,1.3,0.6,2.7,0.6,4.2c0,1-0.1,2-0.4,3c-0.3,1-0.7,2-1.3,2.9c-0.6,0.9-1.3,1.8-2.1,2.5c-0.9,0.7-1.8,1.3-3,1.7l6.9,14.1H483
                l-6.6-13.2h-7.1v13.2H462.4z M478.9,64.3c0.9,0,1.6-0.1,2.2-0.4c0.6-0.3,1.1-0.6,1.4-1c0.4-0.4,0.6-0.9,0.8-1.5
                c0.2-0.6,0.2-1.1,0.2-1.7c0-0.6-0.1-1.1-0.2-1.7c-0.1-0.6-0.4-1-0.7-1.5c-0.3-0.4-0.8-0.8-1.4-1c-0.6-0.3-1.4-0.4-2.3-0.4h-9.7v9.2
                H478.9z"
          />
          <path
            d="M541.9,83.9l-14-20.6c-0.2-0.3-0.5-0.8-0.8-1.3c-0.3-0.5-0.5-1-0.7-1.4c0.1,0.4,0.1,0.8,0.1,1.3
                c0,0.5,0,1,0,1.3v20.6h-6.8V48.6h6.4l13.7,20.4c0.2,0.3,0.5,0.7,0.7,1.2c0.3,0.5,0.5,1,0.7,1.4c0-0.5-0.1-1-0.1-1.4
                c0-0.5,0-0.9,0-1.2V48.6h6.8v35.4H541.9z"
          />
          <path
            d="M578.4,83.9V48.6h23.7v6.5h-16.9v7.4H596v6.5h-10.7v15H578.4z"
          />
          <path d="M629.8,83.9V48.6h6.8v28.8h17.1v6.6H629.8z" />
          <path
            d="M686.4,83.9V70.2l-13.1-21.6h7.7l8.7,14.5l8.7-14.5h7.7l-13.1,21.6v13.8H686.4z"
          />
        </g>
        <g>
          <path
            d="M49,103l-21.2,4.9L0,68.4L70,0l70,68.4l-27.8,39.4L91,103l-21,29.5L49,103z M70,128.7l18.6-26.2l-7.2-1.7
                l-11,16.2l-11.9-16.2l-7.2,1.7L70,128.7z M70.4,113.1l9.2-13.5L70,6.7l-9.5,92.9L70.4,113.1z M28.8,105.4l18.8-4.3L33.8,81.7
                l4.1-9.3L25.2,55L58,14.9L2.9,68.7L28.8,105.4z M111.2,105.4l16.3-23.1l9.6-13.6L82,14.9L114.9,55l-12.8,17.4l4.1,9.3L92.4,101
                L111.2,105.4z M90.1,100.5l13.6-19.1l-3-6.9L82.7,98.8L90.1,100.5z M50,100.5l7.3-1.7L39.4,74.5l-3,6.9L50,100.5z M81.9,96.2
                l17.6-24.1L72.9,11.6L81.9,96.2z M58.1,96.2l9-84.6L40.5,72.1L58.1,96.2z M39,70L66.1,8.5L28,55.1L39,70z M101.1,70l11-15L74,8.5
                L101.1,70z"
          />
        </g>
      </svg>
    </div>
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-action-example-1-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-action-example-1-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-action-example-1-check"
          name="card-action-example-1-check"
          aria-labelledby="card-action-example-1"
        />
      </div>
    </div>
  </div>
  <div class="pf-v5-c-card__title">
    <h2
      class="pf-v5-c-card__title-text"
      id="card-action-example-1-check-label"
    >Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With title in head

```html
<div class="pf-v5-c-card" id="card-action-example-2">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-action-example-2-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-action-example-2-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-action-example-2-check"
          name="card-action-example-2-check"
          aria-labelledby="card-action-example-2"
        />
      </div>
    </div>
    <div class="pf-v5-c-card__header-main">
      <div class="pf-v5-c-card__title">
        <h2
          class="pf-v5-c-card__title-text"
          id="card-action-example-2-check-label"
        >This is a really really really really really really really really really really long title</h2>
      </div>
    </div>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With only actions in head (no title/footer)

```html
<div class="pf-v5-c-card" id="card-action-example-3">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-action-example-3-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-action-example-3-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-action-example-3-check"
          name="card-action-example-3-check"
          aria-labelledby="card-action-example-3"
        />
      </div>
    </div>
  </div>
  <div
    class="pf-v5-c-card__body"
    id="card-action-example-3-check-label"
  >This is the card body. There are only actions in the card head.</div>
</div>

```

### Actions with no offset

```html
<div class="pf-v5-c-card" id="card-action-no-offset">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__actions pf-m-no-offset">
      <button class="pf-v5-c-button pf-m-primary" type="button">Action</button>
    </div>
    <div class="pf-v5-c-card__header-main">
      <h1
        class="pf-v5-c-title pf-m-2xl"
        id="card-action-no-offset-check-label"
      >This is a card title</h1>
    </div>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With only image in head

```html
<div class="pf-v5-c-card" id="card-image-head-example">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__header-main">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 706.3 132.5"
        fill="currentColor"
        width="300px"
      >
        <g>
          <path
            d="M197.2,83.9V48.6h15.2c2.2,0,4.1,0.3,5.6,1c1.5,0.7,2.8,1.5,3.7,2.6c1,1.1,1.6,2.3,2.1,3.6
                c0.4,1.3,0.6,2.7,0.6,4c0,0.9-0.1,1.7-0.3,2.6c-0.2,0.9-0.5,1.7-0.9,2.6c-0.4,0.8-0.9,1.6-1.6,2.3c-0.6,0.7-1.4,1.4-2.3,1.9
                c-0.9,0.5-1.9,1-3.1,1.3c-1.2,0.3-2.5,0.5-3.9,0.5h-8.3v13H197.2z M212.7,64.4c0.9,0,1.6-0.1,2.2-0.4c0.6-0.3,1.1-0.6,1.4-1.1
                c0.4-0.4,0.6-0.9,0.8-1.5c0.2-0.6,0.3-1.1,0.3-1.7c0-0.5-0.1-1-0.2-1.6c-0.1-0.5-0.4-1-0.7-1.5c-0.4-0.5-0.8-0.8-1.4-1.1
                c-0.6-0.3-1.4-0.4-2.3-0.4h-8.6v9.4H212.7z"
          />
          <path
            d="M271.6,83.9l-2.7-7.3h-13.6l-2.7,7.3h-7.3l13.5-35.4h6.7l13.5,35.4H271.6z M263.2,61.2
                c-0.2-0.4-0.4-0.9-0.6-1.5c-0.2-0.6-0.4-1.1-0.5-1.7c-0.1,0.5-0.3,1.1-0.5,1.7c-0.2,0.6-0.4,1.1-0.6,1.5l-3.5,9.2h9.2L263.2,61.2z"
          />
          <path d="M317.3,55.2v28.8h-6.8V55.2h-10.1v-6.6h27v6.6H317.3z" />
          <path d="M370.2,55.2v28.8h-6.8V55.2h-10.1v-6.6h27v6.6H370.2z" />
          <path
            d="M408.5,83.9V48.6h24.1v6.5h-17.3v7.4h10.2v6.5h-10.2v8.5h18.4v6.5H408.5z"
          />
          <path
            d="M462.4,83.9V48.6h16.4c2.2,0,4.1,0.3,5.6,0.9c1.5,0.6,2.7,1.4,3.6,2.5c0.9,1,1.6,2.2,2,3.5
                c0.4,1.3,0.6,2.7,0.6,4.2c0,1-0.1,2-0.4,3c-0.3,1-0.7,2-1.3,2.9c-0.6,0.9-1.3,1.8-2.1,2.5c-0.9,0.7-1.8,1.3-3,1.7l6.9,14.1H483
                l-6.6-13.2h-7.1v13.2H462.4z M478.9,64.3c0.9,0,1.6-0.1,2.2-0.4c0.6-0.3,1.1-0.6,1.4-1c0.4-0.4,0.6-0.9,0.8-1.5
                c0.2-0.6,0.2-1.1,0.2-1.7c0-0.6-0.1-1.1-0.2-1.7c-0.1-0.6-0.4-1-0.7-1.5c-0.3-0.4-0.8-0.8-1.4-1c-0.6-0.3-1.4-0.4-2.3-0.4h-9.7v9.2
                H478.9z"
          />
          <path
            d="M541.9,83.9l-14-20.6c-0.2-0.3-0.5-0.8-0.8-1.3c-0.3-0.5-0.5-1-0.7-1.4c0.1,0.4,0.1,0.8,0.1,1.3
                c0,0.5,0,1,0,1.3v20.6h-6.8V48.6h6.4l13.7,20.4c0.2,0.3,0.5,0.7,0.7,1.2c0.3,0.5,0.5,1,0.7,1.4c0-0.5-0.1-1-0.1-1.4
                c0-0.5,0-0.9,0-1.2V48.6h6.8v35.4H541.9z"
          />
          <path
            d="M578.4,83.9V48.6h23.7v6.5h-16.9v7.4H596v6.5h-10.7v15H578.4z"
          />
          <path d="M629.8,83.9V48.6h6.8v28.8h17.1v6.6H629.8z" />
          <path
            d="M686.4,83.9V70.2l-13.1-21.6h7.7l8.7,14.5l8.7-14.5h7.7l-13.1,21.6v13.8H686.4z"
          />
        </g>
        <g>
          <path
            d="M49,103l-21.2,4.9L0,68.4L70,0l70,68.4l-27.8,39.4L91,103l-21,29.5L49,103z M70,128.7l18.6-26.2l-7.2-1.7
                l-11,16.2l-11.9-16.2l-7.2,1.7L70,128.7z M70.4,113.1l9.2-13.5L70,6.7l-9.5,92.9L70.4,113.1z M28.8,105.4l18.8-4.3L33.8,81.7
                l4.1-9.3L25.2,55L58,14.9L2.9,68.7L28.8,105.4z M111.2,105.4l16.3-23.1l9.6-13.6L82,14.9L114.9,55l-12.8,17.4l4.1,9.3L92.4,101
                L111.2,105.4z M90.1,100.5l13.6-19.1l-3-6.9L82.7,98.8L90.1,100.5z M50,100.5l7.3-1.7L39.4,74.5l-3,6.9L50,100.5z M81.9,96.2
                l17.6-24.1L72.9,11.6L81.9,96.2z M58.1,96.2l9-84.6L40.5,72.1L58.1,96.2z M39,70L66.1,8.5L28,55.1L39,70z M101.1,70l11-15L74,8.5
                L101.1,70z"
          />
        </g>
      </svg>
    </div>
  </div>
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With no footer

```html
<div class="pf-v5-c-card" id="card-no-footer-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">This card has no footer</div>
</div>

```

### With no title

```html
<div class="pf-v5-c-card" id="card-no-title-example">
  <div class="pf-v5-c-card__body">This card has no title</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With only a content section

```html
<div class="pf-v5-c-card" id="card-body-example">
  <div class="pf-v5-c-card__body">Body</div>
</div>

```

### With multiple body sections

```html
<div class="pf-v5-c-card" id="card-multiple-body-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### With only one body that fills

```html
<div class="pf-v5-c-card" id="card-body-fill-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>
  <div class="pf-v5-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Compact

```html
<div class="pf-v5-c-card pf-m-compact" id="card-compact-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Large

```html
<div class="pf-v5-c-card pf-m-display-lg" id="card-display-lg-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Selectable

```html
<div class="pf-v5-l-gallery pf-m-gutter">
  <div class="pf-v5-c-card pf-m-selectable" id="card-selectable-example">
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="card-selectable-example-check"
              name="card-selectable-example-check"
              aria-labelledby="card-selectable-example"
            />
            <label
              class="pf-v5-c-check__label"
              for="card-selectable-example-check"
              id="card-selectable-example-check-label"
              name="card-selectable-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div class="pf-v5-c-card__title">
          <h2 class="pf-v5-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-selectable pf-m-disabled"
    id="card-selectable-example-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              disabled
              id="card-selectable-example-disabled-check"
              name="card-selectable-example-disabled-check"
              aria-labelledby="card-selectable-example-disabled"
            />
            <label
              class="pf-v5-c-check__label pf-m-disabled"
              for="card-selectable-example-disabled-check"
              id="card-selectable-example-disabled-check-label"
              name="card-selectable-example-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-selectable-example-disabled-title"
        >
          <h2 class="pf-v5-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-selectable pf-m-selected pf-m-disabled"
    id="card-selectable-example-selected-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              checked
              disabled
              id="card-selectable-example-selected-disabled-check"
              name="card-selectable-example-selected-disabled-check"
              aria-labelledby="card-selectable-example-selected-disabled"
            />
            <label
              class="pf-v5-c-check__label pf-m-disabled"
              for="card-selectable-example-selected-disabled-check"
              id="card-selectable-example-selected-disabled-check-label"
              name="card-selectable-example-selected-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-selectable-example-selected-disabled-title"
        >
          <h2 class="pf-v5-c-card__title-text">Selected but disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>
</div>

```

### Single selectable

```html
<div class="pf-v5-l-gallery pf-m-gutter">
  <div class="pf-v5-c-card pf-m-selectable" id="card-single-selectable-example">
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-radio">
            <input
              class="pf-v5-c-radio__input"
              type="radio"
              id="card-single-selectable-example-radio"
              name="card-single-selectable-example-radio"
              aria-labelledby="card-single-selectable-example"
            />
            <label
              class="pf-v5-c-radio__label"
              for="card-single-selectable-example-radio"
              id="card-single-selectable-example-radio-label"
              name="card-single-selectable-example-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-single-selectable-example-title"
        >
          <h2 class="pf-v5-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-selectable pf-m-disabled"
    id="card-single-selectable-example-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-radio">
            <input
              class="pf-v5-c-radio__input"
              type="radio"
              id="card-single-selectable-example-disabled-radio"
              name="card-single-selectable-example-disabled-radio"
              aria-labelledby="card-single-selectable-example-disabled"
              disabled
            />
            <label
              class="pf-v5-c-radio__label pf-m-disabled"
              for="card-single-selectable-example-disabled-radio"
              id="card-single-selectable-example-disabled-radio-label"
              name="card-single-selectable-example-disabled-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-single-selectable-example-disabled-title"
        >
          <h2 class="pf-v5-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-selectable pf-m-selected pf-m-disabled"
    id="card-single-selectable-example-selected-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-radio">
            <input
              class="pf-v5-c-radio__input"
              type="radio"
              id="card-single-selectable-example-selected-disabled-radio"
              name="card-single-selectable-example-selected-disabled-radio"
              aria-labelledby="card-single-selectable-example-selected-disabled"
              disabled
              checked
            />
            <label
              class="pf-v5-c-radio__label pf-m-disabled"
              for="card-single-selectable-example-selected-disabled-radio"
              id="card-single-selectable-example-selected-disabled-radio-label"
              name="card-single-selectable-example-selected-disabled-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-single-selectable-example-selected-disabled-title"
        >
          <h2 class="pf-v5-c-card__title-text">Selected but disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>
</div>

```

### Clickable

```html
<div class="pf-v5-l-gallery pf-m-gutter">
  <div class="pf-v5-c-card pf-m-clickable" id="card-clickable-example">
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-radio pf-m-standalone">
            <input
              class="pf-v5-c-radio__input pf-v5-screen-reader"
              type="radio"
              id="card-clickable-example-sr-only-radio"
              name="card-clickable-example-sr-only-radio"
              aria-labelledby="card-clickable-example"
            />

            <label
              class="pf-v5-c-radio__label"
              for="card-clickable-example-sr-only-radio"
              id="card-clickable-example-sr-only-radio-label"
              name="card-clickable-example-sr-only-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div class="pf-v5-c-card__title" id="card-clickable-example-title">
          <h2 class="pf-v5-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-clickable pf-m-disabled"
    id="card-clickable-example-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-radio pf-m-standalone">
            <input
              class="pf-v5-c-radio__input pf-v5-screen-reader"
              type="radio"
              id="card-clickable-example-disabled-sr-only-radio"
              name="card-clickable-example-disabled-sr-only-radio"
              aria-labelledby="card-clickable-example-disabled"
              disabled
            />

            <label
              class="pf-v5-c-radio__label pf-m-disabled"
              for="card-clickable-example-disabled-sr-only-radio"
              id="card-clickable-example-disabled-sr-only-radio-label"
              name="card-clickable-example-disabled-sr-only-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-clickable-example-disabled-title"
        >
          <h2 class="pf-v5-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-clickable pf-m-selected pf-m-disabled"
    id="card-clickable-example-selected-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-radio pf-m-standalone">
            <input
              class="pf-v5-c-radio__input pf-v5-screen-reader"
              type="radio"
              id="card-clickable-example-selected-disabled-sr-only-radio"
              name="card-clickable-example-selected-disabled-sr-only-radio"
              aria-labelledby="card-clickable-example-selected-disabled"
              disabled
            />

            <label
              class="pf-v5-c-radio__label pf-m-disabled"
              for="card-clickable-example-selected-disabled-sr-only-radio"
              id="card-clickable-example-selected-disabled-sr-only-radio-label"
              name="card-clickable-example-selected-disabled-sr-only-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-clickable-example-selected-disabled-title"
        >
          <h2 class="pf-v5-c-card__title-text">Selected but disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>
</div>

```

### Clickable and selectable

```html
<div class="pf-v5-l-gallery pf-m-gutter">
  <div
    class="pf-v5-c-card pf-m-clickable pf-m-selectable"
    id="card-clickable-selectable-example"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="card-clickable-selectable-example-check"
              name="card-clickable-selectable-example-check"
              aria-labelledby="card-clickable-selectable-example"
            />
            <label
              class="pf-v5-c-check__label"
              for="card-clickable-selectable-example-check"
              id="card-clickable-selectable-example-check-label"
              name="card-clickable-selectable-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-clickable-selectable-example-title"
        >
          <button
            class="pf-v5-c-button pf-m-link pf-m-inline"
            type="button"
          >Title</button>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-clickable pf-m-selectable pf-m-current"
    id="card-clickable-selectable-current-example"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="card-clickable-selectable-current-example-check"
              name="card-clickable-selectable-current-example-check"
              aria-labelledby="card-clickable-selectable-current-example"
            />
            <label
              class="pf-v5-c-check__label"
              for="card-clickable-selectable-current-example-check"
              id="card-clickable-selectable-current-example-check-label"
              name="card-clickable-selectable-current-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-clickable-selectable-current-example-title"
        >
          <button
            class="pf-v5-c-button pf-m-link pf-m-inline"
            type="button"
          >Current card (clicked)</button>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-clickable pf-m-selectable pf-m-disabled"
    id="card-clickable-selectable-example-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              disabled
              id="card-clickable-selectable-example-disabled-check"
              name="card-clickable-selectable-example-disabled-check"
              aria-labelledby="card-clickable-selectable-example-disabled"
            />
            <label
              class="pf-v5-c-check__label pf-m-disabled"
              for="card-clickable-selectable-example-disabled-check"
              id="card-clickable-selectable-example-disabled-check-label"
              name="card-clickable-selectable-example-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-clickable-selectable-example-disabled-title"
        >
          <button
            class="pf-v5-c-button pf-m-link pf-m-inline pf-m-disabled"
            type="button"
            disabled
          >Disabled card</button>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v5-c-card pf-m-clickable pf-m-selectable pf-m-selected pf-m-disabled"
    id="card-clickable-selectable-example-selected-disabled"
  >
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-card__selectable-actions">
          <div class="pf-v5-c-check">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              checked
              disabled
              id="card-clickable-selectable-example-selected-disabled-check"
              name="card-clickable-selectable-example-selected-disabled-check"
              aria-labelledby="card-clickable-selectable-example-selected-disabled"
            />
            <label
              class="pf-v5-c-check__label pf-m-disabled"
              for="card-clickable-selectable-example-selected-disabled-check"
              id="card-clickable-selectable-example-selected-disabled-check-label"
              name="card-clickable-selectable-example-selected-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-card__header-main">
        <div
          class="pf-v5-c-card__title"
          id="card-clickable-selectable-example-selected-disabled-title"
        >
          <button
            class="pf-v5-c-button pf-m-link pf-m-inline pf-m-disabled"
            type="button"
            disabled
          >Selected but disabled card</button>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>
</div>

```

### Hoverable raised

```html isDeprecated
<div class="pf-v5-c-card pf-m-hoverable-raised" id="card-hoverable-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Selectable raised

```html isDeprecated
<div
  class="pf-v5-c-card pf-m-selectable-raised"
  tabindex="0"
  id="card-selectable-raised-example"
>
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Selected raised

```html isDeprecated
<div
  class="pf-v5-c-card pf-m-selectable-raised pf-m-selected-raised"
  tabindex="0"
  id="card-selected-raised-example"
>
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Selectable raised with a hidden input for improved screen reader accessibility

```html isDeprecated
<input
  class="pf-v5-c-card__sr-input pf-v5-screen-reader"
  type="checkbox"
  tabindex="-1"
  aria-label="Checkbox to improve screen reader accessibility of a selectable card"
/>
<div
  class="pf-v5-c-card pf-m-selectable-raised"
  tabindex="0"
  id="card-selectable-raised-with-input-example"
>
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Non selectable raised

```html isDeprecated
<div
  class="pf-v5-c-card pf-m-non-selectable-raised"
  id="card-non-selectable-raised-example"
>
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Flat

```html
<div class="pf-v5-c-card pf-m-flat" id="card-flat-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Rounded

```html
<div class="pf-v5-c-card pf-m-rounded" id="card-rounded-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Plain

```html
<div class="pf-v5-c-card pf-m-plain" id="card-plain-example">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Expandable

```html
<div class="pf-v5-c-card" id="card-expandable-example">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__header-toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        id="card-expandable-example-toggle"
        aria-labelledby="card-expandable-example-title card-expandable-example-toggle"
      >
        <span class="pf-v5-c-card__header-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-expandable-example-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-expandable-example-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-expandable-example-check"
          name="card-expandable-example-check"
          aria-labelledby="card-expandable-example"
        />
      </div>
    </div>
    <div class="pf-v5-c-card__header-main">
      <div class="pf-v5-c-card__title">
        <h2
          class="pf-v5-c-card__title-text"
          id="card-expandable-example-title"
        >Title</h2>
      </div>
    </div>
  </div>
</div>

```

### Expandable with image

```html
<div class="pf-v5-c-card" id="card-expandable-image-example">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__header-toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        id="card-expandable-image-example-toggle"
        aria-labelledby="card-expandable-image-example-title card-expandable-image-example-toggle"
      >
        <span class="pf-v5-c-card__header-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v5-c-card__header-main">
      <img
        src="/assets/images/pf-logo-small.svg"
        alt="PatternFly logo"
        width="27px"
      />
    </div>
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-expandable-image-example-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-expandable-image-example-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-expandable-image-example-check"
          name="card-expandable-image-example-check"
          aria-labelledby="card-expandable-image-example"
        />
      </div>
    </div>
  </div>
</div>

```

### Expanded

```html
<div class="pf-v5-c-card pf-m-expanded" id="card-expanded-example">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__header-toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        id="card-expanded-example-toggle"
        aria-labelledby="card-expanded-example-title card-expanded-example-toggle"
      >
        <span class="pf-v5-c-card__header-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-expanded-example-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-expanded-example-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-expanded-example-check"
          name="card-expanded-example-check"
          aria-labelledby="card-expanded-example"
        />
      </div>
    </div>
    <div class="pf-v5-c-card__header-main">
      <h2
        class="pf-v5-c-card__title-text"
        id="card-expanded-example-title"
      >Title</h2>
    </div>
  </div>
  <div class="pf-v5-c-card__expandable-content">
    <div class="pf-v5-c-card__body">Body</div>
    <div class="pf-v5-c-card__footer">Footer</div>
  </div>
</div>

```

### Full height card

```html
<div class="pf-v5-c-card pf-m-full-height" id="card-full-height-example">
  <div class="pf-v5-c-card__header">
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-full-height-example-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-full-height-example-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-full-height-example-check"
          name="card-full-height-example-check"
          aria-labelledby="card-full-height-example"
        />
      </div>
    </div>
    <div class="pf-v5-c-card__header-main">
      <div class="pf-v5-c-card__title">
        <h2
          class="pf-v5-c-card__title-text"
          id="card-full-height-example-title&quot;"
        >Title</h2>
      </div>
    </div>
  </div>
  <div class="pf-v5-c-card__body">Body</div>
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

### Expandable toggle on right

```html
<div class="pf-v5-c-card" id="card-toggle-on-right-example">
  <div class="pf-v5-c-card__header pf-m-toggle-right">
    <div class="pf-v5-c-card__actions">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="card-toggle-on-right-example-dropdown-kebab-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="card-toggle-on-right-example-dropdown-kebab-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
            >Action</button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
            >Disabled link</a>
          </li>
          <li role="none">
            <button
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              type="button"
              disabled
            >Disabled action</button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item"
              role="menuitem"
              href="#"
            >Separated link</a>
          </li>
        </ul>
      </div>
      <div class="pf-v5-c-check pf-m-standalone">
        <input
          class="pf-v5-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-toggle-on-right-example-check"
          name="card-toggle-on-right-example-check"
          aria-labelledby="card-toggle-on-right-example"
        />
      </div>
    </div>
    <div class="pf-v5-c-card__header-main">
      <div class="pf-v5-c-card__title">
        <h2
          class="pf-v5-c-card__title-text"
          id="card-toggle-on-right-example-title"
        >Title</h2>
      </div>
    </div>
    <div class="pf-v5-c-card__header-toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        id="card-toggle-on-right-example-toggle"
        aria-labelledby="card-toggle-on-right-example-title card-toggle-on-right-example-toggle"
      >
        <span class="pf-v5-c-card__header-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Card with dividers between sections

```html
<div class="pf-v5-c-card">
  <div class="pf-v5-c-card__title">
    <h2 class="pf-v5-c-card__title-text">Title</h2>
  </div>
  <hr class="pf-v5-c-divider" />
  <div class="pf-v5-c-card__body">Body</div>
  <hr class="pf-v5-c-divider" />
  <div class="pf-v5-c-card__body">Body</div>
  <hr class="pf-v5-c-divider" />
  <div class="pf-v5-c-card__footer">Footer</div>
</div>

```

## Documentation

### Overview

A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.

### Usage

| Class | Applied | Outcome |
| ---- | ---- | ---- |
| `.pf-v5-c-card` | `<div>` | Creates a card component.  **Required** |
| `.pf-v5-c-card__title` | `<div>` | Creates a card title container. |
| `.pf-v5-c-card__title-text` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<div>` | Creates a card title text element. |
| `.pf-v5-c-card__body` | `<div>` | Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `.pf-v5-c-card__body` elements. |
| `.pf-v5-c-card__footer` | `<div>` | Creates the footer of a card. |
| `.pf-v5-c-card__header` | `<div>` | Creates the header of the card where images, actions, and/or the card title can go. |
| `.pf-v5-c-card__header-toggle` | `<div>` | Creates the expandable card toggle. |
| `.pf-v5-c-card__header-toggle-icon` | `<span>` | Creates the expandable card toggle icon. |
| `.pf-v5-c-card__actions` | `<div>` | Creates an actions element to be used in the card header. |
| `.pf-v5-c-card__selectable-actions` | `<div>` | Creates an element to hold a checkbox or radio and the related label used to make a card selectable or clickable. |
| `.pf-v5-c-card__header-main` | `<div>` | Creates a wrapper element to be used in the card header when using an image, logo, or text. **Required if `.pf-v5-c-card__header` has content outside of a card header toggle or card header actions** |
| `.pf-v5-c-card__expandable-content` | `<div>` | Creates the expandable card's expandable content. |
| `.pf-v5-c-card__sr-input` | `<input>` | Creates an input which, when focused, makes a following `.pf-v5-c-card` appear focused. |
| `.pf-m-compact` | `.pf-v5-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred. |
| `.pf-m-display-lg` | `.pf-v5-c-card` | Creates a large variation of the card component that involves larger font sizes and spacing. This variation is for marketing use cases. |
| `.pf-m-no-fill` | `.pf-v5-c-card__body` | Sets a `.pf-v5-c-card__body` not to fill the available space in `.pf-v5-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-selectable` | `.pf-v5-c-card` | Modifies a card to be selectable.  |
| `.pf-m-clickable` | `.pf-v5-c-card` | Modifies a card to be clickable. |
| `.pf-m-selected` | `.pf-v5-c-card` | Modifies a selectable card for selected state styling. Can be used in addition to indicating selection via the `.pf-v5-c-card__input`. |
| `.pf-m-current` | `.pf-v5-c-card` | Modifies a card that is both clickable and selectable for clicked state styling. |
| `.pf-m-disabled` | `.pf-v5-c-card` | Modifies a card so it is not selectable or clickable.  |
| `.pf-m-hoverable-raised` | `.pf-v5-c-card` | Modifies the card to include hover styles on `:hover`. |
| `.pf-m-selectable-raised` | `.pf-v5-c-card` | Modifies a selectable card so that it is selectable. |
| `.pf-m-selected-raised` | `.pf-v5-c-card.pf-m-selectable-raised` | Modifies a selectable card for the selected state. |
| `.pf-m-non-selectable-raised` | `.pf-v5-c-card` | Modifies a selectable card so that it is not selectable. |
| `.pf-m-flat` | `.pf-v5-c-card` | Modifies the card to have a border instead of a shadow. `.pf-m-flat` is for use in layouts where cards are against a white background. |
| `.pf-m-rounded` | `.pf-v5-c-card` | Modifies the card to have rounded corners. |
| `.pf-m-plain` | `.pf-v5-c-card` | Modifies the card to have no box shadow and no background color. |
| `.pf-m-expanded` | `.pf-v5-c-card` | Modifies the card for the expanded state. |
| `.pf-m-toggle-right` | `.pf-v5-c-card__header` | Modifies the expandable card header toggle to be positioned at flex-end. |
| `.pf-m-full-height` | `.pf-v5-c-card` | Modifies the card to full height of its parent. |
| `.pf-m-no-offset` | `.pf-v5-c-card__actions` | Removes the negative vertical margins on the actions element intended to align the action content with the card title. |
