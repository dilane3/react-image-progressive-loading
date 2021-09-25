# react-image-progressive-loading

React-image-progressive-loading is a tool that helps you include heavy images in your webpage and display them when visible in the window. the display is progressive.

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
import {Image} from 'react-image-progressive-loading'

const image = require("path/to/image.png").default

const ProfilImage = () => {
  return (
    <Image image={image} />
  )
}

export default ProfilImage

```

#### Props
|  prop  | Default value | required | Description |
|---     |---            |---       |---          |
|image   | not defined   | true     |This prop takes as value the source of the image|
|alt     | loading       | false    |It defines the description of the image when it's not loaded|
|className| image         | false    |It's used for styling the image on the web page|
|blur    | false         | false    |This prop is used for difining the type of loading that we want. If it's false, the background of te image will be gray while loading. If it's equal to true the background will be gray and there will be a blur             |
|        |               |          |             |

```javascript
// code here

const ProfilImage = () => {
  return (
    <Image image={image} alt="description" className="image-style" />
  )
}

// code here

```

