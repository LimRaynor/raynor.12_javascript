# Semantic HTML5 - Complete Guide

## What is Semantic HTML?

**Semantic HTML** uses HTML elements that clearly describe their meaning to both the browser and the developer. Instead of using generic `<div>` and `<span>` tags for everything, semantic elements tell you exactly what type of content they contain.

```html
<!-- Non-semantic (unclear meaning) -->
<div class="header">
    <div class="nav">...</div>
</div>

<!-- Semantic (clear meaning) -->
<header>
    <nav>...</nav>
</header>
```

---

## Why Use Semantic HTML?

### 1. Accessibility
Screen readers and assistive technologies use semantic elements to navigate and interpret content. A visually impaired user can jump directly to the `<main>` content or navigate through `<nav>` links.

### 2. SEO (Search Engine Optimization)
Search engines like Google understand semantic markup better. They can identify the main content (`<main>`), navigation (`<nav>`), and article content (`<article>`), improving your page's search ranking.

### 3. Code Readability
Semantic elements make code self-documenting. Other developers (and your future self) can quickly understand the page structure.

### 4. Maintainability
Clear structure makes it easier to update and modify code. You can find sections quickly without decoding nested `<div>` structures.

### 5. Consistency
Semantic elements provide a standard vocabulary that all developers understand, creating consistent patterns across projects.

---

## Semantic HTML5 Elements

### Document Structure Elements

#### `<header>`
Introductory content or navigational aids. Typically contains headings, logos, and navigation.

```html

<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

**Usage notes:**
- Can be used multiple times (page header, article header, section header)
- Should not be nested inside `<footer>`, `<address>`, or another `<header>`

---

#### `<nav>`
Major navigation blocks containing links to other pages or sections within the page.

```html
<nav aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

**Usage notes:**
- Not all link groups need `<nav>` — use it for major navigation blocks
- Add `aria-label` when you have multiple `<nav>` elements on a page

---

#### `<main>`
The dominant content of the `<body>`. There should be only one `<main>` per page, and it should not include repeated content like headers, footers, or navigation.

```html
<body>
    <header>...</header>
    <nav>...</nav>

    <main>
        <!-- Primary page content goes here -->
        <h1>Welcome to Our Store</h1>
        <section>...</section>
    </main>

    <footer>...</footer>
</body>
```

**Usage notes:**
- Only ONE `<main>` per page
- Must not be a descendant of `<article>`, `<aside>`, `<footer>`, `<header>`, or `<nav>`
- Screen readers use this to skip directly to main content

---

#### `<footer>`
Footer for its nearest sectioning content or sectioning root. Contains information about the author, copyright, related links, etc.

```html
<footer>
    <p>&copy; 2024 My Company. All rights reserved.</p>
    <nav>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
    </nav>
</footer>
```

**Usage notes:**
- Can be used multiple times (page footer, article footer)
- Should not contain nested `<footer>` or `<header>`

---

#### `<aside>`
Content tangentially related to the surrounding content. Sidebars, pull quotes, advertising, or related links.

```html
<main>
    <article>
        <h1>How to Learn JavaScript</h1>
        <p>JavaScript is a versatile programming language...</p>
    </article>

    <aside>
        <h2>Related Articles</h2>
        <ul>
            <li><a href="/css-basics">CSS Basics</a></li>
            <li><a href="/html-guide">HTML Guide</a></li>
        </ul>
    </aside>
</main>
```

---

### Content Sectioning Elements

#### `<article>`
Self-contained, independently distributable content. Could be a blog post, news article, forum post, or widget.

```html
<article>
    <header>
        <h2>Understanding Flexbox</h2>
        <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    </header>

    <p>Flexbox is a one-dimensional layout method...</p>

    <footer>
        <p>Written by Jane Doe</p>
    </footer>
</article>
```

**Test:** Ask yourself, "Would this content make sense on its own, outside this page?" If yes, use `<article>`.

---

#### `<section>`
A thematic grouping of content, typically with a heading. Use it to divide content into logical sections.

```html
<section>
    <h2>Our Services</h2>
    <p>We offer a variety of services...</p>

    <section>
        <h3>Web Development</h3>
        <p>Custom websites built to your needs...</p>
    </section>

    <section>
        <h3>Mobile Apps</h3>
        <p>Native and cross-platform applications...</p>
    </section>
</section>
```

