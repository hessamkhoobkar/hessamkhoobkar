---
title: Animated Transition Effects
date: 2020-01-20
published: true
tags: ['Build', 'css', 'animation', 'html', 'transtion']
cover_image: ./images/priscilla-du-preez-432_UfGLmTA-unsplash.jpg
canonical_url: false
description: "A few weeks ago we published a tutorial about how to create an Ink Transition effect using a PNG sprite and the steps() CSS timing function."
---
A few weeks ago we published a tutorial about how to create an Ink Transition effect using a PNG sprite and the steps() CSS timing function. That resource has since become one of the most popular here on CodyHouse, therefore we decided to team up with talented motion designer Gabriele Mellera to create a small library of transition effects!

If you want to learn how to create your own transition effects, here is our thorough tutorial:

Ink Transition Effect Tutorial

How to use the transition effects
We created a separate html file for each effect. Note the class applied to the <body>, that we used in CSS to target the specific effect.

```html
<!doctype html>
<html lang="en" class="no-js">
   <head>
      <!-- ... -->
      <title>Cartoon Transition Effect | CodyHouse</title>
   </head>
   <body class="cartoon-transition">
      <main class="cd-main-content">
         <!-- ... -->
      </main> 

      <div class="cd-modal" id="modal-1">
         <!-- ... -->
      </div> 

      <div class="cd-transition-layer" data-frame="25"> 
         <div class="bg-layer"></div>
      </div> 

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
      <script>
         if( !window.jQuery ) document.write('<script src="js/jquery-2.2.1-min.js"><\/script>');
      </script>
      <script src="js/main.js"></script> <!-- Resource jQuery -->
   </body>
</html>
```

The CSS file is organized in different sections. For a transition to work properly you need to include the style shared by all effects, the custom effect style, and the keyframes to control the animation.

```css
/* -------------------------------- 

Shared style

-------------------------------- */

.cd-btn {
  display: inline-block;
  padding: 1.6em 2.4em;
  font-size: 1.4rem;
  letter-spacing: .15em;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: box-shadow .3s;
  /*...*/
}

/* -------------------------------- 

Scrub Effect - Custom effect style

-------------------------------- */

.scrub-transition {
  font-family: "PT Sans", sans-serif;
  color: #2c1a32;
  /*...*/
}

/* -------------------------------- 

Animations - remember to check the animation name to copy the correct keyframes

-------------------------------- */

@keyframes cd-sequence {
  0% {
    /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
    transform: translateY(-50%) translateX(-2%);
  }
  100% {
    /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
    transform: translateY(-50%) translateX(-98%);
  }
}
```

If you want to change the color of the transitions, all you need to do is importing the PNG image sprites into a graphic tool, and change the color of the filled area. For example, in Photoshop you can use layer styles to apply a color overlay. Once you've edited the image, simply save it as PNG. If you're concerned about the size, TinyPNG is a great tool to compress PNG images.

![Change image color](https://codyhouse.co/assets/img/gems/animated-transition-effects-transition-change-color.jpg)
