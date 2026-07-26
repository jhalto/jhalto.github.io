# Zobayer Arman Nadim — Portfolio

A lightweight, responsive portfolio built with Jekyll and deployed on GitHub Pages.

## Architecture

The project uses feature-based organization. Page composition stays small, features own
their markup, and shared shell components remain independent.

```text
.
├── _includes/
│   ├── features/
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── hero.html
│   │   ├── services.html
│   │   └── work.html
│   └── shared/
│       ├── footer.html
│       └── header.html
├── _layouts/
│   ├── default.html
│   └── project.html
├── _projects/
│   ├── bdtender.md
│   ├── sahayagi.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       ├── features/
│       │   ├── navigation.js
│       │   └── reveal.js
│       ├── shared/
│       │   └── current-year.js
│       └── app.js
├── images/
├── _config.yml
└── index.md
```

## Dependency direction

```text
index.md → feature includes
layout → shared header/footer
app.js → feature modules + shared utilities
features → no cross-feature dependencies
```

## Making changes

- Add or edit homepage content in `_includes/features`.
- Add project content, links, and screenshots in `_projects`.
- The shared `_layouts/project.html` renders every project case study.
- Put site-wide shell UI in `_includes/shared`.
- Keep feature behavior in `assets/js/features`.
- Keep reusable utilities in `assets/js/shared`.
- Register new JavaScript features in `assets/js/app.js`.
- Use root-relative URLs through Jekyll's `relative_url` filter for deployment safety.

## Local development

With Ruby and Bundler installed:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deployment

GitHub Pages builds the `main` branch from the repository root.