**`<section>` vs `<div>`:**
- Use `<section>` for thematic content groupings with headings
- Use `<div>` for styling purposes or when no semantic meaning applies

---

### Text Content Elements

#### `<h1>` to `<h6>`
Heading levels representing a hierarchy of content.

```html
<h1>Main Page Title</h1>           <!-- Only ONE per page -->

<section>
    <h2>Section Title</h2>         <!-- Major sections -->

    <h3>Subsection Title</h3>      <!-- Subsections -->

    <h4>Sub-subsection</h4>        <!-- Further nesting -->
</section>
```

**Rules:**
- Only ONE `<h1>` per page (main title)
- Don't skip levels (don't go from `<h1>` to `<h3>`)
- Use for structure, not for styling (use CSS for visual size)

---

#### `<p>`
A paragraph of text.

```html
<p>This is a paragraph. It represents a block of text that forms a distinct unit of content.</p>
```

---

#### `<blockquote>`
A section quoted from another source.

```html
<blockquote cite="https://example.com/source">
    <p>The only way to do great work is to love what you do.</p>
    <footer>— Steve Jobs</footer>
</blockquote>
```

---

#### `<figure>` and `<figcaption>`
Self-contained content with an optional caption. Often used for images, diagrams, or code snippets.

```html
<figure>
    <img src="chart.png" alt="Sales growth chart showing 25% increase">
    <figcaption>Figure 1: Quarterly sales growth for 2024</figcaption>
</figure>
```

---

#### `<time>`
Represents a specific time or date.

```html
<p>The event starts on <time datetime="2024-06-15T19:00">June 15 at 7:00 PM</time>.</p>

<p>Published <time datetime="2024-01-20">January 20, 2024</time></p>
```

The `datetime` attribute provides a machine-readable format.

---

#### `<address>`
Contact information for the author or owner.

```html
<address>
    Contact us at:<br>
    <a href="mailto:info@example.com">info@example.com</a><br>
    123 Main Street, City, Country
</address>
```

---

### Inline Semantic Elements

#### `<strong>`
Strong importance — content that is serious or urgent. Typically displayed as bold.

```html
<p><strong>Warning:</strong> This action cannot be undone.</p>
```

---

#### `<em>`
Stress emphasis — changes the meaning of a sentence. Typically displayed as italic.

```html
<p>I <em>really</em> want to go to the party.</p>
```

---

#### `<mark>`
Highlighted or marked text for reference purposes.

```html
<p>Search results for "JavaScript": Found in <mark>JavaScript</mark> fundamentals guide.</p>
```

---

#### `<code>`
A fragment of computer code.

```html
<p>Use <code>console.log()</code> to debug your code.</p>
```

---

#### `<abbr>`
An abbreviation or acronym with an optional expansion.

```html
<p>The <abbr title="World Wide Web">WWW</abbr> was invented in 1989.</p>
```

---

#### `<cite>`
A reference to a creative work (book, article, movie, etc.).

```html
<p>As discussed in <cite>Clean Code</cite> by Robert C. Martin...</p>
```

---

### Form Elements

#### `<form>`
A document section containing interactive controls for submitting information.

```html
<form action="/submit" method="POST">
    <!-- Form controls go here -->
</form>
```

---

#### `<label>`
A caption for an interface item. Always associate with form controls.

```html
<!-- Method 1: Using "for" attribute -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Method 2: Wrapping the input -->
<label>
    Email:
    <input type="email" name="email">
</label>
```

---

#### `<fieldset>` and `<legend>`
Groups related form elements with a caption.

```html
<fieldset>
    <legend>Shipping Address</legend>

    <label for="street">Street:</label>
    <input type="text" id="street" name="street">

    <label for="city">City:</label>
    <input type="text" id="city" name="city">
</fieldset>
```

---

#### `<output>`
The result of a calculation or user action.

```html
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
    <input type="number" id="a" value="0"> +
    <input type="number" id="b" value="0"> =
    <output name="result" for="a b">0</output>
</form>
```

---

### Interactive Elements

#### `<details>` and `<summary>`
A disclosure widget that can show/hide content.

```html
<details>
    <summary>Click to see more information</summary>
    <p>This is the hidden content that appears when you click the summary.</p>
</details>
```

---

#### `<dialog>`
A dialog box or modal window.

