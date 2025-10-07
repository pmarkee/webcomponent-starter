# Starter template for vanilla TS-based Web Components

## Overview

Recently I've been experimenting with [Web
Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and would like to share
what I consider to be a solid starting point for developing one of these.

By setting up a simple vanilla TS project (in my case via `pnpm`) with a build tool of your choice
(in my case `vite`), we can achieve a few nice benefits.
  - We can use TypeScript.
  - We can compile a separate HTML template and TS script into a single JS artifact. The alternative
  would be writing the template directly into the script as a string or fetching the template
  manually upon loading the script, both options tedious and error prone.
  - Vite also lets us hot-reload in local development, making for easy testing.

## Development

Requirements:
- `pnpm`
- your favorite text editor

Development:
1) `pnpm install`
2) edit `src/my-custom-element.ts` and `src/template.html`
3) `pnpm dev` for local development - will watch for file changes and hot reload
4) `pnpm build` for prod build

## Usage

`index.html` provides a basic demonstration of how to use a custom element like this. It includes:
  - custom styling: default values for CSS variables defined by the template can be overriden in
  global scope
  - custom attributes: passing in whatever options/values we want via HTML attributes (note:
  another way to do this would be `<slot>` elements, this is not demonstrated)
