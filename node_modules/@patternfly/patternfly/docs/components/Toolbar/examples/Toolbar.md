---
id: Toolbar
section: components
cssPrefix: pf-v5-c-toolbar
---import './Toolbar.css'

## Introduction

Toolbar relies on groups (`.pf-v5-c-toolbar__group`) and items (`.pf-v5-c-toolbar__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-v5-c-toolbar--spacer--base`, whose value is `--pf-v5-global--spacer--md` or 16px.

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v5-c-toolbar__item` | `--pf-v5-c-toolbar__item--spacer` | `16px` |
| `.pf-v5-c-toolbar__group` | `--pf-v5-c-toolbar__group--spacer` | `16px` |

### Toolbar item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-bulk-select` | `.pf-v5-c-toolbar__item` | Initiates bulk select spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-bulk-select--spacer)`. |
| `.pf-m-overflow-menu` | `.pf-v5-c-toolbar__item` | Initiates overflow menu spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-overflow-menu--spacer)`. |
| `.pf-m-pagination` | `.pf-v5-c-toolbar__item` | Initiates pagination spacing and margin. Spacer value is set to `var(--pf-v5-c-toolbar--m-pagination--spacer)`. |
| `.pf-m-search-filter` | `.pf-v5-c-toolbar__item` | Initiates search filter spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-search-filter--spacer)`. |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align right, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align left, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-items-start` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align children to flex-start. |
| `.pf-m-align-items-center` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align children to center. |
| `.pf-m-align-items-baseline` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group to vertically align children to baseline. |
| `.pf-m-align-self-start` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to flex-start. |
| `.pf-m-align-self-center` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to center. |
| `.pf-m-align-self-baseline` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to baseline. |

### Special notes

Several components in the following examples do not include functional and/or accessibility specifications (for example `.pf-v5-c-select`, `.pf-v5-c-options-menu`). Rather, `.pf-v5-c-toolbar` focuses on functionality and accessibility specifications that apply to it only.

**Available [breakpoints](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) are: `-on-sm`, `-on-md`, `-on-lg`, `-on-xl`, and `-on-2xl`.**

## Examples

### Simple

```html
<div class="pf-v5-c-toolbar" id="toolbar-simple-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div class="pf-v5-c-toolbar__group">
        <div class="pf-v5-c-toolbar__item">Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-v5-c-toolbar__group` | `<div>` | Initiates the toolbar component group. |

### Spacers

In some instances, it may be necessary to adjust spacing explicitly where items are hidden/shown. For example, if a `.pf-m-toggle-group` is adjacent to an element being hidden/shown, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}` and `.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`. These modifiers will overwrite existing modifiers provided by `.pf-v5-c-toolbar`.

### Adjusted spacers

```html
<div class="pf-v5-c-toolbar" id="toolbar-spacer-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item pf-m-spacer-none">Item</div>
      <div class="pf-v5-c-toolbar__item pf-m-spacer-sm">Item</div>
      <div class="pf-v5-c-toolbar__item pf-m-spacer-md">Item</div>
      <div class="pf-v5-c-toolbar__item pf-m-spacer-lg">Item</div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div
        class="pf-v5-c-toolbar__item pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl"
      >Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Adjusted group spacers

```html
<div class="pf-v5-c-toolbar" id="toolbar-group-spacer-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group pf-m-space-items-lg">
        <div class="pf-v5-c-toolbar__item">Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div
        class="pf-v5-c-toolbar__group pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl"
      >
        <div class="pf-v5-c-toolbar__item">Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
      </div>
    </div>
  </div>
</div>

```

### Insets

```html
<div
  class="pf-v5-c-toolbar pf-m-inset-none pf-m-inset-md-on-md pf-m-inset-2xl-on-lg"
  id="toolbar-inset-example"
>
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group">
        <div class="pf-v5-c-toolbar__item">Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Page insets

```html
<div class="pf-v5-c-toolbar pf-m-page-insets" id="toolbar-page-insets-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group">
        <div class="pf-v5-c-toolbar__item">Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Toolbar spacers and insets

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-page-insets` | `.pf-v5-c-toolbar` | Modifies toolbar insets to match page section, table, page header or any other component whose inset shifts from `--pf-v5-global--spacer--md` to `--pf-v5-global--spacer--lg` at the `xl` breakpoint. |
| `.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group` | Modifies toolbar group child spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar` | Modifies toolbar horizontal padding at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

### Width control

