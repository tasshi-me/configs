# configs

Shareable configs (Renovate preset, ESLint, tsconfig)

## Usage

### Renovate

Add the `extends` property to your `renovate.json`:

```json
{
  "extends": ["github>tasshi-me/configs"]
}
```

See [default.json](default.json) for the settings.

### ESLint

```console
$ npm install -D eslint @tasshi/configs
```

```js
// eslint.config.js
import config from "@tasshi/configs/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
export default config;
```

### tsconfig

```console
$ npm install -D typescript @tasshi/configs
```

```jsonc
// tsconfig.json
{
  "extends": "@tasshi/configs/tsconfig",
}
```

## Development

```console
$ pnpm install
$ pnpm run lint
```

## License

[MIT](LICENSE)
