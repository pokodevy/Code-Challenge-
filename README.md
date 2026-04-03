# No-code Dynamic Text Prototype

This prototype explores a simpler alternative to expression-based binding such as `{{input.value}}`.

 - https://lighthearted-pavlova-32c2b3.netlify.app

## Idea

Instead of asking a non-technical user to write expressions, the UI breaks the task into three plain-language steps:

1. Enter sample data
2. See a live text preview
3. Choose what the text should show and when it should appear

## What the prototype supports

- Display dynamic data from an input
- Combine values with a ready-made option: name and age together
- Apply a transformation with a checkbox: uppercase
- Add conditional visibility with sentence-like controls

## Why this is simpler

- No code syntax in the UI
- The user never sees raw bindings or template strings
- The mental model is direct: pick content, pick a rule, see the result
- Changes are visible immediately in the preview

## How a non-technical user would use it

1. Type a name and age on the left
2. In the right panel choose what the text should show
3. Optionally turn on uppercase
4. Decide when the text should appear with a plain sentence: age is more than / less than / exactly
5. Watch the preview update in real time

## Trade-offs

- The prototype is intentionally narrow and guided
- It supports a small set of common actions instead of a fully flexible system
- This is meant to test clarity, not completeness

## Local run

- `npm install`
- `npm run dev`

## Submission notes

For the final submission:

- record a 5–10 minute Loom walking through the flow
- push the project to GitHub, GitLab, or Bitbucket
- invite `ismail-doitbig` to the repository
