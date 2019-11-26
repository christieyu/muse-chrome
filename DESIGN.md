### Hi Sarim!

So, first of all, I'm pretty happy with this project considering all the challenges I ran into, including:

> 1. Very little documentation for Google Chrome Extensions. This made implementing new features very difficult, since I didn't want to get into very annoying syntax while also wanting some complexity for this app. I had to do a lot of trial and error.
>
> 2. The format of my extension. I had to communicate between a popup window, a mysterious Chrome server, and my window (which has no URL address...). It took me forever to figure out how to access the console (through the Inspect menu), and that's when I started actually troubleshooting.
>
> 3. The fact that Chrome extensions want a directory from your computer, meaning I had to figure out how to use Sublime instead of the CS50 IDE, which I am much more familiar with.
>
> 4. Weird security restrictions for Chrome extensions. I wasn't able to use Flask, Bootstrap, Jinja, JQuery, or other external plugins, because Chrome wants everything to be centered around Chrome. So, I had to actually make a file containing JQuery in order to use it, and I gave up entirely on trying to use Bootstrap. Also, I couldn't use any links with http:// instead of https://, and I couldn't use in-line Javascript with the <script> tag in HTML, so I had to extract all Javascript into specific Javascript files.
>
> 5. API's wouldn't work. I tried so many different API's for the local weather widget, because all the good ones weren't free, and all the free ones wouldn't work...

So all in all, I spent so much more time debugging than actually designing. I think if I had more time, this project would be so much more complete.

In any case, onto...


FEATURES AND FILES
----------------------

> MANDATORY FILES (manifest.json)
> POPUP (popup.html, popup.js, popup.css)
> NEWTAB (newtab.html, newtab.js, newtab.css)
> THEMES (theme.html, theme.js)
> DATE AND TIME (time.js)
> WEATHER (weather.js)
> BOOKMARKS (bookmarks.js)
> NOTES (notes.html, notes.js)


MANDATORY FILES
----------------------

> manifest.json is the basic framework of this Chrome extension. Most of this is pretty self-explanatory, but I had to access "storage", "activeTab", and "geolocation" to build this extension. This is also where I defined my new homepage and my popup HTML files.

### POPUP

> The popup is a basic HTML form with a sidebar that functions as my settings menu. You can access this through the Google Chrome toolbar. This is where you have options to configure the theme, bookmarks, and notes. If I had more time, I would have offered more options for date, time, and weather. I would also have made error-checking for this form more complete.
> Something to note is that the Bookmarks options menu is a little clunky... It's not a dynamic list of bookmarks, but simply a list of links. If I had more time, I would try to implement a more user-friendly bookmarks menu. As it is, I just set "autocomplete" to on... sorry!


### NEWTAB

> This is what all of the popup options affect. Fairly self-explanatory.

### THEMES

> As for themes, theme.html gives options for themes such as background color, secondary background color, border color, font, and font color. Then, upon submitting the form, your chosen values are stored in the Chrome storage space via "chrome.storage.sync.set" and inputted into CSS variables, which affects newtab.css.

### DATE AND TIME

> These features do not yet have user interaction, but simply display the date and time dynamically. I update this clock via a function in time.js, and then insert it into newtab.html using the "innerhtml" utility.

### WEATHER

> For the weather, I used multiple API's to first detect your IP address, then detect your longitude/latitude based on your IP address, then detect your locat weather based on your longitude/latitude. If I had more time, I would have added a Celsius option, as well as other options to set your location.

### BOOKMARKS

> For bookmarks, I use string concatenation to join text and a link in a HTML link tag, and then enter that link tag into newtab.html. You can display a maximum of 10 links.

### NOTES

> You can also input a note into notes.html and have it show on newtab.html. I enabled scrolling so it doesn't matter how long your note is.


And that's it! I wish I had more time to fully flesh this app out, but I had fun learning about Chrome extensions and the way Chrome storage works. I hit most of my "good" and "better" goals, so I am happy with how this extension turned out. In fact, I'm using it now as my own homepage window!

Best,
Christie


SOURCES
---------------
Sources used in this project (not all cited throughout the project, because it's hard to track where I found info. All copied code is cited properly in my code):

> https://developer.chrome.com/extensions/getstarted

> https://medium.freecodecamp.org/how-to-create-and-publish-a-chrome-extension-in-20-minutes-6dc8395d7153

> https://www.w3schools.com/w3css/w3css_sidebar.asp

> https://www.w3schools.com/howto/howto_js_sidenav.asp

> https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation

> https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

> https://developer.chrome.com/extensions/messaging

> https://www.w3schools.com/js/js_function_parameters.asp

> https://developer.chrome.com/extensions/storage

> https://www.w3schools.com/html/html_css.asp

> https://openweathermap.org/city

> https://plainjs.com/javascript/manipulation/append-or-prepend-to-an-element-29/

> https://css-tricks.com/updating-a-css-variable-with-javascript/