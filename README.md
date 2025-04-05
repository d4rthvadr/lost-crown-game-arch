### 🚀 Motivation

This project explores how software design patterns can be applied to build maintainable and extensible game codebase. Inspired by titles like Prince of Persia: The lost crown, the goal is to structure the code in a way that supports modular features like DLCs, new items (e.g amulets) and a plugin system - without introducing tight coupling.

By leveraging well-known design patterns (like Strategy, Observer, Factory etc.), this repo serves a blueprint for evolving a game architecture that adapts well to future changes.

### ❌ What this is not.

This is not a game engine, not is it intended to run AAA titles in a browser or on console hardware. Instead , it is a framework-level exploration focused on code structure of concerns, and long-term maintainability.

If you are building a game and want to ensure your logic remains modular and testable over time- this project could be for you.

### 🧠 Contributions

Contributions are welcome! If you have ideas for improving the architecture, adding new patterns, or enhancing the flexibility of this design, feel free to jump in. Whether it’s refining the current setup or suggesting new directions, your input is appreciated.

Here are a few ways you can contribute:

- Suggest or implement new design patterns

- Refactor components for better decoupling

- Add support for hypothetical plugins or DLCs

- Improve developer experience or tooling

- Write documentation or usage examples

### Patterns used

- Strategy pattern
- Plugin pattern
- Observer pattern
- Decorator pattern
- Event pattern
- Chain of responsibility pattern

### Folder structure

| Folder   | Purpose                                                       |
| -------- | ------------------------------------------------------------- |
| core/    | Domain logic for actions, commands, player, context, buffs    |
| plugins/ | Extendable features (e.g amulets, passives)                   |
| systems/ | Runtime systems that enhance functionality (replays, effects) |
| game/    | Ties everything together (orchestrated game flow)             |
