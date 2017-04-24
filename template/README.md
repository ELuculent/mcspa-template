# MCSPA by Luculent

## Introduction

Thanks for visiting the page. Please leave a review on the [SpigotMC Page]() and if you have any issues join my [Discord](https://discord.gg/BnJ5b5G) or message me on Discord "#9865" or open an issue here on Github and I will get to it quickly.

>Vue: pronouced like 'view' :)

>Note: This is not a dynamioc (PHP) page. This is purely just for information. I am currently working on a PHP version but it wil be some time before I release that.

## Template

Unlike some "single page templates" this uses components that are rendered by vue.js and vue-router. This means that your website is fast and looks as refined as a website with multiple pages (MPA). 

## Custom HTML Tags

This template uses custom HTML tags that define to different things. This section explains all that are used.

___

### Router-Link

The `<router-link>` tag renders to `<a>` as a HTML tag. This is a component used by Vue-Router to define the SPA links. This removes the load time from the pages completely. So long as the page is defined in "routes" in the file "src\main.js"

### Bootstrap-Vue

Due to the huge amount of tags used in this component we have included [this link](https://bootstrap-vue.github.io/ "BS-Vue") to the Bootstrap-Vue home page. This is used in combination with Bootstrap 4 for fast loading adaption to the resolution seen. We have used dropdowns, media, navbars and others in this template.

___

## How to Install

Clone the repository

```BASH
$ git clone http://github.com/ELuculent/repository-name.git
``` 
or clone it from github

or download it from [SpigotMC](link.here)

or vue-cli:

```BASH
$ npm install vue-cli
$ vue init ELuculent/MCSPA mcspa
```
  ***
Install the dependencies

```BASH
$ cd mcspa
$ npm install
```
***
And that's it!

To run the app in development mode type the following:
```BASH
$ npm run dev
```

>Note: You do not need [Git Bash](https://git-for-windows.github.io/) to run npm however you will need [node.js](https://nodejs.org/). Git Bash is only used in this example as it is supported by markdown. NPM is included in node.js.

___

## How to Add More Pages

The template uses .vue files defined by [vue.js](https://vuejs.org/) to manage its components. To add another page, make a .vue file in "src\components" and add the following code to it.
```html
<template>

</template>

<script>
export default {
  name: 'filename'
 }
</script>

<style scoped>
	
</style>
```

To register the route go to "src\main.js" and input the following code under "routes"

```javascript
import componentName from './components/componentName.vue'

{path: '/pagename', component: componentName}
```

Then in "src\App.vue" input the following into the navbar:

```html
<li class="nav-item">
	<router-link class="nav-link" v-bind:to="'/pagename'">Page</router-link>
</li>
```

___

## Dependencies

To use this site you must have the following:

* Node Package Manager (NPM) - easiest way to get this is to download [node.js](https://nodejs.org/en/download/current/) 
* Git Bash (optional) - get from [here](https://git-scm.com/downloads)


## Best Practices

For best practices I do recommend separating your code into sections. all css should be done in an external file but you may also do it in the "src\App.vue" file. This will just ensure you don't get confused. Making comments as you go along is up to you but I find it helps a lot when reading it later.

