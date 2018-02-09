---
layout: default
---

## Custom commands

The main `kbsecret` executable is modeled after `git` &mdash; it scans `$PATH`
for candidate commands of the form `kbsecret-foo`, and allows them to be executed as subcommands.

Built-in and core commands are given precedence over commands found on the `$PATH`, but any name
not already taken by a built-in or core command can be used for a custom command:

```bash
$ cat > ~/bin/kbsecret-hello
#!/usr/bin/env bash

echo "hello kbsecret, from bash!"
^D

$ chmod +x ~/bin/kbsecret-hello

$ kbsecret hello
hello kbsecret, from bash!
```

There are a few advantages to using custom `kbsecret-*` commands:

* Shell completions can properly suggest your command as a completion candidate, and your
command will show up in `kbsecret help` and `kbsecret commands`
* KBSecret will pass the user's configured defaults to your command, including any default
arguments the user wants to be respected
* `kbsecret foo` just looks nice!

The [ext-cmds](https://github.com/kbsecret/ext-cmds) repository has some examples of custom
commands.

(Regardless of whether you name your custom command as above, you can still use the
`KBSecret::CLI` class for convenience command writing in Ruby &mdash; see
[the docs](http://www.rubydoc.info/gems/kbsecret/)).

## Command configuration

**IMPORTANT**: Versions 1.0.0.pre.2 and onwards use `/keybase/private/<user>/kbsecret/.config`
as the configuration directory, rather than `~/.config/kbsecret`.

`/keybase/private/<user>/kbsecret/.config/commands.ini` can be used to configure individual `kbsecret` subcommands.

For example, this is how you would tell `kbsecret` to always pass `--no-notify` to
`kbsecret new-session`:

```ini
[new-session]
args = --no-notify
```

Users can specify additional keys and values for each `kbsecret` subcommand, but only
the `args` key is explicitly retrieved. All others need to be handled manually by the subcommand,
or via `KBSecret::Config.command` (see the [API docs](http://www.rubydoc.info/gems/kbsecret/)).

## Custom types

KBSecret doesn't restrict you to the record types provided by the installation &mdash; you can
write your own!

Record types in KBSecret are just class definitions (with a little DSL magic), and custom
ones get loaded from `/keybase/private/<user>/kbsecret/.config/record/`.

Here's an example of a simple, single-field record (`simple.rb`). It's just 3 lines!

```ruby
class KBSecret::Record::Simple < KBSecret::Record::Abstract
  data_field :input
end
```

Placed in the directory above, it'll work exactly as expected:

```bash
$ kbsecret new simple foobar
Input? hello, my simple record type!

$ kbsecret list -t simple
foobar
```

Check out `KBSecret::Record::Abstract` in the [API docs](http://www.rubydoc.info/gems/kbsecret/)
for the full spec.

## Shell completion

Limited shell completion is currently available for GNU Bash. The
[README](https://github.com/kbsecret/kbsecret/blob/master/README.md) has the details on how to
generate it.

KBSecret was written with shell completion in mind. Commands like `kbsecret list`,
`kbsecret sessions`, and `kbsecret types` all provide easy-to-parse completable options,
and all core `kbsecret` subcommands support the `--introspect-flags` flag:

```bash
$ kbsecret list --introspect-flags
-s
--session
-t
--type
-a
--show-all
-V
--verbose
-w
--no-warn
-h
--help
--introspect-flags
```

Together, these are useful primitives for building new completion scripts. If you happen to write
some, please consider submitting them to KBSecret!
