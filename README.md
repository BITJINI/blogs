## Bitjini

Blogs

## Usage

1. Fork the repo.
2. To make a new post create a file inside `_posts` directory, for example `2013-01-20-welcome-to-bitjini.md`

    Layout for Blogs

    ```
    ---
    layout: post
    categories: [javascript, code-style]
    title: javascript coding style
    summary: 
    author: 
    profile:
    image:
    ---
    ```

    `author` is your github username

3. To server it locally, run:
    gem install jekyll
    jekyll serve --auto

The site should be available at
http://localhost:4000/blogs

4. Submit pull request