```html
<div class="pf-v5-c-toolbar" id="toolbar-width-control">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group">
        <div
          class="pf-v5-c-toolbar__item"
          style="--pf-v5-c-toolbar__item--Width: 80px; --pf-v5-c-toolbar__item--Width-on-xl: 10rem"
        >Item</div>
        <div class="pf-v5-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-v5-c-divider pf-m-vertical" />
      <div class="pf-v5-c-toolbar__item">Item</div>
      <div class="pf-v5-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Width control usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v5-c-toolbar__item--Width{-on-[breakpoint]}: {width}` | `.pf-v5-c-toolbar__item` |  Modifies the width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-v5-c-toolbar__item--MinWidth{-on-[breakpoint]}: {width}` | `.pf-v5-c-toolbar__item` |  Modifies the min width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

### Group types

```html
<div class="pf-v5-c-toolbar" id="toolbar-group-types-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group pf-m-filter-group">
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-group-types-example-toggle-1"
          >
            <span class="pf-v5-c-menu-toggle__text">Filter 1</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-group-types-example-toggle-2"
          >
            <span class="pf-v5-c-menu-toggle__text">Filter 2</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-group-types-example-toggle-3"
          >
            <span class="pf-v5-c-menu-toggle__text">Filter 3</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-button pf-m-plain"
            type="button"
            aria-label="Edit"
          >
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-button pf-m-plain"
            type="button"
            aria-label="Clone"
          >
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-button pf-m-plain"
            type="button"
            aria-label="Sync"
          >
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-button-group">
        <div class="pf-v5-c-toolbar__item">
          <button class="pf-v5-c-button pf-m-primary" type="button">Action</button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button class="pf-v5-c-button pf-m-secondary" type="button">Secondary</button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button class="pf-v5-c-button pf-m-tertiary" type="button">Tertiary</button>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Toolbar group types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-filter-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-filter-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-filter-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-icon-button-group--space-items)`. |
| `.pf-m-button-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-button-group--space-items)`. |

### Toggle group

```html
<div class="pf-v5-c-toolbar" id="toolbar-toggle-group-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group pf-m-show-on-lg">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Show filters"
            aria-controls="toolbar-toggle-group-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item pf-m-search-filter">
          <div
            class="pf-v5-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v5-c-input-group__item">
              <button
                class="pf-v5-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-toggle-group-example-search-filter-menu"
              >
                <span class="pf-v5-c-menu-toggle__icon">
                  <i class="fas fa-filter" aria-hidden="true"></i>
                </span>
                <span class="pf-v5-c-menu-toggle__text">Name</span>
                <span class="pf-v5-c-menu-toggle__controls">
                  <span class="pf-v5-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v5-c-input-group__item pf-m-fill">
              <div class="pf-v5-c-text-input-group">
                <div class="pf-v5-c-text-input-group__main pf-m-icon">
                  <span class="pf-v5-c-text-input-group__text">
                    <span class="pf-v5-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v5-c-text-input-group__text-input"
                      type="text"
                      placeholder="Filter by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pf-v5-c-toolbar__group pf-m-filter-group">
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-example-menu-toggle-checkbox-status"
            >
              <span class="pf-v5-c-menu-toggle__text">Status</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-example-menu-toggle-checkbox-risk"
            >
              <span class="pf-v5-c-menu-toggle__text">Risk</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-toolbar__expandable-content pf-m-hidden"
      id="toolbar-toggle-group-example-expandable-content"
      hidden
    ></div>
  </div>
</div>

```

### Toggle group on mobile (filters collapsed, expandable content expanded)

```html
<div class="pf-v5-c-toolbar" id="toolbar-toggle-group-collapsed-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain pf-m-expanded"
            type="button"
            aria-expanded="true"
            aria-label="Show filters"
            aria-controls="toolbar-toggle-group-collapsed-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-toolbar__expandable-content pf-m-expanded"
      id="toolbar-toggle-group-collapsed-example-expandable-content"
    >
      <div class="pf-v5-c-toolbar__item pf-m-search-filter">
        <div
          class="pf-v5-c-input-group"
          aria-label="search filter"
          role="group"
        >
          <div class="pf-v5-c-input-group__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-collapsed-example-search-filter-menu"
            >
              <span class="pf-v5-c-menu-toggle__icon">
                <i class="fas fa-filter" aria-hidden="true"></i>
              </span>
              <span class="pf-v5-c-menu-toggle__text">Name</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v5-c-input-group__item pf-m-fill">
            <div class="pf-v5-c-text-input-group">
              <div class="pf-v5-c-text-input-group__main pf-m-icon">
                <span class="pf-v5-c-text-input-group__text">
                  <span class="pf-v5-c-text-input-group__icon">
                    <i class="fas fa-fw fa-search"></i>
                  </span>
                  <input
                    class="pf-v5-c-text-input-group__text-input"
                    type="text"
                    placeholder="Filter by name"
                    value
                    aria-label="Search input"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-filter-group">
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-toggle-group-collapsed-example-menu-toggle-checkbox-status"
          >
            <span class="pf-v5-c-menu-toggle__text">Status</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-toggle-group-collapsed-example-menu-toggle-checkbox-risk"
          >
            <span class="pf-v5-c-menu-toggle__text">Risk</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Toggle group modifier

The `.pf-m-toggle-group` controls when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. `.pf-m-show-on-{md, lg, xl}` controls when filters are shown and when the toggle button is hidden.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__toggle`, `.pf-v5-c-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded=true` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v5-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

### Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup=true` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup=true` should be applied to indicate that focus should be trapped. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-show{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group.pf-m-toggle-group`, `.pf-v5-c-toolbar__expandable-content` | Modifies toolbar element visibility at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-chip-container` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content`, `.pf-v5-c-toolbar__toggle` | Modifies the component for the expanded state. |

### Selected

### Selected filters on mobile (filters collapsed, selected filters summary visible)

