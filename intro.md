---
comments: "kbsecret main page markdown"
---

KBSecret is a command line utility and library for managing *secrets*.

Secrets can be structured (like login pairs and environment keys), or unstructured (like raw
text or blobs of data). They can also be shared between multiple individuals or entire teams via
the Keybase platform.

### Benefits over other password managers

* Easy secret sharing with multiple users

    KBSecret shares collections of secrets inside of a session, which multiple users
    can belong to, read from, and modify.

    For example, to print the `github` login in the `dev-team` session:

    ```bash
    $ kbsecret login -s dev-team github
    ```

* No PGP setup or management required

    KBSecret uses [KBFS](https://keybase.io/docs/kbfs) to store secrets, meaning that
    you can use your existing Keybase account and key.

    As long as `keybase` and `kbfs` are running on your system, your records are available.

* Records are files, sessions are directories

    KBSecret has no opaque databases or caches &mdash; records are JSON-structured files, and
    sessions are directories containing those files.

    KBSecret's sessions and records can be manipulated with standard Unix tools (although
    we recommend using the [`kbsecret` commands](man/))

Interested? Check out [the installation](installation) and [quick start](quickstart) guides.
