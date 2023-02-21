## Outline

Write a set of dropdowns, one displaying a list of continents, the other showing
a list of countries that is filtered by the selected continent.
Use the selection data to print the sentence:

> `I am going to {country name} in {continent name}!`

### What we are looking for:

- Data Fetching
- State Management
- CSS Styling
- Component Architecture & Composition
- Reasoning for tooling choices in `CONTEXT.md`
- _Bonus:_ Unit tests for your components

### Getting started

- Familiarise yourself with the provided data from the API
- Consider the data filtering requirements for the "countries" dropdown
- Head to `/src/App.tsx` to begin
- You are welcome to use the entire repository, create new folders and add files, components as you see fit

### Requirements

- Build two dropdowns
  - Both dropdowns' initial state should be empty
  - Continent Dropdown: Select a continent from the list
  - Countries Dropdown:
    - Filter the available countries by continent selection
    - Select a country from the filtered list
- Print the selections to the screen:
  - You have selected {country} on {continent}.
  - Consider partial, empty or error states you might encounter
- APIs for fetching continents and countries are available as
  - `GET /api/continents`
  - `GET /api/countries`
  - Feel free to implement data fetching on your own or use the helper async fetch functions provided in `/src/utils`
  - TypeScript types are available for the API data in `/src/types`

### Guidelines

- Consider transient states like disabled, error, empty or loading
- Please match the styling of the dropdowns as per the provided UI mockup
- You are free to install NPM packages to assist your work but,
  - Please do **not** use ready-made UI component libraries such as Material UI, Chakra UI, Flowbite or Daisy UI as we
    would like to see how you approach writing your own custom components and styling
  - You **can** use un-styled helper libraries such as Headless UI or Radix UI if you want but this is not a
    requirement
- You are free to choose and install your preferred styling, data fetching and state management libraries but please add
  a short description in the `CONTEXT.md` file on _why_ you have chosen that library over others
