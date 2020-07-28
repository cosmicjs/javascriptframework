---
title: React
homepage: https://reactjs.org/
description: A JavaScript library for building user interfaces
twitter: reactjs
github: https://github.com/facebook/react/
cosmicapplink: https://www.cosmicjs.com/apps/simple-react-blog
---

## Declarative
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

## Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

## Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.


# Guide to Get Started with Cosmic as your React CMS
Cosmic makes a great [React CMS](https://www.cosmicjs.com/knowledge-base/react-cms) for your React websites and apps. Get started adding Cosmic-powered content into your React apps using the following steps:

## Initial Setup
Before doing any coding, let's set up a Bucket with content using the following steps:
1. Create or log in to your [Cosmic account](https://app.cosmicjs.com)
2. Install the [Simple Blog](https://www.cosmicjs.com/apps/simple-blog) by clicking "Select App" then following the steps to create a new Bucket with the demo content. Alternatively, you could start by creating a new Bucket from scratch and add an Object Type titled `Posts` that has the slug `posts` and add a File Metafield titled `Hero` with key `hero`. Then add a few Objects with your own demo content.

Now that we have some demo content, we can integrate the content using the following development tools.

### 1. Install a new React app
You can use [Create React App](https://github.com/facebook/create-react-app) to install a new React app that includes tooling and configurations.
```bash
npm i -g create-react-app
create-react-app cosmic-react-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-react-app
yarn add cosmicjs
```
### 3. Add the following code into your `src/App.js` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// src/App.js
import React, { useState, useEffect } from 'react'

const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'YOUR_BUCKET_SLUG',
  read_key: 'YOUR_BUCKET_READ_KEY'
})
function App() {
  // Use Hooks to get page data from Cosmic!
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await bucket.getObjects({
        type: 'posts',
        props: 'slug,title,content,metadata' // Limit the API response data by props
      })
      setData(data)
    };
    fetchBlog()
  }, []);
  if (!data)
    return <div>Loading...</div>
  const posts = data.objects
  return <div>
    { posts.map(post => 
      <div key={post.slug} style={{marginBottom: 20}}>
        {
          post.metadata.hero &&
          <div><img alt="" src={`${post.metadata.hero.imgix_url}?w=400`}/></div>
        }
        <div>{post.title}</div>
      </div>)
    }
  </div>
}
export default App;
```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
npm start
```