### Motivation

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
