---
layout: default
---

## External dependencies

KBSecret uses Keybase and KBFS, so you'll need to have a [Keybase account](https://keybase.io/)
and have the client installed.

You can find installation instructions for your system [here](https://keybase.io/download).

## Installation

### System independent (`gem`)

```bash
$ gem install kbsecret
$ # OR, if you'd like a prerelease
$ gem install --pre kbsecret
```

### macOS (`brew`):

```bash
$ brew tap kbsecret/kbsecret
$ brew install kbsecret
```

### Arch Linux (`pacman`)

1. Add [quarry](https://github.com/anatol/quarry) to your `/etc/pacman.conf`
2. `pacman -S ruby-kbsecret`

### What about `<system>`/`<package-manager>`?

If you don't see your system or package manager listed above, KBSecret doesn't have an
official package available for it.

Please help us by contributing one!

# Testing your installation

Once you've installed KBSecret, you can test it by running:

```bash
$ kbsecret version
```

If you see something like `kbsecret version 0.9.7.`, you're good to go!

Everything working? Check out the [quick start](/#/quickstart/) guide.

Something broken? [Tell us about it](github.com/kbsecret/kbsecret/issues).