```html
<div
  class="pf-v5-c-toolbar"
  id="toolbar-selected-filters-toggle-group-collapsed-example"
>
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v5-c-menu-toggle pf-m-split-button"
          id="toolbar-selected-filters-toggle-group-collapsed-example-check"
        >
          <label
            class="pf-v5-c-check pf-m-standalone"
            id="toolbar-selected-filters-toggle-group-collapsed-example-check-check"
            for="toolbar-selected-filters-toggle-group-collapsed-example-check-check-input"
          >
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="toolbar-selected-filters-toggle-group-collapsed-example-check-check-input"
              name="toolbar-selected-filters-toggle-group-collapsed-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v5-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-collapsed-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Show filters"
            aria-controls="toolbar-selected-filters-toggle-group-collapsed-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item pf-m-search-filter">
          <div
            class="pf-v5-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v5-c-input-group__item">
              <button
                class="pf-v5-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-selected-filters-toggle-group-collapsed-example-search-filter-menu"
              >
                <span class="pf-v5-c-menu-toggle__icon">
                  <i class="fas fa-filter" aria-hidden="true"></i>
                </span>
                <span class="pf-v5-c-menu-toggle__text">Name</span>
                <span class="pf-v5-c-menu-toggle__controls">
                  <span class="pf-v5-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v5-c-input-group__item pf-m-fill">
              <div class="pf-v5-c-text-input-group">
                <div class="pf-v5-c-text-input-group__main pf-m-icon">
                  <span class="pf-v5-c-text-input-group__text">
                    <span class="pf-v5-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v5-c-text-input-group__text-input"
                      type="text"
                      placeholder="Filter by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pf-v5-c-toolbar__group pf-m-filter-group">
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-collapsed-example-menu-toggle-checkbox-status"
            >
              <span class="pf-v5-c-menu-toggle__text">Status</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-collapsed-example-menu-toggle-checkbox-risk"
            >
              <span class="pf-v5-c-menu-toggle__text">Risk</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-selected-filters-toggle-group-collapsed-example-icon-button-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__control">
            <div class="pf-v5-c-dropdown">
              <button
                class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                type="button"
                id="toolbar-selected-filters-toggle-group-collapsed-example-icon-button-overflow-menu-dropdown-toggle"
                aria-label="Overflow menu"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul
                class="pf-v5-c-dropdown__menu"
                role="menu"
                aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-icon-button-overflow-menu-dropdown-toggle"
                hidden
              >
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Edit</button>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Clone</button>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Sync</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-toolbar__expandable-content pf-m-hidden"
      id="toolbar-selected-filters-toggle-group-collapsed-example-expandable-content"
      hidden
    >
      <div class="pf-v5-c-toolbar__group pf-m-chip-container">
        <div class="pf-v5-c-toolbar__item pf-m-chip-group">
          <div class="pf-v5-c-chip-group pf-m-category" role="group">
            <div class="pf-v5-c-chip-group__main">
              <span
                class="pf-v5-c-chip-group__label"
                id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label"
              >Status</span>
              <ul
                class="pf-v5-c-chip-group__list"
                role="list"
                aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label"
              >
                <li class="pf-v5-c-chip-group__list-item">
                  <div class="pf-v5-c-chip">
                    <span class="pf-v5-c-chip__content">
                      <span
                        class="pf-v5-c-chip__text"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one"
                      >Chip one</span>
                    </span>
                    <span class="pf-v5-c-chip__actions">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one"
                        aria-label="Remove"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one"
                      >
                        <i class="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </li>
                <li class="pf-v5-c-chip-group__list-item">
                  <div class="pf-v5-c-chip">
                    <span class="pf-v5-c-chip__content">
                      <span
                        class="pf-v5-c-chip__text"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two"
                      >Chip two</span>
                    </span>
                    <span class="pf-v5-c-chip__actions">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two"
                        aria-label="Remove"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two"
                      >
                        <i class="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </li>
                <li class="pf-v5-c-chip-group__list-item">
                  <div class="pf-v5-c-chip">
                    <span class="pf-v5-c-chip__content">
                      <span
                        class="pf-v5-c-chip__text"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three"
                      >Chip three</span>
                    </span>
                    <span class="pf-v5-c-chip__actions">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three"
                        aria-label="Remove"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three"
                      >
                        <i class="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pf-v5-c-toolbar__item pf-m-chip-group">
          <div class="pf-v5-c-chip-group pf-m-category" role="group">
            <div class="pf-v5-c-chip-group__main">
              <span
                class="pf-v5-c-chip-group__label"
                id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label"
              >Risk</span>
              <ul
                class="pf-v5-c-chip-group__list"
                role="list"
                aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label"
              >
                <li class="pf-v5-c-chip-group__list-item">
                  <div class="pf-v5-c-chip">
                    <span class="pf-v5-c-chip__content">
                      <span
                        class="pf-v5-c-chip__text"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one"
                      >Chip one</span>
                    </span>
                    <span class="pf-v5-c-chip__actions">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one"
                        aria-label="Remove"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one"
                      >
                        <i class="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </li>
                <li class="pf-v5-c-chip-group__list-item">
                  <div class="pf-v5-c-chip">
                    <span class="pf-v5-c-chip__content">
                      <span
                        class="pf-v5-c-chip__text"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two"
                      >Chip two</span>
                    </span>
                    <span class="pf-v5-c-chip__actions">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two"
                        aria-label="Remove"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two"
                      >
                        <i class="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </li>
                <li class="pf-v5-c-chip-group__list-item">
                  <div class="pf-v5-c-chip">
                    <span class="pf-v5-c-chip__content">
                      <span
                        class="pf-v5-c-chip__text"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three"
                      >Chip three</span>
                    </span>
                    <span class="pf-v5-c-chip__actions">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three"
                        aria-label="Remove"
                        id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three"
                      >
                        <i class="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__item">6 filters applied</div>
    <div class="pf-v5-c-toolbar__item">
      <button
        class="pf-v5-c-button pf-m-link pf-m-inline"
        type="button"
      >Clear all filters</button>
    </div>
  </div>
</div>

```

### Selected filters on mobile (filters collapsed, expandable content expanded)

