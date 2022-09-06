# mfwcord

Discord bot to generate incomprehensible meme strings.

## Table of contents

* [mfwcord](#mfwcord)
  * [Table of contents](#table-of-contents)
  * [Documentation](#documentation)
  * [Dependencies](#dependencies)
  * [Setup](#setup)
  * [Development](#development)
    * [Standalone](#standalone)
    * [Standalone (Watch for changes)](#standalone-watch-for-changes)
    * [VS Code (Watch for changes)](#vs-code-watch-for-changes)
  * [Production](#production)
  * [Debugging](#debugging)
    * [VS Code](#vs-code)
  * [Code structure](#code-structure)
  * [License](#license)

## Documentation

* POSIX shell commands to be run as user are denoted by shell code blocks.
* 'Visual Studio Code' and 'Code - OSS' are abbreviated to VS Code.
* Documentation and code symbols are written in United States English in order
  to adhere to international standards and frameworks.

## Dependencies

- `node` >= 18
- `yarn`

## Setup

* Log into the [Discord Developer Portal](https://discord.com/developers)
* Go to [Applications](https://discord.com/developers/applications), select
  `New Application`, and enter the required details
* In the new application, go to `Bot` in the sidebar, select `Add Bot` and
  confirm
* Under `Privileged Gateway Intents`, enable `Precence Intent`,
  `Server Members Intent`, and `Message Content Intent`
* Under `Build-A-Bot`, select `Reset Token`
  * Copy this token and either set the `TOKEN` environment variable to it, or
    save it to [`token.txt`](token.txt)
* Go to `OAuth2` > `General` in the sidebar and under `Redirects` add any URI
  as the bot does not currently use the full OAuth2 chain
  (e.g. [`https://github.com/lunar-natalie/mfw`](https://github.com/lunar-natalie/mfw))
* Go to `OAuth2` > `URL Generator` in the sidebar
  * Under scopes, enable `bot` and `applications.commands`
  * Under `Bot Permissions`, enable `Send Messages`
  * Copy the generated URL, paste it into a web browser and follow the
    instructions to add the bot to a server

## Development

### Standalone

```shell
yarn install && \
yarn run dev
```

### Standalone (Watch for changes)

```shell
yarn install && \
yarn run watch
```

### VS Code (Watch for changes)

* Run Build Task (`Start development environment`)
    * Default keybind: `shift + ctrl/cmd + b`

## Production

```shell
yarn install --production && \
yarn run build && \
yarn start
```

## Debugging

### VS Code

* Run the default launch task (`Launch bot`)
    * Default keybind: `F5`

## Code structure

* Written in TypeScript
* Built and run using [Yarn](https://yarnpkg.com/) and [Node](https://nodejs.org/).
* Lines are no longer than 80 characters, unless readability is affected.
* Tab width is 4 spaces, excluding generated files such as `package.json` in
  which the default of a given tool is used.
* Source code is located in `src/`.
* Uses [JSDoc](https://jsdoc.app/) comments.

## License

Copyright (c) 2022 Natalie Wiggins.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

Written by Natalie Wiggins.

See `LICENSE` and `AUTHORS` for more information.
