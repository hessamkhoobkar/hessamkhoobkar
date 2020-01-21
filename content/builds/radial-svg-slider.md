---
title: Radial SVG Slider
date: 2020-01-20
published: true
tags: ['Build', 'css', 'animation', 'html', 'transtion']
cover_image: ./images/harley-davidson-Wc95vfQvrys-unsplash.jpg
canonical_url: false
description: "A simple, responsive slider, with a radial transition effect powered by SVG clipPath and mask elements."
---

While browsing Dribbble in search of inspiration, we came across this interesting animation created by Tokito. The main idea is to show a little preview of the following slide, then scale it up when the user interacts with it.

In order to create this effect, SVG clipping and masking elements sounded like the perfect allies.

Let’s break this up in steps: first of all, we needed to show a preview of both previous and next slides. Therefore, for each slide, we needed 2 paths: a circle element to clip the part of the image visible at the beginning (the navigation CTA), and a second circle element that covers the entire slider (obtained by increasing the radius of the first circle element).

Here is a preview of the 2 paths created in Illustrator on 2 separate artboards, and then exported as SVG files. You’ll find these vectors inside the source files.

![clip-path](https://codyhouse.co/assets/img/gems/radial-svg-slider-clip-path.jpg)

By using the clipPath element, you can define the visible area of an image. Then, obviously, if you animate the clipPath element, you animate the visible area of the image you’re applying the clip to.

![clip-animation-01](https://codyhouse.co/assets/img/gems/gifs/radial-svg-slider-clip-animation-01.gif)


Now the tricky part: by animating the circle element the user interacts with, we cover the entire slider, including the opposite round/navigation item. To fix that, we used the SVG mask element: basically we set an area where the animated circle element won’t be visible, no matter what . This mask is equal to the size of the round/navigation element we don’t want to cover.

Masks use transparency. Therefore, using a vector graphic tool, we created a white path that covers the entire SVG viewport, except the area we want to mask out.

![mask](https://codyhouse.co/assets/img/gems/radial-svg-slider-mask.jpg)

Here is a quick animation we put together to show you the idea behind the clipping + masking.

![clip-animation-02](https://codyhouse.co/assets/img/gems/gifs/radial-svg-slider-clip-animation-02.gif)

Images: [Unsplash](http://docutils.sourceforge.net/mirror/setext.html)

Creating the structure
The HTML structure is composed of two unordered lists: a ul.cd-radial-slider for the slides and a ul.cd-radial-slider-navigation for the slider navigation.

Each list item inside the ul.cd-radial-slider is composed of two main elements: a .svg-wrapper containing a svg with a  <clipPath> element (used to change the clipping area of the slide image) and an <image> element (whose clip-path url attribute is the <clipPath> id), and a .cd-radial-slider-content for the slide content.

An additional .cd-round-mask is used to wrap the two <mask> elements.

```html
<div class="cd-radial-slider-wrapper">
   <ul class="cd-radial-slider" data-radius1="60" data-radius2="1364" data-centerx1="110" data-centerx2="1290">
      <li class="visible">
         <div class="svg-wrapper">
            <svg viewBox="0 0 1400 800">
               <title>Animated SVG</title>
               <defs>
                  <clipPath id="cd-image-1">
                     <circle id="cd-circle-1" cx="110" cy="400" r="1364"/>
                  </clipPath>
               </defs>

               <image height='800px' width="1400px" clip-path="url(#cd-image-1)" xlink:href="img/img-1.jpg"></image>
            </svg>
         </div> <!-- .svg-wrapper -->

         <div class="cd-slider-content">
            <div class="wrapper">
               <div>
                  <h2>Slide #1 Title</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  <a href="#0" class="cd-btn">Learn More</a>
               </div>
            </div>
         </div> <!-- .cd-slider-content -->
      </li>

      <li class="next-slide">
         <!-- ... -->
      </li>

      <!-- additional slides here -->

   </ul> <!-- .cd-radial-slider -->

   <ul class="cd-slider-navigation">
      <li><a href="#0" class="next">Next</a></li>
      <li><a href="#0" class="prev">Prev</a></li>
   </ul> <!-- .cd-slider-navigation -->

   <div class="cd-round-mask">
      <svg viewBox="0 0 1400 800">
         <defs>
            <mask id="cd-left-mask" height='800px' width="1400px" x="0" y="0" maskUnits="userSpaceOnUse">
               <path fill="white" d="M0,0v800h1400V0H0z M110,460c-33.137,0-60-26.863-60-60s26.863-60,60-60s60,26.863,60,60S143.137,460,110,460z"/>
            </mask>

            <mask id="cd-right-mask" height='800px' width="1400px" x="0" y="0" maskUnits="userSpaceOnUse">
              <path fill="white" d="M0,0v800h1400V0H0z M1290,460c-33.137,0-60-26.863-60-60s26.863-60,60-60s60,26.863,60,60S1323.137,460,1290,460z"/>
            </mask>
         </defs>
      </svg>
   </div>
</div> <!-- .cd-radial-slider-wrapper -->
```

Adding style
The slider structure is quite basic: all slides have an opacity: 0, are in absolute position and are placed one on top of the other (top: 0 and left:0). The .visible class is added to the selected slide (at the end of the clipping animation) to change its position from absolute to relative, while the .is-animating class is added to the slide during the clipping animation to change its z-index. The .next-slide and .prev-slide classes are instead used to show a preview of both the previous and next slides.

Two additional classes have been used to animate the navigation round elements: a .scale-down class to hide the slide preview when a new slide is selected (scale-down effect) and a .move-up class used to create the click effect when one of the slide previews is clicked on.

```css
.cd-radial-slider > li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: transform .2s;
}
.cd-radial-slider > li.visible {
  position: relative;
  opacity: 1;
}
.cd-radial-slider > li.is-animating, 
.cd-radial-slider > li.prev-slide, 
.cd-radial-slider > li.next-slide {
  opacity: 1;
}
.cd-radial-slider > li.is-animating {
  z-index: 2;
}
.cd-radial-slider > li.scale-down, 
.cd-radial-slider > li.move-up {
  z-index: 3;
}
.cd-radial-slider > li.move-up {
  /* class added to the navigation round element when clicked - used to create the click effect */
  animation: cd-clicked .2s;
}
.cd-radial-slider > li.scale-down {
  /* class added to the navigation round element to create the scale down effect  */
  transform: scale(0);
}
.cd-radial-slider > li.next-slide {
  /* for the scale-down/click effect - change the transform origin so that it is the center of the navigation round element */
  transform-origin: 92.14% 50%;
}
.cd-radial-slider > li.prev-slide {
  transform-origin: 7.86% 50%;
}
```

Events handling
To implement the radial SVG slider, we created a radialSlider object and used the bindEvents function to attach event handlers for the click to the slider navigation:

```js
var radialSlider = function(element) {
   this.element = element;
   this.slider = this.element.find('.cd-radial-slider');
   this.slides = this.slider.children('li');
   //...
   this.navigation = this.element.find('.cd-radial-slider-navigation');
   //...
   this.bindEvents();
} 

radialSlider.prototype.bindEvents = function() {
   var self = this;

   //update visible slide when clicking the navigation round elements
   this.navigation.on('click', function(event){
      if( !self.animating ) {
         self.animating =  true;
         event.preventDefault();
         var direction = ( $(event.target).hasClass('next') ) ? 'next' : 'prev';
         //update radialSlider index properties
         self.updateIndexes(direction);
         //show new slide
         self.updateSlides(direction);
      }
   });
}
```

To animate the slide image clipping area, we animated the 'r' attribute of the <circle> element inside the <clipPath>.
We added to the .cd-radial-slider element a data-radius1 and a data-radius2 attribute to easily retrieve the initial and final radius values, and a data-centerx1 and data-centerx2 for the <circle> center (two different values for the next and previous slide preview).
We then used the animate() method provided by Snap.svg to animate the circle element.

```js
clipPathVisible.animate({'r': radius2}, duration, customMinaAnimation, function(){
   //callback function here
});
```

The easing function is a custom cubic-bezier function; unfortunately, this is something which is not available by default in Snap.svg, but you can create a custom timing function from your custom cubic-bezier (here’s a StackOverflow post that covers it in details).

To apply a mask to the visible slide, instead, we changed the style attribute of the svg <image> element. For example, to mask the slide so that the next slide preview is visible we used:
```js
this.slides.eq(this.visibleIndex).find('image').attr('style', 'mask: url(#'+this.rightMask.attr('id')+')');
```
where this.slides.eq(this.visibleIndex) is the visible slide and this.rightMask.attr('id') is the id of the <mask> element.