# fable-import-phaser
F# Fable port of Phaser.js

## Installation

```sh
npm install --save fable-core phaser@^2.6.2
npm install --save-dev fable-import-phaser
```

> Note: If you're loading Phaser on the browser with [require.js](http://requirejs.org/),
use the prebuilt file: `node_modules/phaser/build/phaser.js`

## Usage

### F# project (.fsproj)

```xml
  <ItemGroup>
    <Reference Include="node_modules/fable-core/Fable.Core.dll" />
  </ItemGroup>
  <ItemGroup>
    <Compile Include="node_modules/fable-import-phaser/Fable.Import.Phaser.fs" />
  </ItemGroup>
```

### F# script (.fsx)

```fsharp
#r "node_modules/fable-core/Fable.Core.dll"
#load "node_modules/fable-import-phaser/Fable.Import.Phaser.fs"

open Fable.Core
open Fable.Import
```