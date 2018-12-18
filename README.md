---
title: README
---
# VuePress-NetlifyCMS

> A vuepress site hosted with Netlify CMS.

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DemoMacro/VuePress-NetlifyCMS/)

### Quick Start

Let's get started with VueCMS in three steps.

### 1.[Fork](https://github.com/DemoMacro/VuePress-NetlifyCMS/fork) on Github

### 2.[Deploy](https://app.netlify.com/start/deploy?repository=https://github.com/DemoMacro/VuePress-NetlifyCMS) to Netlify
```
Build command: vuepress build
Publish directory: pages
```
### 3.Add the Netlify Identity Widget

You'll need to add this to the ```<head>``` of your CMS index page at /admin/index.html, as well as the ```<head>``` of your site's main index page.We could include the script in your site using Netlify's Script Injection feature;

```html
<script src="https://cdn.jsdelivr.net/npm/netlify-identity-widget@1.5.2/build/netlify-identity-widget.min.js"></script>
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

> Now you can control site content in https://yoursite.netlify.com/admin/