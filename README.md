# Entertainment Web Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Overview
This project is an Entertainment Web Application built using Angular that allows users to browse, search, and bookmark movies and TV series. The application utilizes NgRx for state management, ensuring efficient handling of application state, and RxJS for managing asynchronous data streams. The design closely follows the provided specifications, offering a responsive and interactive user interface.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. here is the link to the project lab hosted on vercel: https://entertainmentwebpatrira.netlify.app/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Features

Browse movies and TV series.
Search functionality for filtering content.
Bookmarking functionality for saving favorite shows.
Responsive design for various devices.
Interactive UI with hover states.

## Technologies Used
Angular: Frontend framework for building dynamic applications.
NgRx: State management library for Angular applications.
RxJS: Library for handling asynchronous data streams.
TypeScript: Superset of JavaScript used for type safety.
Tailwind CSS: Utility-first CSS framework for styling.

## Implementation Details

Data Fetching and Display
Service: A dedicated Angular service (data.service.ts) is implemented to read and parse data from data.json using HttpClient.
Observable Streams: The data is fetched using RxJS observables and dispatched to the NgRx store for state management.
State Management with NgRx
Store Configuration: NgRx store is set up with actions, reducers, effects, and selectors to handle application state efficiently.
Actions and Reducers: Actions are defined to load data and manage bookmarks, while reducers update the state based on dispatched actions.
Routing and Navigation
Angular Router: The application uses Angular's routing capabilities to enable navigation between different pages, including Home, Movies, TV Series, and Bookmarked Shows.
## Bookmarking Feature
NgRx Integration: The bookmarking functionality is implemented by defining NgRx actions and reducers to handle adding/removing bookmarks.
Local Storage: Bookmark data is persisted using local storage, allowing users to retain their bookmarks even after refreshing the page.
Responsive Design
CSS Framework: Utilizes Tailwind CSS and Angular's Flex Layout to create a responsive design that adapts seamlessly to various screen sizes and devices.
UI Interactions and Hover Effects
Interactive Elements: Implemented hover states for buttons and links using Angular's built-in :hover pseudo-class, enhancing the user experience with visual feedback.
## Testing
Unit Tests: The application includes unit tests to ensure that components and services function as expected. Jest is used for testing to provide a robust testing environment.
Contributing
Contributions are welcome! Please submit issues or pull requests for improvements or new features.

## License
This project is licensed under the MIT License.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