```html
<div
  class="pf-v5-c-toolbar"
  id="toolbar-selected-filters-toggle-group-expanded-example"
>
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v5-c-menu-toggle pf-m-split-button"
          id="toolbar-selected-filters-toggle-group-expanded-example-check"
        >
          <label
            class="pf-v5-c-check pf-m-standalone"
            id="toolbar-selected-filters-toggle-group-expanded-example-check-check"
            for="toolbar-selected-filters-toggle-group-expanded-example-check-check-input"
          >
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="toolbar-selected-filters-toggle-group-expanded-example-check-check-input"
              name="toolbar-selected-filters-toggle-group-expanded-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v5-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain pf-m-expanded"
            type="button"
            aria-expanded="true"
            aria-label="Show filters"
            aria-controls="toolbar-selected-filters-toggle-group-expanded-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-selected-filters-toggle-group-expanded-example-icon-button-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__control">
            <div class="pf-v5-c-dropdown">
              <button
                class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                type="button"
                id="toolbar-selected-filters-toggle-group-expanded-example-icon-button-overflow-menu-dropdown-toggle"
                aria-label="Overflow menu"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul
                class="pf-v5-c-dropdown__menu"
                role="menu"
                aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-icon-button-overflow-menu-dropdown-toggle"
                hidden
              >
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Edit</button>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Clone</button>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Sync</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-toolbar__expandable-content pf-m-expanded"
      id="toolbar-selected-filters-toggle-group-expanded-example-expandable-content"
    >
      <div class="pf-v5-c-toolbar__item pf-m-search-filter">
        <div
          class="pf-v5-c-input-group"
          aria-label="search filter"
          role="group"
        >
          <div class="pf-v5-c-input-group__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-expanded-example-search-filter-menu"
            >
              <span class="pf-v5-c-menu-toggle__icon">
                <i class="fas fa-filter" aria-hidden="true"></i>
              </span>
              <span class="pf-v5-c-menu-toggle__text">Name</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v5-c-input-group__item pf-m-fill">
            <div class="pf-v5-c-text-input-group">
              <div class="pf-v5-c-text-input-group__main pf-m-icon">
                <span class="pf-v5-c-text-input-group__text">
                  <span class="pf-v5-c-text-input-group__icon">
                    <i class="fas fa-fw fa-search"></i>
                  </span>
                  <input
                    class="pf-v5-c-text-input-group__text-input"
                    type="text"
                    placeholder="Filter by name"
                    value
                    aria-label="Search input"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-filter-group">
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-checkbox-status"
          >
            <span class="pf-v5-c-menu-toggle__text">Status</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-checkbox-risk"
          >
            <span class="pf-v5-c-menu-toggle__text">Risk</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-chip-container">
        <div class="pf-v5-c-toolbar__group">
          <div class="pf-v5-c-toolbar__item pf-m-chip-group">
            <div class="pf-v5-c-chip-group pf-m-category" role="group">
              <div class="pf-v5-c-chip-group__main">
                <span
                  class="pf-v5-c-chip-group__label"
                  id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label"
                >Status</span>
                <ul
                  class="pf-v5-c-chip-group__list"
                  role="list"
                  aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label"
                >
                  <li class="pf-v5-c-chip-group__list-item">
                    <div class="pf-v5-c-chip">
                      <span class="pf-v5-c-chip__content">
                        <span
                          class="pf-v5-c-chip__text"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one"
                        >Chip one</span>
                      </span>
                      <span class="pf-v5-c-chip__actions">
                        <button
                          class="pf-v5-c-button pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one"
                          aria-label="Remove"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one"
                        >
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </li>
                  <li class="pf-v5-c-chip-group__list-item">
                    <div class="pf-v5-c-chip">
                      <span class="pf-v5-c-chip__content">
                        <span
                          class="pf-v5-c-chip__text"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two"
                        >Chip two</span>
                      </span>
                      <span class="pf-v5-c-chip__actions">
                        <button
                          class="pf-v5-c-button pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two"
                          aria-label="Remove"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two"
                        >
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </li>
                  <li class="pf-v5-c-chip-group__list-item">
                    <div class="pf-v5-c-chip">
                      <span class="pf-v5-c-chip__content">
                        <span
                          class="pf-v5-c-chip__text"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three"
                        >Chip three</span>
                      </span>
                      <span class="pf-v5-c-chip__actions">
                        <button
                          class="pf-v5-c-button pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three"
                          aria-label="Remove"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three"
                        >
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="pf-v5-c-toolbar__item pf-m-chip-group">
            <div class="pf-v5-c-chip-group pf-m-category" role="group">
              <div class="pf-v5-c-chip-group__main">
                <span
                  class="pf-v5-c-chip-group__label"
                  id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label"
                >Risk</span>
                <ul
                  class="pf-v5-c-chip-group__list"
                  role="list"
                  aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label"
                >
                  <li class="pf-v5-c-chip-group__list-item">
                    <div class="pf-v5-c-chip">
                      <span class="pf-v5-c-chip__content">
                        <span
                          class="pf-v5-c-chip__text"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one"
                        >Chip one</span>
                      </span>
                      <span class="pf-v5-c-chip__actions">
                        <button
                          class="pf-v5-c-button pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one"
                          aria-label="Remove"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one"
                        >
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </li>
                  <li class="pf-v5-c-chip-group__list-item">
                    <div class="pf-v5-c-chip">
                      <span class="pf-v5-c-chip__content">
                        <span
                          class="pf-v5-c-chip__text"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two"
                        >Chip two</span>
                      </span>
                      <span class="pf-v5-c-chip__actions">
                        <button
                          class="pf-v5-c-button pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two"
                          aria-label="Remove"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two"
                        >
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </li>
                  <li class="pf-v5-c-chip-group__list-item">
                    <div class="pf-v5-c-chip">
                      <span class="pf-v5-c-chip__content">
                        <span
                          class="pf-v5-c-chip__text"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three"
                        >Chip three</span>
                      </span>
                      <span class="pf-v5-c-chip__actions">
                        <button
                          class="pf-v5-c-button pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three"
                          aria-label="Remove"
                          id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three"
                        >
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-button pf-m-link pf-m-inline"
            type="button"
          >Clear all filters</button>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Selected filters on desktop (not responsive)

```html
<div class="pf-v5-c-toolbar" id="toolbar-selected-filters-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v5-c-menu-toggle pf-m-split-button"
          id="toolbar-selected-filters-example-check"
        >
          <label
            class="pf-v5-c-check pf-m-standalone"
            id="toolbar-selected-filters-example-check-check"
            for="toolbar-selected-filters-example-check-check-input"
          >
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="toolbar-selected-filters-example-check-check-input"
              name="toolbar-selected-filters-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v5-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group pf-m-show">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Show filters"
            aria-controls="toolbar-selected-filters-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__group pf-m-filter-group">
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-example-menu-toggle-checkbox-status"
            >
              <span class="pf-v5-c-menu-toggle__text">Status</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-example-menu-toggle-checkbox-risk"
            >
              <span class="pf-v5-c-menu-toggle__text">Risk</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-selected-filters-example-icon-button-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__content">
            <div class="pf-v5-c-overflow-menu__group pf-m-icon-button-group">
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Edit"
                >
                  <i class="fas fa-edit" aria-hidden="true"></i>
                </button>
              </div>
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Clone"
                >
                  <i class="fas fa-clone" aria-hidden="true"></i>
                </button>
              </div>
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Sync"
                >
                  <i class="fas fa-sync" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-selected-filters-example-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__content">
            <div class="pf-v5-c-overflow-menu__group pf-m-button-group">
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-primary"
                  type="button"
                >Primary</button>
              </div>
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-secondary"
                  type="button"
                >Secondary</button>
              </div>
            </div>
          </div>

          <div class="pf-v5-c-overflow-menu__control">
            <div class="pf-v5-c-dropdown">
              <button
                class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                type="button"
                id="toolbar-selected-filters-example-overflow-menu-dropdown-toggle"
                aria-label="Overflow menu"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul
                class="pf-v5-c-dropdown__menu"
                role="menu"
                aria-labelledby="toolbar-selected-filters-example-overflow-menu-dropdown-toggle"
                hidden
              >
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v5-c-toolbar__content pf-m-chip-container">
    <div class="pf-v5-c-toolbar__group">
      <div class="pf-v5-c-toolbar__item pf-m-chip-group">
        <div class="pf-v5-c-chip-group pf-m-category" role="group">
          <div class="pf-v5-c-chip-group__main">
            <span
              class="pf-v5-c-chip-group__label"
              id="toolbar-selected-filters-example-chip-group-status-chip-group-label"
            >Status</span>
            <ul
              class="pf-v5-c-chip-group__list"
              role="list"
              aria-labelledby="toolbar-selected-filters-example-chip-group-status-chip-group-label"
            >
              <li class="pf-v5-c-chip-group__list-item">
                <div class="pf-v5-c-chip">
                  <span class="pf-v5-c-chip__content">
                    <span
                      class="pf-v5-c-chip__text"
                      id="toolbar-selected-filters-example-chip-group-statuschip-one"
                    >Chip one</span>
                  </span>
                  <span class="pf-v5-c-chip__actions">
                    <button
                      class="pf-v5-c-button pf-m-plain"
                      type="button"
                      aria-labelledby="toolbar-selected-filters-example-chip-group-statusremove-chip-one toolbar-selected-filters-example-chip-group-statuschip-one"
                      aria-label="Remove"
                      id="toolbar-selected-filters-example-chip-group-statusremove-chip-one"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </li>
              <li class="pf-v5-c-chip-group__list-item">
                <div class="pf-v5-c-chip">
                  <span class="pf-v5-c-chip__content">
                    <span
                      class="pf-v5-c-chip__text"
                      id="toolbar-selected-filters-example-chip-group-statuschip-two"
                    >Chip two</span>
                  </span>
                  <span class="pf-v5-c-chip__actions">
                    <button
                      class="pf-v5-c-button pf-m-plain"
                      type="button"
                      aria-labelledby="toolbar-selected-filters-example-chip-group-statusremove-chip-two toolbar-selected-filters-example-chip-group-statuschip-two"
                      aria-label="Remove"
                      id="toolbar-selected-filters-example-chip-group-statusremove-chip-two"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </li>
              <li class="pf-v5-c-chip-group__list-item">
                <div class="pf-v5-c-chip">
                  <span class="pf-v5-c-chip__content">
                    <span
                      class="pf-v5-c-chip__text"
                      id="toolbar-selected-filters-example-chip-group-statuschip-three"
                    >Chip three</span>
                  </span>
                  <span class="pf-v5-c-chip__actions">
                    <button
                      class="pf-v5-c-button pf-m-plain"
                      type="button"
                      aria-labelledby="toolbar-selected-filters-example-chip-group-statusremove-chip-three toolbar-selected-filters-example-chip-group-statuschip-three"
                      aria-label="Remove"
                      id="toolbar-selected-filters-example-chip-group-statusremove-chip-three"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-chip-group">
        <div class="pf-v5-c-chip-group pf-m-category" role="group">
          <div class="pf-v5-c-chip-group__main">
            <span
              class="pf-v5-c-chip-group__label"
              id="toolbar-selected-filters-example-chip-group-risk-chip-group-label"
            >Risk</span>
            <ul
              class="pf-v5-c-chip-group__list"
              role="list"
              aria-labelledby="toolbar-selected-filters-example-chip-group-risk-chip-group-label"
            >
              <li class="pf-v5-c-chip-group__list-item">
                <div class="pf-v5-c-chip">
                  <span class="pf-v5-c-chip__content">
                    <span
                      class="pf-v5-c-chip__text"
                      id="toolbar-selected-filters-example-chip-group-riskchip-one"
                    >Chip one</span>
                  </span>
                  <span class="pf-v5-c-chip__actions">
                    <button
                      class="pf-v5-c-button pf-m-plain"
                      type="button"
                      aria-labelledby="toolbar-selected-filters-example-chip-group-riskremove-chip-one toolbar-selected-filters-example-chip-group-riskchip-one"
                      aria-label="Remove"
                      id="toolbar-selected-filters-example-chip-group-riskremove-chip-one"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </li>
              <li class="pf-v5-c-chip-group__list-item">
                <div class="pf-v5-c-chip">
                  <span class="pf-v5-c-chip__content">
                    <span
                      class="pf-v5-c-chip__text"
                      id="toolbar-selected-filters-example-chip-group-riskchip-two"
                    >Chip two</span>
                  </span>
                  <span class="pf-v5-c-chip__actions">
                    <button
                      class="pf-v5-c-button pf-m-plain"
                      type="button"
                      aria-labelledby="toolbar-selected-filters-example-chip-group-riskremove-chip-two toolbar-selected-filters-example-chip-group-riskchip-two"
                      aria-label="Remove"
                      id="toolbar-selected-filters-example-chip-group-riskremove-chip-two"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </li>
              <li class="pf-v5-c-chip-group__list-item">
                <div class="pf-v5-c-chip">
                  <span class="pf-v5-c-chip__content">
                    <span
                      class="pf-v5-c-chip__text"
                      id="toolbar-selected-filters-example-chip-group-riskchip-three"
                    >Chip three</span>
                  </span>
                  <span class="pf-v5-c-chip__actions">
                    <button
                      class="pf-v5-c-button pf-m-plain"
                      type="button"
                      aria-labelledby="toolbar-selected-filters-example-chip-group-riskremove-chip-three toolbar-selected-filters-example-chip-group-riskchip-three"
                      aria-label="Remove"
                      id="toolbar-selected-filters-example-chip-group-riskremove-chip-three"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-toolbar__item">
      <button
        class="pf-v5-c-button pf-m-link pf-m-inline"
        type="button"
      >Clear all filters</button>
    </div>
  </div>
