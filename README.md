# AssetMag

Requirements:

The user will have the ability to create an asset, modify and delete it. Also, he will have the
ability to view the list of all assets stored in the system. Bonus points:

- filter the asset list based on asset type
- sort the asset list alphabetically (ascending and descending).

Assets are equipments of various types like cars, phones, printers, ....
The web app must be able to work with different types of assets.
Every asset has at least a name (only alphabetical characters), a type and a quantity.
Depending on the asset type, it could also have additional, non mandatory, values that can
be filled and modified by the user.

TODO:

- [ ] Replace template forms with reactive forms, so it's easy to generate the type specific fields
- [ ] the sorter and filter act individually (operator “OR”), so make they work together as an operator “AND”
- [ ] Handle API requests errors
- [ ] Add validation to favorite form
- [ ] Add cancel/close button on the add/edit forms
- [ ] Fix/implement unit tests
- [ ] Fix/implement e2e tests

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `npm run init-db` to initialize the database.

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
