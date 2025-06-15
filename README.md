# Angular 18 User Management App

A modern, responsive **User Management** single-page application built with **Angular 18** and **standalone components**. It demonstrates best practices in layout, routing, shared components, and rich data-grid & form UX using **Angular Material** and **ng-bootstrap**.

---

## 🚀 Features

- **Shell Layout**
  - Persistent sidebar navigation
  - Optional top toolbar (configurable)
  - Collapsible “mini” sidebar with icons only
- **Dynamic Routing**
  - Lazy-loaded feature routes
  - Nested child routes under a `LayoutComponent`
- **Shared Table Component**
  - Search, sort (via clickable headers), pagination (ng-bootstrap)
  - Column chooser (show/hide), adjustable column widths
  - Dark-mode toggle & optional borders
  - CSV export
- **CRUD Views**
  - **User List** — grid of users with all table features
  - **User Details** — create/edit form with reactive forms, validation, datepicker, select, textarea, switches
- **Tech Stack**
  - Angular 18 Standalone Components
  - Angular Material (cards, forms, grid, icons, datepicker, slide-toggle)
  - ng-bootstrap (pagination)
  - RxJS for reactive data streams
  - CSS Flexbox for responsive form layouts

---

## 📂 Project Structure

```
src/
├── app/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layout/         # LayoutComponent + SCSS
│   │   │   ├── sidebar/        # Collapsible sidebar
│   │   │   └── table/          # Standalone TableComponent + SortableDirective
│   │   └── services/
│   │       └── user.service.ts # HTTP calls
│   ├── main/
│   │   └── components/
│   │       ├── user-list/      # UserListComponent (uses shared table)
│   │       └── user-details/   # UserDetailsComponent (reactive form)
│   ├── app.routes.ts           # Combined routes
│   ├── app.config.ts           # bootstrapApplication providers (router, HTTP, animations)
│   └── app.component.ts/html   # Root standalone component
└── main.ts                     # bootstraps AppComponent
```

---

## ⚙️ Getting Started

1. **Clone the repo**

    ```bash
    git clone https://github.com/your-username/angular-user-management.git
    cd angular-user-management
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the dev server**

    ```bash
    ng serve
    ```

4. **Open your browser** at `http://localhost:4200`

---

## 🛠️ Customization

- **API URL** in `UserService` — point to your backend
- **Themes** — swap Angular Material prebuilt themes in `angular.json`
- **Pagination page sizes**, table defaults, form fields — tweak in component inputs

---

## 📖 Learn More

- [Angular Standalone Components](https://angular.io/guide/standalone-components)
- [Angular Material](https://material.angular.io/)
- [ng-bootstrap](https://ng-bootstrap.github.io/)
- [Reactive Forms](https://angular.io/guide/reactive-forms)

---

Feel free to raise issues or pull requests. Enjoy building!