```html
<dialog id="myDialog">
    <h2>Confirmation</h2>
    <p>Are you sure you want to delete this item?</p>
    <button onclick="this.closest('dialog').close()">Cancel</button>
    <button onclick="deleteItem()">Delete</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">
    Open Dialog
</button>
```

---

## Comparison Table: Semantic vs Non-Semantic

| Non-Semantic | Semantic | Purpose |
|--------------|----------|---------|
| `<div class="header">` | `<header>` | Page or section header |
| `<div class="nav">` | `<nav>` | Navigation links |
| `<div class="main">` | `<main>` | Main content area |
| `<div class="sidebar">` | `<aside>` | Side content |
| `<div class="footer">` | `<footer>` | Page or section footer |
| `<div class="article">` | `<article>` | Self-contained content |
| `<div class="section">` | `<section>` | Thematic content group |
| `<b>` | `<strong>` | Important text |
| `<i>` | `<em>` | Emphasized text |

---

## Example: Your Todo List with Semantic HTML

Here's how semantic HTML is applied in your Interactive Todo List project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Todo List</title>
</head>
<body>
    <!-- main: Primary content of the page -->
    <main class="todo-app">

        <!-- header: Introductory content -->
        <header class="todo-header">
            <h1>Todo List</h1>  <!-- h1: Main page heading (only one) -->
        </header>

        <!-- form: Interactive input controls -->
        <form class="todo-form" id="todoForm">
            <input type="text" id="todoInput" required>
            <button type="submit">Add</button>
        </form>

        <!-- nav: Navigation between filter views -->
        <nav class="todo-filters">
            <button data-filter="all">All</button>
            <button data-filter="active">Active</button>
            <button data-filter="completed">Completed</button>
        </nav>

        <!-- ul: Unordered list of todo items -->
        <ul class="todo-list" id="todoList">
            <!-- li: Each todo item is a list item -->
        </ul>

        <!-- footer: Additional information and actions -->
        <footer class="todo-footer">
            <span class="todo-count">0 items left</span>
            <button class="clear-completed">Clear Completed</button>
        </footer>

    </main>
</body>
</html>
```

### Why This Structure Works:

| Element | Semantic Purpose |
|---------|------------------|
| `<main>` | Contains the todo app (primary page content) |
| `<header>` | App title and branding |
| `<form>` | Input form for adding todos |
| `<nav>` | Filter buttons for navigating between views |
| `<ul>` + `<li>` | List of todo items |
| `<footer>` | Summary info and actions |

---

## Best Practices

### Do:
- Use semantic elements whenever possible
- Maintain proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
- Associate all form inputs with labels
- Use `<button>` for clickable actions (not `<div onclick>`)
- Add ARIA attributes when needed for accessibility
- Use only ONE `<main>` element per page

### Don't:
- Use headings for styling (use CSS instead)
- Skip heading levels
- Use `<br>` for spacing (use CSS margins/padding)
- Use `<table>` for layout (only for tabular data)
- Nest `<a>` inside `<a>` or `<button>` inside `<button>`

---

## Quick Reference

```
Document Structure:
├── <header>    → Page/section header
├── <nav>       → Navigation links
├── <main>      → Primary content (ONE per page)
├── <aside>     → Side content
├── <footer>    → Page/section footer
├── <section>   → Thematic grouping
└── <article>   → Self-contained content

Text Content:
├── <h1>-<h6>   → Headings (hierarchy)
├── <p>         → Paragraph
├── <blockquote>→ Quoted content
├── <figure>    → Self-contained media
├── <figcaption>→ Caption for figure
├── <time>      → Date/time
└── <address>   → Contact information

Inline Text:
├── <strong>    → Important (bold)
├── <em>        → Emphasis (italic)
├── <mark>      → Highlighted
├── <code>      → Code snippet
├── <abbr>      → Abbreviation
└── <cite>      → Reference to work

Forms:
├── <form>      → Form container
├── <label>     → Input label
├── <fieldset>  → Group of fields
├── <legend>    → Fieldset caption
└── <output>    → Calculation result

Interactive:
├── <details>   → Expandable content
├── <summary>   → Details heading
└── <dialog>    → Modal/dialog box
```

---

## Resources

- [MDN: HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3C HTML5 Specification](https://html.spec.whatwg.org/)
- [WebAIM: Semantic Structure](https://webaim.org/techniques/semanticstructure/)
- [HTML5 Doctor](http://html5doctor.com/)
