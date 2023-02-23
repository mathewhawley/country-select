# Context File

## What is this file for?

Please use this file to give some context and meaning to the decisions you've
made when implementing a solution to the exercise.

## What are we looking for?

You are welcome to keep it brief but please jot down a few notes on:

- Why you have chosen a library?
- What other libraries you have considered (if any)

The headings below are just there to guide you, feel free to remove them or add
new ones based on your selection of tools.

---

### State Management

#### `jotai`

- Simple state management for very small use-case. Allows me to reference the same piece of state in multiple places.
- Alternatives such as RTK are a bit overkill for the scope of this, the global state I'm using is only two string fields.
- I don't like reaching for Context as a general global state management mechanism. There are pitfalls such provider hell, performance footguns. I find that is more useful for things like localised state and data management in compound components.

### CSS Styling

- Kept this to plain CSS, I thought this would allow for a more meaningful review of how I handled the styling.
- I've been exploring TailwindCSS a bit recently and it looks awesome, however I don't think using a library in this instance is that helpful to review.
- Considered using SCSS, but again, thought plain CSS might be more interesting to review at this small size. It would be helpful to do things like namespace custom properties so they don't clash with properties from other sources etc.
- I had a go at sketching out a variable system, while a bit OTT for this tiny exercise, I've tried to show how I might think about orchestrating design decisions across different aspects of a UI.

### Data Fetching

#### `react-query`

- Opted for this as it does a brilliant job of abstracting away all the complexity of request handing.
- Allowed me to quickly put checks in place for loading/error states, with automatic caching and retries.
- Does a great job of keeping cached data separate from client state.
- Chose it as it's the most well known of the many similar libraries, and does what I needed it to for this exercise with minimal effort.

### Additional notes

- Obviously there is a lot of stuff missing here. I have not implemented keyboard or touch screen handling, only mouse. There are no `aria` attributes, and this has not been tested against any assistive technologies. This is a classic `<div>` job.
- You can see the 'empty' state handling by returning an empty object from the MSW handlers
- I've tried to avoid getting into the 'illegal' state of a user selecting a country that doesn't exist in a continent, by resetting the 'country' when the continent is changed.
- Tests. I haven't added any. But if I were, I would be using `testing-library`.
- The test stated this should take about 2 hours. I've have used quite a bit more time, as I went a bit OTT with thinking about the style variables and trying to cater for as many UI behaviours as I could, and spent a bit of time reading around about a11y implementations for custom comboboxes, and trying to gauge what I could incorporate in the given time.
