# Cognize

_Cognize: to perceive, know, or become aware of. (verb)_

## What is cognize?

Cognize is a VS Code extension that allows you to create and version control diagrams.

It is a general diagramming tool, but with a focus on working with a local codebase.

## Installing The VS Code Extension

1.  Install from the Marketplace (**TODO** Publish it and link to it here)
1.  Or go to extensions in VS Code and search for "Cognize"

## Local development

If you want to run it from source...

To run the local development server, first clone this repo.

Install dependencies:

```bash
yarn
```

Start the local development server:

```bash
yarn dev
```

Open the example project at `localhost:5420`.

## Publishing:

[Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

## About this repository

It's based on the awesome [Tldraw](https://github.com/tldraw/tldraw) project. All documentation below is about packages
and such that we will not try to change, so it's easier to update from the upstream tldraw repo.

### Top-level layout

This repository's contents is divided across four primary sections:

- `/apps` contains the source for our applications
- `/packages` contains the source for our public packages
- `/scripts` contains scripts used for building and publishing
- `/assets` contains icons and translations relied on by the app

### Applications

- `examples`: our local development / examples project
- `docs`: our docs site at [tldraw.dev](https://tldraw.dev)
- `vscode`: our [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=tldraw-org.tldraw-vscode)

### Packages

- `editor`: the tldraw editor
- `ui`: the editor's user interface
- `tldraw`: the main tldraw package containing both the editor and the UI
- `primitives`: low-level primitives for working with vectors and geometry
- `tlschema`: shape definitions and migrations
- `tlsync-client`: a library for (locally) syncronizing editor instances
- `tlstore`: an in-memory reactive database
- `tlvalidate`: a validation library used for run-time validation
- `tlassets`: a library for working with tldraw's fonts and translations
- `file-format`: a library for working with tldraw's `.tldr` file format
- `utils`: low-level data utilities shared by other libraries

## Community

Have questions, comments or feedback? [Join our discord](https://discord.gg/rhsyWMUJxd) or [start a discussion](https://github.com/tldraw/tldraw/discussions/new).

## Distributions

You can find tldraw on npm [here](https://www.npmjs.com/package/@tldraw/tldraw).

## License

The source code for various apps and packages in this repository (as well as our 2.0+ distributions and releases) are currently licensed under Apache-2.0. These licenses are subject to change in our upcoming 2.0 release. If you are planning to use tldraw in a commercial product, please reach out at [hello@tldraw.com](mailto://hello@tldraw.com).

## Contribution

Please see our [contributing guide](https://github.com/tldraw/tldraw/blob/main/CONTRIBUTING.md). Found a bug? Please [submit an issue](https://github.com/tldraw/tldraw/issues/new).

Note: we are currently unable to accept contributions on the `@tldraw/tldraw` or `@tldraw/editor` packages while we work out our final licensing.

## Contact

Find us on Twitter at [@tldraw](https://twitter.com/tldraw) or email [hello@tldraw.com](mailto://hello@tldraw.com). You can also [join our discord](https://discord.gg/rhsyWMUJxd) for quick help and support.