</div>

```

### Stacked

### Stacked on desktop

```html
<div class="pf-v5-c-toolbar" id="toolbar-stacked-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group pf-m-show-on-2xl">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Show filters"
            aria-controls="toolbar-stacked-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-toolbar__group">
          <div
            class="pf-v5-c-toolbar__item pf-m-label"
            id="toolbar-stacked-example-menu-toggle-resource-label"
            aria-hidden="true"
          >Resource</div>

          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-stacked-example-menu-toggle-resource"
            >
              <span class="pf-v5-c-menu-toggle__text">Pod</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div class="pf-v5-c-toolbar__group">
          <div
            class="pf-v5-c-toolbar__item pf-m-label"
            id="toolbar-stacked-example-menu-toggle-status-label"
            aria-hidden="true"
          >Status</div>
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-stacked-example-menu-toggle-status"
            >
              <span class="pf-v5-c-menu-toggle__text">Running</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div class="pf-v5-c-toolbar__group">
          <div
            class="pf-v5-c-toolbar__item pf-m-label"
            id="toolbar-stacked-example-menu-toggle-type-label"
            aria-hidden="true"
          >Type</div>
          <div class="pf-v5-c-toolbar__item">
            <button
              class="pf-v5-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-stacked-example-menu-toggle-type"
            >
              <span class="pf-v5-c-menu-toggle__text">Any</span>
              <span class="pf-v5-c-menu-toggle__controls">
                <span class="pf-v5-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-stacked-example-icon-button-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__content">
            <div class="pf-v5-c-overflow-menu__group pf-m-icon-button-group">
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Edit"
                >
                  <i class="fas fa-edit" aria-hidden="true"></i>
                </button>
              </div>
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Clone"
                >
                  <i class="fas fa-clone" aria-hidden="true"></i>
                </button>
              </div>
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Sync"
                >
                  <i class="fas fa-sync" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-stacked-example-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__content">
            <div class="pf-v5-c-overflow-menu__group pf-m-button-group">
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-primary"
                  type="button"
                >Primary</button>
              </div>
              <div class="pf-v5-c-overflow-menu__item">
                <button
                  class="pf-v5-c-button pf-m-secondary"
                  type="button"
                >Secondary</button>
              </div>
            </div>
          </div>

          <div class="pf-v5-c-overflow-menu__control">
            <div class="pf-v5-c-dropdown">
              <button
                class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                type="button"
                id="toolbar-stacked-example-overflow-menu-dropdown-toggle"
                aria-label="Overflow menu"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul
                class="pf-v5-c-dropdown__menu"
                role="menu"
                aria-labelledby="toolbar-stacked-example-overflow-menu-dropdown-toggle"
                hidden
              >
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-toolbar__expandable-content pf-m-hidden"
      id="toolbar-stacked-example-expandable-content"
      hidden
    ></div>
  </div>
  <hr class="pf-v5-c-divider" />

  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v5-c-menu-toggle pf-m-split-button"
          id="toolbar-stacked-example-check"
        >
          <label
            class="pf-v5-c-check pf-m-standalone"
            id="toolbar-stacked-example-check-check"
            for="toolbar-stacked-example-check-check-input"
          >
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="toolbar-stacked-example-check-check-input"
              name="toolbar-stacked-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v5-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-stacked-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-pagination">
        <div class="pf-v5-c-pagination" aria-label="Element pagination">
          <div class="pf-v5-c-pagination__total-items">37 items</div>
          <div class="pf-v5-c-options-menu">
            <button
              class="pf-v5-c-options-menu__toggle pf-m-text pf-m-plain"
              type="button"
              id="toolbar-stacked-example-pagination-options-menu-toggle"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span class="pf-v5-c-options-menu__toggle-text">
                <b>1 - 10</b>&nbsp;of&nbsp;
                <b>36</b>
              </span>
              <div class="pf-v5-c-options-menu__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </div>
            </button>
            <ul
              class="pf-v5-c-options-menu__menu"
              role="menu"
              aria-labelledby="toolbar-stacked-example-pagination-options-menu-toggle"
              hidden
            >
              <li role="none">
                <button
                  class="pf-v5-c-options-menu__menu-item"
                  type="button"
                  role="menuitem"
                >5 per page</button>
              </li>
              <li role="none">
                <button
                  class="pf-v5-c-options-menu__menu-item"
                  type="button"
                  role="menuitem"
                >
                  10 per page
                  <div class="pf-v5-c-options-menu__menu-item-icon">
                    <i class="fas fa-check" aria-hidden="true"></i>
                  </div>
                </button>
              </li>
              <li role="none">
                <button
                  class="pf-v5-c-options-menu__menu-item"
                  type="button"
                  role="menuitem"
                >20 per page</button>
              </li>
            </ul>
          </div>

          <nav class="pf-v5-c-pagination__nav" aria-label="Pagination">
            <div class="pf-v5-c-pagination__nav-control pf-m-first">
              <button
                class="pf-v5-c-button pf-m-plain pf-m-disabled"
                type="button"
                aria-label="Go to first page"
                aria-disabled="true"
              >
                <i class="fas fa-angle-double-left" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-v5-c-pagination__nav-control pf-m-prev">
              <button
                class="pf-v5-c-button pf-m-plain pf-m-disabled"
                type="button"
                aria-label="Go to previous page"
                aria-disabled="true"
              >
                <i class="fas fa-angle-left" aria-hidden="true"></i>
              </button>
            </div>

            <div
              class="pf-v5-c-pagination__nav-page-select"
              aria-label="Current page 1 of 4"
            >
              <span class="pf-v5-c-form-control">
                <input
                  aria-label="Current page"
                  type="number"
                  min="1"
                  max="4"
                  value="1"
                />
              </span>
              <span aria-hidden="true">of 4</span>
            </div>
            <div class="pf-v5-c-pagination__nav-control pf-m-next">
              <button
                class="pf-v5-c-button pf-m-plain"
                type="button"
                aria-label="Go to next page"
              >
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-v5-c-pagination__nav-control pf-m-last">
              <button
                class="pf-v5-c-button pf-m-plain"
                type="button"
                aria-label="Go to last page"
              >
                <i class="fas fa-angle-double-right" aria-hidden="true"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Stacked on mobile (filters collapsed, expandable content expanded)

