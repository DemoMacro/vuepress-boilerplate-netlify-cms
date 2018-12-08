---
title: VueCMS
---
# VueCMS

### This is a book written in VuePress and hosted with Netlify.

### Quick Start

Let's get started with VueCMS in three steps.

### 1.Fork [VueCMS](https://github.com/DemoMacro/VueCMS) on Github

### 2.Deploy which repository you forked on Netlify
```
Build command: vuepress build
Publish directory: pages
```
### 3.Add the Netlify Identity Widget

You'll need to add this to the ```<head>``` of your CMS index page at /admin/index.html, as well as the ```<head>``` of your site's main index page.We could include the script in your site using Netlify's Script Injection feature;

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

#### You are finished with VueCMS

Now you can control site content in https://yoursite.netlify.com/admin/