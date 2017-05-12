# fable-import-pubnub

Fable bindings for PubNub API

## Installation

```sh
$ npm install --save fable-core
$ npm install --save-dev fable-import-pubnub
```

## Usage

### In a F# project (.fsproj)

```xml
  <ItemGroup>
    <Reference Include="node_modules/fable-core/Fable.Core.dll" />
  </ItemGroup>
  <ItemGroup>
    <Compile Include="node_modules/fable-import-pubnub/Fable.Import.PubNub.fs" />
  </ItemGroup>
```

### In a F# script (.fsx)

```fsharp
#r "node_modules/fable-core/Fable.Core.dll"
#load "node_modules/fable-import-pubnub/Fable.Import.PubNub.fs"

open Fable.Core
open Fable.Import
```