```html
<div class="pf-v5-c-toolbar" id="toolbar-stacked-collapsed-example">
  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v5-c-toolbar__toggle">
          <button
            class="pf-v5-c-menu-toggle pf-m-plain pf-m-expanded"
            type="button"
            aria-expanded="true"
            aria-label="Show filters"
            aria-controls="toolbar-stacked-collapsed-example-expandable-content"
          >
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-overflow-menu">
        <div
          class="pf-v5-c-overflow-menu"
          id="toolbar-stacked-collapsed-example-icon-button-overflow-menu"
        >
          <div class="pf-v5-c-overflow-menu__control">
            <div class="pf-v5-c-dropdown">
              <button
                class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                type="button"
                id="toolbar-stacked-collapsed-example-icon-button-overflow-menu-dropdown-toggle"
                aria-label="Overflow menu"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul
                class="pf-v5-c-dropdown__menu"
                role="menu"
                aria-labelledby="toolbar-stacked-collapsed-example-icon-button-overflow-menu-dropdown-toggle"
                hidden
              >
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Edit</button>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Clone</button>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    class="pf-v5-c-dropdown__menu-item"
                  >Sync</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-toolbar__expandable-content pf-m-expanded"
      id="toolbar-stacked-collapsed-example-expandable-content"
    >
      <div class="pf-v5-c-toolbar__group">
        <div
          class="pf-v5-c-toolbar__item pf-m-label"
          id="toolbar-stacked-collapsed-example-menu-toggle-resource-label"
          aria-hidden="true"
        >Resource</div>

        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-stacked-collapsed-example-menu-toggle-resource"
          >
            <span class="pf-v5-c-menu-toggle__text">Pod</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group">
        <div
          class="pf-v5-c-toolbar__item pf-m-label"
          id="-menu-toggle-status-label"
          aria-hidden="true"
        >Status</div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="-menu-toggle-status"
          >
            <span class="pf-v5-c-menu-toggle__text">Running</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__group">
        <div
          class="pf-v5-c-toolbar__item pf-m-label"
          id="-menu-toggle-type-label"
          aria-hidden="true"
        >Type</div>
        <div class="pf-v5-c-toolbar__item">
          <button
            class="pf-v5-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="-menu-toggle-type"
          >
            <span class="pf-v5-c-menu-toggle__text">Any</span>
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-v5-c-divider" />

  <div class="pf-v5-c-toolbar__content">
    <div class="pf-v5-c-toolbar__content-section">
      <div class="pf-v5-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v5-c-menu-toggle pf-m-split-button"
          id="toolbar-stacked-collapsed-example-check"
        >
          <label
            class="pf-v5-c-check pf-m-standalone"
            id="toolbar-stacked-collapsed-example-check-check"
            for="toolbar-stacked-collapsed-example-check-check-input"
          >
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              id="toolbar-stacked-collapsed-example-check-check-input"
              name="toolbar-stacked-collapsed-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v5-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-stacked-collapsed-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v5-c-menu-toggle__controls">
              <span class="pf-v5-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v5-c-toolbar__item pf-m-pagination">
        <div class="pf-v5-c-pagination" aria-label="Element pagination">
          <div class="pf-v5-c-pagination__total-items">37 items</div>
          <div class="pf-v5-c-options-menu">
            <button
              class="pf-v5-c-options-menu__toggle pf-m-text pf-m-plain"
              type="button"
              id="toolbar-stacked-collapsed-example-pagination-options-menu-toggle"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span class="pf-v5-c-options-menu__toggle-text">
                <b>1 - 10</b>&nbsp;of&nbsp;
                <b>36</b>
              </span>
              <div class="pf-v5-c-options-menu__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </div>
            </button>
            <ul
              class="pf-v5-c-options-menu__menu"
              role="menu"
              aria-labelledby="toolbar-stacked-collapsed-example-pagination-options-menu-toggle"
              hidden
            >
              <li role="none">
                <button
                  class="pf-v5-c-options-menu__menu-item"
                  type="button"
                  role="menuitem"
                >5 per page</button>
              </li>
              <li role="none">
                <button
                  class="pf-v5-c-options-menu__menu-item"
                  type="button"
                  role="menuitem"
                >
                  10 per page
                  <div class="pf-v5-c-options-menu__menu-item-icon">
                    <i class="fas fa-check" aria-hidden="true"></i>
                  </div>
                </button>
              </li>
              <li role="none">
                <button
                  class="pf-v5-c-options-menu__menu-item"
                  type="button"
                  role="menuitem"
                >20 per page</button>
              </li>
            </ul>
          </div>

          <nav class="pf-v5-c-pagination__nav" aria-label="Pagination">
            <div class="pf-v5-c-pagination__nav-control pf-m-first">
              <button
                class="pf-v5-c-button pf-m-plain pf-m-disabled"
                type="button"
                aria-label="Go to first page"
                aria-disabled="true"
              >
                <i class="fas fa-angle-double-left" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-v5-c-pagination__nav-control pf-m-prev">
              <button
                class="pf-v5-c-button pf-m-plain pf-m-disabled"
                type="button"
                aria-label="Go to previous page"
                aria-disabled="true"
              >
                <i class="fas fa-angle-left" aria-hidden="true"></i>
              </button>
            </div>

            <div
              class="pf-v5-c-pagination__nav-page-select"
              aria-label="Current page 1 of 4"
            >
              <span class="pf-v5-c-form-control">
                <input
                  aria-label="Current page"
                  type="number"
                  min="1"
                  max="4"
                  value="1"
                />
              </span>
              <span aria-hidden="true">of 4</span>
            </div>
            <div class="pf-v5-c-pagination__nav-control pf-m-next">
              <button
                class="pf-v5-c-button pf-m-plain"
                type="button"
                aria-label="Go to next page"
              >
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-v5-c-pagination__nav-control pf-m-last">
              <button
                class="pf-v5-c-button pf-m-plain"
                type="button"
                aria-label="Go to last page"
              >
                <i class="fas fa-angle-double-right" aria-hidden="true"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

```

