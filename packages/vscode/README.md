# fable-import-vscode

Fable bindings for Visual Studio Code

## Installation

```sh
$ dotnet fable add fable-core@next fable-import-vscode@next
```

## Usage

### F# project (.fsproj)

```xml
  <ItemGroup>
    <PackageReference Include="Fable.Core" Version="1.0.0-narumi-*" />
    <ProjectReference Include="./node_modules/fable-powerpack/Fable.PowerPack.fsproj" />
    <ProjectReference Include="./node_modules/fable-import-vscode/Fable.Import.VSCode.fsproj" />
  </ItemGroup>
```
