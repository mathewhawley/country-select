// src/mocks/handlers.js
import { rest } from "msw";
import { continents, countries } from "countries-list";

export const handlers = [
  rest.get("/api/continents", (req, res, context) => {
    return res(context.status(200), context.json(continents));
  }),
  rest.get("/api/countries", (req, res, context) => {
    return res(context.status(200), context.json(countries));
  }),
];
