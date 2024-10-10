# Assignment Instructions

## Table of Contents

- [Week 1 - Hello World](##week-1-hello-world)
- [Week 2 - Components and Routing](##week-2-components-and-routing)
- [Week 3 - Mongo and Services](##week3-mongo-and-services)
- [Week 4 - Component Architecture and Forms](##week-4-component-architecture-and-forms)
- [Week 5 - State Management](##week-5-state-management)
- [Week 6 - Pipes and Directives](##week-6--pipes-and-directives)
- [Week 7 - Complex Components & Component References](##week-7-complex-components-and-component-references)
- [Week 8 - Deployment Strategies](##week-8-deployment-strategies)

---

## Week 1 - Hello World

### Overview

Angular gives us a full suite of out-of-the-box tools we can use to jump start developing.
To kick things off, we'll be greating a basic 'Hello World!' application using Angular.

### Steup

```bash
$ git checkout main
$ git checkout -b week1
```

### Instructions

1. First we'll need to make sure we have the Angular cli tools globally available. In a new terminal window, enter the following commands:

```bash
$ npm install -g @angular/cli
```

2. In a project folder of your choice, we'll need to generate a new Angular application:

```bash
$ ng new class-app
```

> For the purposes of this class, we'll call this `class-app`.

3. In the interactive menu, select `N` to skip routing and `SCSS` as the styles we'll be using.

This created a new folder and, would normally, instantiate a new git instance to begin making pushes, but because we're inside a git instance having cloned the assignments repo, it'll skipp this step.

Now that that's created, we're going to test run the app.

1. Enter the following command in a terminal:

```bash
$ ng serve
```

2. And open a browser pointed to `http://localhost:4200`.

Notice that the app is running with a pre-generated tamplate and styles.

Angular uses a default template with styles in a newly-created application, but we don't want to use this.

1. In `app.component.ts`, replace the string for `title` with 'Hello World!'.
2. Then in `app.component.html`, delete everything there, and replace with:

```html
<h1>{{ title }}</h1>
```

3. While the server's still running, save these files and see the changes reflect in the browser window.

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week2

---

## Week 2 - Components and Routing

### Overview

Now that Angular's setup and running. Let's add more building blocks by introducing a new feature. The main feature of our app is pizzas. We'll need to:

1. Create the routed component for the pizzas display
2. Add a router to navigate the SPA
3. Clean up loose ends in the DOM

SPAs need a way to display new components and features, but because they don't use traditional routing, we need to specificy how components are swapped in and out to create that dynamic expereince of navigating to different pages.

### Steup

```bash
$ git checkout week1
$ git checkout -b week2
```

### Instructions

#### Create New Components

Create a component for housing the main pizza functionality/features:

1. Create a folder and component for a `home` view:

```typescript
// home.component.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'home!';
}
```

```html
<!-- home.component.html -->
<h1>{{ title }}</h1>
```

2. Create a folder and component for `pizza-app`:

```typescript
// pizza-app.component.ts
@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss'],
})
export class PizzaAppComponent {}
```

```html
<!-- pizza-app.component.html -->
<div class="pizza-app">
  <div class="pizza-viewer">
    <div class="pizza">
      <div class="pizza__board"></div>
      <div class="pizza__base"></div>
    </div>
  </div>
</div>
```

I've provided the css for your convenience:

<details>
<summary>Open for SCSS</summary>

```scss
.pizza-viewer {
  width: 530px;
  position: relative;

  .pizza {
    width: 530px;
    height: 342px;
    position: absolute;
    z-index: 1;

    &__board {
      background: url(../../assets/board.svg) no-repeat 0 20px;
      background-size: contain;
      width: 500px;
      height: 342px;
      position: absolute;
      z-index: 1;
      top: 30px;
      left: 30px;
    }

    &__base {
      background: url(../../assets/base.svg) no-repeat;
      background-size: contain;
      width: 390px;
      height: 322px;
      position: absolute;
      right: 23px;
      top: 30px;
      z-index: 2;
    }
  }
}
```

</details>
<br>

3. Register the components in `AppModule`:

```typescript
// app.module.ts
@NgModule({
  declarations: [AppComponent, HomeComponent, PizzaAppComponent],
  ...
})
export class AppModule {}
```

4. Add the reference to this new component's selector in `AppComponent`'s HTML:

```html
<!-- app.component.html -->
<app-pizza-app></app-pizza-app>
```

With this, running the app will show a pizza SVG on the page. Now we can visualise what's happening in the component we created.

#### Add Routing

Next we want to be able to navigate to the feature and home views. To do that, we have to set up some routing:

1. Create a root-level routing file with the new components registered:

```typescript
// app-routing.module.ts
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pizzas',
    component: PizzaAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

> Exporting the `RouterModule` allows us to make configured modules available for importing into other modules. This technique is common through an Angular app.

> Creating a separate module for files to live ensures small chunls of work is completed and sticks to the single-responsibility feature design.

2. Then import that new module into the `AppModule` to register the routes:

```typescript
// app.module.ts
@NgModule({
  ...
  imports: [BrowserModule, AppRoutingModule],
  ...
})
export class AppModule {}
```

> From here on, any new components, directive, pipes, modules, etc will be assumed to be registered.

3. Lastly, we need to tell Angular where to perform component swapping in `AppComponent`. In the compone'ts HTML, replace everything with:

```html
<!-- app.component.html -->
<router-outlet></router-outlet>
```

Now when you run the app, you'll notice nothing really change, but if you inspect the section of content in Developer Tools and look at the "Elements" tab, expand blocks until you see `<router-outlet></router-outlet>`.

#### Adding data for cleanup

Lastly, we want to add in some relevant data apart from the views we generated solely with styles.

1. Add the follwing data pieces to the `PizzaAppComponent` and html:

```typescript
// pizza-app.component.ts
export class PizzaAppComponent {
  prices = {
    small: { base: 9.99, size: 10 },
    meduim: { base: 11.99, size: 12 },
    large: { base: 13.99, size: 14 },
    'x-large': { base: 15.99, size: 16 },
  };
}
```

```html
<!-- pizza-app.component.html -->
<div class="pizza-app">
  ...
  <div class="pizza__summary">
    <p>Small {{ prices.small.size }}</p>
    <p>Medium {{ prices.meduim.size }}</p>
    <p>Large {{ prices.large.size }}</p>
    <p>X-Large {{ prices["x-large"].size }}</p>
  </div>
</div>
```

What we're doing here is displaying the data values directly to the user, but it's actually for our benefit to see how we can expect these values to look.

You'll notice though the there's no formating to the pizza's size to indicate what this number means. To give our users an idea, we cna use formatting via a pipe.

The first place we'll use a pipe is in `HomeComponent`'s HTML by adding `titelcase` pipe to the template:

```html
<!-- home.component.html -->
<h1>{{ title | titlecase }}</h1>
```

We'll create a new pipe to accurately represent the pizza sizes:

1. Create a series of nested folder for `shared/pipes` at the same level as `home` and `pizza-app`.
2. In the `pipes` folder, create `SizePipe`:

```typescript
// size.pipe.ts
@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {
  transform(size: number): string {
    return `(${size}")`;
  }
}
```

3. Then apply the pipe like we did `titlecase` but on the pizza sizes:

```html
<!-- pizza-app.component.html -->
<div class="pizza-app">
  ...
  <div class="pizza__summary">
    <p>Small {{ prices.small.size | size }}</p>
    <p>Medium {{ prices.meduim.size | size }}</p>
    <p>Large {{ prices.large.size | size }}</p>
    <p>X-Large {{ prices["x-large"].size | size }}</p>
  </div>
</div>
```

Now you'll see that the sizes are formated to present more information about what the data means.

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week3

---

## Week 3 - Services and Intro to Mongo

### Overview

We want to think about how data will flow in our app. We have some harcoded values that we used earlier, and it would be beneficial to use a service to fetch and send requests to. A service like this could be used to fetch order history or give a list of presaved pizzas.

We'll want to:

1. Create a navbar to nvaigate the site.
2. Use the API to display a list pizzas.
3. Test our features to make sure everything works.

### Steup

```bash
$ git checkout week2
$ git checkout -b week3
```

### Instructions

#### Add Navigation

First we'll want to route our new feature that will eventually act as a pizza order history page.

1. Create a shared component for navigation called `NavBarComponent`:

```typescript
// nav-bar.component.ts
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {}
```

```html
<!-- nav-bar.component.html -->
<nav class="nav-bar">
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="pizzas" routerLinkActive="active">Creator</a>
</nav>
```

I've provided the css for your convenience:

<details>
<summary>Open for SCSS</summary>

```scss
.nav-bar {
  width: auto;
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;

  a {
    padding: 0 10px;
  }
}
```

</details>
<br>

2. Then use it in `AppComponent`'s HTML:

```html
<main>
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
</main>
```

> We're also wrapping the content in a main block that will specify that everything inside it is the root content, and will allow us to style the content.

I've provided the css for your convenience:

<details>
<summary>Open for SCSS</summary>

```scss
main {
  font-size: 24px;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}
```

</details>
<br>

#### Using the API

Now we'll get to use the API by creating a service for us to reference the pieces we need and feed them to the component.

1. In `shared`, crete a new folder called `services` and a file for `PizzasService`:

```typescript
// pizzas.service.ts
interface PizzaResponse {
  msg: string;
  pizzas: PizzaEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaEntity[]> {
    return this.http
      .get<PizzaResponse>('/api/pizzas')
      .pipe(map((data) => data.pizzas));
  }
}
```

2. Next, we'll use this in `HomeComponent`:

```typescript
// home.component.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly pizzas$ = this.pizzasService.getPizzas();

  constructor(private pizzasService: PizzasService) {}
}
```

```html
<!-- home.component.html -->
<section class="pizzas-list">
  <div class="pizzas-list-item" *ngFor="let pizza of pizzas$ | async">
    <p [class.pizzas-list-item__size]="pizza.toppings.length">
      {{ pizza.size }}
    </p>
    <span
      class="pizzas-list-item__toppings"
      *ngFor="let topping of pizza.toppings"
      >{{ topping }}</span
    >
  </div>
</section>
```

I've provided the css for your convenience:

<details>
<summary>Open for SCSS</summary>

```scss
.pizzas-list {
  display: flex;
  flex-direction: column;

  &-item {
    padding: 15px;
    margin-bottom: 10px;
    border: 0.5px solid rgb(0 0 0 / 12%);
    border-radius: 9px;

    &__size {
      margin-bottom: 10px;
    }

    &__toppings {
      border: 0.5px solid rgb(255 0 0 / 50%);
      border-radius: 10px;
      padding: 3px 7px;
      margin-right: 10px;
      font-size: 16px;
      background-color: rgb(255 0 0 / 12%);
      color: red;
    }
  }
}
```

</details>
<br>

_Be sure to create your own style for this section._

Now we can begin to see the connection between the front-end and the back-end to create a Full Stack application.

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week3

---

## Week 4 - Component Architecture and Forms

### Overview

TBD

### Steup

```bash
$ git checkout week3
$ git checkout -b week4
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week4

---

## Week 5 - State Management

### Overview

TBD

### Steup

```bash
$ git checkout week4
$ git checkout -b week5
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week5

---

## Week 6 - Pipes and Directives

### Overview

TBD

### Steup

```bash
$ git checkout week5
$ git checkout -b week6
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week6

---

## Week 7 - Complex Components and Component References

### Overview

TBD

### Steup

```bash
$ git checkout week6
$ git checkout -b week7
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week7

---

## Week 8 - Deployment Strategies

### Overview

TBD

### Steup

```bash
$ git checkout week7
$ git checkout -b week8
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week8
