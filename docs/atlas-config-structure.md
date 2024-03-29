# `atlas/*.js` Configuration Structure

Most of the data required to generate an Atlas instance comes from an object that is passed to the `options` parameter's `atlas` property of the `generateAtlas()` method.

When using the [Genesis](https://github.com/WYcreative/genesis), this data is usually split info multiple files, located in `./FrontEnd/config/atlas`.

The following is the documentation of the expected `./FrontEnd/config/atlas/**.js` exportable objects in a project that uses Atlas, followed by the `generateAtlas()`'s generated object.

Properties marked with `*` are required.

## `index.js`

- `{}`
  - `name` \* (__*String*__): The name of the project.
  - `description` (__*String*__): The description of the project.
  - `url` \* (__*Object*__): The list of URLs for the project. All of the following URLs are optional.
    - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
    - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
    - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
    - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
    - `repository` (__*String*__): The git repository URL.
    - `development` (__*String*__): The Development environment URL.
    - `stage` (__*String*__): The Stage environment URL.
    - `production` (__*String*__): The Production environment URL.

## `tokens/*.js`

### Colors
- `colors` (__*Array*__): The list of color tokens.
  - *(TODO: Color properties)*
### Typography
- `typography` (__*Array*__): The list of typography tokens.
  - *(TODO: Typography properties)*

### Others
*(TODO)*

## `components/*.js`

- `{}` A component.
  - `id` \* (__*String*__): The component ID.
  - `name` \* (__*String*__): The component's name.
  - `description` (__*String*__): The component's description.
  - `status` \* (__*String*__): The component's status. It accepts `wip`, and `done`.
  - `url` (__*Object*__): The list of URLs for the module.
    - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
    - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
    - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
    - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
    - `task` (__*String*__): The task URL, usually for an ActiveCollab project.
  - `data` (__*Array*__): The list of data entries for the component.
    - `{}` A data entry.
      - `name` (__*String*__): The data entry name.
      - `required` (__*Boolean*__): Wether the data entry is required in the component.
      - `type` (__*Array*__): The list of accepted data types.
      - `description` (__*String*__): The data entry description.
      - `children` (__*Array*__): The list of child data entries. Follows the same structure as `data`, making it recursive.
  - `notes` (__*String*__): Additional notes for the module.

## `modules/*.js`

- `{}` A module.
  - `id` \* (__*String*__): The module ID.
  - `name` \* (__*String*__): The module's name.
  - `description` (__*String*__): The module's description.
  - `status` \* (__*String*__): The module's status. It accepts `wip`, and `done`.
  - `url` (__*Object*__): The list of URLs for the module.
    - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
    - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
    - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
    - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
    - `task` (__*String*__): The task URL, usually for an ActiveCollab project.
  - `components` (__*Array*__): The list of components used in the module.
    - `<Module ID>` (__*String*__): The module ID. It should be one of the components defined in `components.js`, or a Pug file with the same ID as filename should be present in `./FrontEnd/src/views/components` as fallback.
  - `data` (__*Array*__): The list of data entries for the module.
    - `{}` A data entry.
      - `name` (__*String*__): The data entry name.
      - `required` (__*Boolean*__): Wether the data entry is required in the module.
      - `type` (__*Array*__): The list of accepted data types.
      - `description` (__*String*__): The data entry description.
      - `children` (__*Array*__): The list of child data entries. Follows the same structure as `data`, making it recursive.
  - `notes` (__*String*__): Additional notes for the module.

## `templates/*.js`

- `{}` A template.
  - `id` \* (__*String*__): The template ID.
  - `name` \* (__*String*__): The template's name.
  - `description` (__*String*__): The template's description.
  - `status` \* (__*String*__): The template's status. It accepts `wip`, and `done`.
  - `url` (__*Object*__): The list of URLs for the template.
    - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
    - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
    - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
    - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
    - `task` (__*String*__): The task URL, usually for an ActiveCollab project.
  - `modules` (__*Array*__): The list of modules used in the template.
    - `<Module ID>` (__*String*__): The module ID. It should be one of the modules defined in `modules.js`, or a Pug file with the same ID as filename should be present in `./FrontEnd/src/views/modules` as fallback.
  - `notes` (__*String*__): Additional notes for the template.

## Compiled object, returned by `generateAtlas()`

- `name` (__*String*__): The name of the project.
- `description` (__*String*__): The description of the project. If not defined, it will use the `package.json`'s `description` as fallback.
- `version` (__*String*__): The project SemVer version. Sourced from the project's `package.json`'s `version`.
- `lastUpdate` (__*Date*__): The date/time of the last time the project was updated. Corresponds to the last time Atlas was generated.
- `url` (__*Object*__): The list of URLs for the project.
  - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
  - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
  - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
  - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
  - `repository` (__*String*__): The git repository URL.
  - `development` (__*String*__): The Development environment URL.
  - `stage` (__*String*__): The Stage environment URL.
  - `production` (__*String*__): The Production environment URL.
- `environments` (__*Object*__): The list of Front-End environments used in the project. Sourced from the project's `package.json`'s `engines`.
  - `<Environment ID>` (__*Object*__): The environment ID.
    - `name` (__*String*__): The environment's name.
    - `url` (__*String*__): The environment's homepage URL.
    - `version` (__*String*__): The environment's SemVer version requirement.
- `browsers`: (__*Object*__): The list of supported browsers by the project. Sourced from the project's `package.json`'s `browserslist`.
  - `<Browser ID>` (__*Object*__): A supported browser.
    - `name` (__*String*__): The browser's name.
    - `url` (__*String*__): The browser's homepage URL.
    - `version` (__*String*__): The browser's SemVer minimum supported version.
- `dependencies` (__*Object*__): The list of dependencies used in the project. Sourced from the project's `package.json`'s `dependencies`.
  - `<Dependency ID>` (__*Object*__): The dependency ID.
    - `name` (__*String*__): The dependency's name.
    - `url` (__*String*__): The dependency's package URL.
    - `version` (__*String*__): The dependency's SemVer version requirement.
- `tokens`
  - *(TODO: Token properties)*
- `components` (__*Object*__): The project's components.
  - `path` (__*String*__): The path where the examples' HTML files are located in the project.
  - `list` (__*Array*__): The list of components.
    - `{}` A component
      - `id` (__*String*__): The component ID.
      - `name` (__*String*__): The component's name.
      - `description` (__*String*__): The component's description.
      - `status` (__*String*__): The component's status.
      - `url` (__*Object*__): The list of URLs for the component.
        - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
        - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
        - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
        - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
        - `task` (__*String*__): The task URL, usually for an ActiveCollab project.
      - `code` (__*String*__): The template code for the component.
      - `data` (__*Array*__): The list of data entries for the component.
        - `{}` A data entry.
          - `name` (__*String*__): The data entry name.
          - `required` (__*Boolean*__): Wether the data entry is required in the component.
          - `type` (__*Array*__): The list of accepted data types.
          - `description` (__*String*__): The data entry description.
          - `children` (__*Array*__): The list of child data entries. Follows the same structure as `data`, making it recursive.
      - `notes` (__*String*__): Additional notes for the component.
- `modules` (__*Object*__): The project's modules.
  - `path` (__*String*__): The path where the examples' HTML files are located in the project.
  - `list` (__*Array*__): The list of modules.
    - `{}` A module
      - `id` (__*String*__): The module ID.
      - `name` (__*String*__): The module's name.
      - `description` (__*String*__): The module's description.
      - `status` (__*String*__): The module's status.
      - `url` (__*Object*__): The list of URLs for the module.
        - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
        - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
        - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
        - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
        - `task` (__*String*__): The task URL, usually for an ActiveCollab project.
      - `components` (__*Array*__): The list of components used in the module.
        - `<Component ID>` (__*String*__): The component ID.
      - `code` (__*String*__): The template code for the module.
      - `data` (__*Array*__): The list of data entries for the module.
        - `{}` A data entry.
          - `name` (__*String*__): The data entry name.
          - `required` (__*Boolean*__): Wether the data entry is required in the module.
          - `type` (__*Array*__): The list of accepted data types.
          - `description` (__*String*__): The data entry description.
          - `children` (__*Array*__): The list of child data entries. Follows the same structure as `data`, making it recursive.
      - `notes` (__*String*__): Additional notes for the module.
- `templates` (__*Object*__): The project's templates.
  - `path` (__*String*__): The path where the examples' HTML files are located in the project.
  - `list` (__*Array*__): The list of templates.
    - `{}` A template
      - `id` (__*String*__): The template ID.
      - `name` (__*String*__): The template's name.
      - `description` (__*String*__): The template's description.
      - `status` (__*String*__): The template's status.
      - `url` (__*Object*__): The list of URLs for the template.
        - `design` (__*String*__): The design URL, usually for a Figma or Sketch project.
        - `designLibrary` (__*String*__): The design library URL, usually for a Figma or Sketch project.
        - `prototypeDesktop` (__*String*__): The desktop prototype URL, usually for an InVision project.
        - `prototypeMobile` (__*String*__): The mobile prototype URL, usually for an InVision project.
        - `task` (__*String*__): The task URL, usually for an ActiveCollab project.
      - `modules` (__*Array*__): The list of modules used in the template.
        - `<Module ID>` (__*String*__): The module ID.
      - `notes` (__*String*__): Additional notes for the template.