## Documentation

### Overview

As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-v5-c-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-v5-c-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-v5-c-toolbar__content` | `<div>` | Initiates a toolbar content container. **Required** |
| `.pf-v5-c-toolbar__content-section` | `<div>` | Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `.pf-v5-c-toolbar__content-section` per `.pf-v5-c-toolbar__content` **Required** |
| `.pf-v5-c-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-m-sticky` | `.pf-v5-c-toolbar` | Modifies toolbar component to be sticky to the top of its container. |
| `.pf-m-full-height` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies toolbar component to full height of its container and removes vertical padding. |
| `.pf-m-static` | `.pf-v5-c-toolbar` | Modifies expandable content section to position itself to the nearest absolutely positioned parent outside of the toolbar component. This is used primarily for masthead toolbar. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-label` | `.pf-v5-c-toolbar__item` | Modifies label vertical positioning. |
| `.pf-m-form-element` | `.pf-v5-c-toolbar__item` | Modifies form element vertical positioning. |
| `.pf-m-bulk-select` | `.pf-v5-c-toolbar__item` | Modifies bulk select spacing. |
| `.pf-m-overflow-menu` | `.pf-v5-c-toolbar__item` | Modifies overflow menu spacing. |
| `.pf-m-pagination` | `.pf-v5-c-toolbar__item` | Modifies pagination spacing and margin. |
| `.pf-m-search-filter` | `.pf-v5-c-toolbar__item` | Modifies search filter spacing. |
| `.pf-m-chip-group` | `.pf-v5-c-toolbar__item` | Modifies chip group spacing. |
| `.pf-m-expand-all` | `.pf-v5-c-toolbar__item` | Modifies an item for an expand all button. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__item.pf-m-expand-all` | Modifies an expand all button for the expanded state. |
| `.pf-m-button-group` | `.pf-v5-c-toolbar__group` | Modifies button group spacing. |
| `.pf-m-icon-button-group` | `.pf-v5-c-toolbar__group` | Modifies icon button group spacing. |
| `.pf-m-filter-group` | `.pf-v5-c-toolbar__group` | Modifies filter group spacing. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align right, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align left, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-items-center` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to vertically align children to center. |
| `.pf-m-align-items-baseline` | `.pf-v5-c-toolbar__group` | Modifies toolbar group to vertically align children to baseline. |
| `.pf-m-align-self-center` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to center. |
| `.pf-m-align-self-baseline` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to baseline. |
| `.pf-m-chip-container` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-overflow-container` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to hide overflow and respond to available space. Used for horizontal navigation. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content`, `.pf-v5-c-toolbar__toggle` | Modifies the component for the expanded state. |
| `.pf-m-wrap` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to wrap. |
| `.pf-m-nowrap` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to nowrap. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__toggle`, `.pf-v5-c-toolbar__expandable-content` |  Indicates that the toolbar element is hidden. **Required** |
| `aria-expanded=true` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v5-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |
| `aria-label="Expand all"` | `.pf-v5-c-toolbar__item.pf-m-expand-all` | Provides an accessible label for the expand all item button. **Required** |
| `aria-label="Collapse all"` | `.pf-v5-c-toolbar__item.pf-m-expand-all.pf-m-expanded` | Provides an accessible label for the expand all item button. **Required** |

### Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-show{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group.pf-m-toggle-group`, `.pf-v5-c-toolbar__expandable-content` | Modifies toolbar element to hidden at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). This selector must be applied consistently to toggle group and expandable content. |

### Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group` | Modifies toolbar group child spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
