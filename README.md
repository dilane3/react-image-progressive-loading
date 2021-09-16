# react-image-loading

React-image-loading is a tool that helps you include heavy images in your webpage and display them when visible in the window. the display is progressive.

When we create a website which will contains a lot of images (heavy images), the loading of the page will takes more time because, the browser might load all images which are present in the web page. That's why, this library is made up.

### installation

```bash

npm install react-image-progressive-loading

```

or

```bash

npm i react-image-progressive-loading

```

### usage

```javascript

import React from 'react'
import Image from 'react-image-loading'

const image = require("path/to/image.png").default

const ProfilImage = () => {
  return (
    <Image image={image} />
  )
}

export default ProfilImage

```

#### Props
1. **image**

image prop takes as value the image that you want to display

2. **alt**

alt prop takes as value the description of the image, which will be display when the image is not available

3. **className**

className prop is used for styling. If you want to add a custom style to your image, provide a className value.

```javascript
// code here

const ProfilImage = () => {
  return (
    <Image image={image} alt="description" className="image-style" />
  )
}

// code here

```

