<img align="right" alt="traffic" src="https://pv-badge.herokuapp.com/total.svg?repo_id=olavoparno-react-use-rapid7"/>

# react-use-rapid7

> Adds Rapid7 InsightOps hooks to React

[![NPM](https://img.shields.io/npm/v/react-use-rapid7.svg)](https://www.npmjs.com/package/react-use-rapid7)

---

| Statements                                                                               | Branches                                                                             | Functions                                                                              | Lines                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
- [Documentation](#documentation)
- [Contributors](#contributors)
- [License](#license)

---

## Install

```bash
npm install --save react-use-rapid7
```

---

## Usage

- You can just call for useRapid7 hook and expect the following parameters:

| key                      | description        | example                               |
| ------------------------ | ------------------ | ------------------------------------- |
| token                    | Rapid7's API key   | 29189s8asa-skajskj1298sas-kjsaksjak92 |
| rapid7's optional config | Other extra config | { print: true }                       |

---

## Examples

```tsx
const logger = useRapid7('sas1209-cdbb-4afc-b10f-2198sasak', {
  print: true,
});

aSimplePromise()
  .then(() => logger.info('aSimplePromise has been resolved'))
  .catch((error) =>
    logger.error(`aSimplePromise has errored with ${error.message}`)
  );
```

---

## Documentation

`useRapid7()` returns a logger with the following methods:

```tsx
type MessageHandler = (
  message: string | Record<string & number & symbol, string> | Error
) => void;

type LoggersClientReturn = {
  warn: MessageHandler;
  error: MessageHandler;
  info: MessageHandler;
  log: MessageHandler;
};
```

You can use a simple string or an object for the message.

---

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://olavoparno.github.io"><img src="https://avatars1.githubusercontent.com/u/7513162?v=4?s=70" width="70px;" alt="Olavo Parno"/><br /><sub><b>Olavo Parno</b></sub></a><br /><a href="#ideas-olavoparno" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/olavoparno/react-use-rapid7/commits?author=olavoparno" title="Code">💻</a> <a href="https://github.com/olavoparno/react-use-rapid7/commits?author=olavoparno" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

## License

react-use-rapid7 is [MIT licensed](./LICENSE).

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
