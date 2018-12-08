---
title: README
---

# NetlifyPress

This is a book written in Gitbook and hosted with Netlify.

### Quick Start

Let's get started with NetlifyPress in three steps.

### 1.Fork [NetlifyPress](https://github.com/DemoMacro/NetlifyPress) on Github

More info: [GitBook Help Center](https://help.gitbook.com/)

### 2.Deploy which repository you forked on Netlify

More info: [A Step-by-Step Guide: GitBook on Netlify](https://www.netlify.com/blog/2015/12/08/a-step-by-step-guide-gitbook-on-netlify/)

### 3.Add the Netlify Identity Widget

You'll need to add this to the <head> of your CMS index page at /admin/index.html, as well as the <head> of your site's main index page.We could include the script in your site using Netlify's Script Injection feature;

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```
 Add the following script before the closing body tag of your site's main index page using Netlify's Script Injection feature.

```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

### You are finished with NetlifyPress

Now you can control site content in https://yoursite.netlify.com/admin/