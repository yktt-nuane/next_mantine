# next_mantine <!-- omit in toc -->

[![Last Commit](https://img.shields.io/gitlab/last-commit/tatsuro-yokoyama/nextjs-boilerplate)](https://gitlab.com/tatsuro-yokoyama/nextjs-boilerplate/graphs/commit-activity)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.gitlab.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Setup](#setup)
    - [install](#install)
    - [Reveal secrets](#reveal-secrets)
    - [Hide secrets](#hide-secrets)
    - [Environment Variables](#environment-variables)
      - [`.env.local`](#envlocal)
  - [Develop](#develop)
  - [Deploy](#deploy)
- [Misc](#misc)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js (version 18.11.11 or higher)
  - Next.js (version 13.2.4 or higher)
  - ESLint
  - Prettier
  - Stylelint

## How to

### Setup

#### install

`npm install` to install packages

`git secret add .env.local` to add `.env.local` to secret file

#### Reveal secrets

`npm run reveal` to reveal secret files.

#### Hide secrets

`npm run hide` to hide secret files.

#### Environment Variables

##### `.env.local`

```.env.local

```

### Develop

`npm run dev` to start development server.

### Deploy

Every time you push to gitlab, it is automatically deployed to Vercel.

## Misc

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [Smart119 INC.](https://smart119.biz/)
  - [Tatsuro Yokoyama](https://gitlab.com/tatsuro-yokoyama)
