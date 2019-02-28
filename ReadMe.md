# Course Notes
## Changes From Bootstrap 3 => 4:
Generally new syntax can be gleaned by using the docs
* Summary (from docs) goes over major changes:
    * Flexbox (layout, replaces "float")
    * px => rem as unit of measurement
    * changes to grid tiers (names, syntax)
    * utility classes: padding, margin, etc.
    * cards <= panels, thumbnails, wells
    * no glyphicons (use FontAwesome!)

## Syllabus
### Getting Started
Quick and dirty (use CDN's, static pages)\
Using starter template on doc site hooked up with simple css\
Dependencies: jquery, popper, bootstrap (JS) and bootstrap CSS
### Colors
* Danger， warning， primary， info， success
* bg-, text-
### Typography
#### Page Headings
* No page-header class, replaced by utilities
* Display headings (display-1,2,3,4)
#### Block Quotes
* moved from \<blockquote> + \<footer> to class blockquote, blockquote-footer
* use .text-right for .blockquote-reverse
#### Pixels to Rem's
* Default font-size is 16px
* rem = root-ems (originally width of 'm')
* relative unit which takes font-size of top el (16px), x rem = <e.g. 16px> * x
* Root is set in \<html>
### Utilities
* spacing
* common property-value pairs
* Display, position, shadows, spacing, etc.
* Borders: add a border to an element.
* m for margins, p for padding
* t, b, l, r, x, y (top, bottom, left, right, left-right, top-bottom)
* size 0-5
* pt-0 = padding top 0 e.g.
* $spacer is used to set the size (.25, .5, 1.5, 3) ($spacer = 1rem)
### Breakpoints
* responsiveness (xs screen size)
* (default xs) 576px, sm 768px, md 992px, lg 1200px, + xl
* add padding depending on the screen size
* {prop}{sides}-{bp}-{size}
### Navbars
* Behavior changes -- collapse break-points using .navbar-expand-{bp}
* .navbar-light and .navbar-dark instead of .navbar-default
* .navbar-toggler
* no automatic margin-bottom (use utilities)
#### Discussion
.navbar sets margins and size.\
.navbar-dark and .bg-dark set light text on dark bg\
.navbar-brand is used for the title\

data-toggle="collapse" tells BS jQuery that the element it is attached too causes a collapse toggle when clicked (in this case the button). data-target tells jQuery what element is subject to the toggle. .navbar-toggler applies the navbar styling to the toggle button. .navbar-toggle-icon styles the element it is attached too into a hamburger bar. \<span> is bland and well suited to the purpose, but you can use \<p> or \<div> as well. (Don't nest a \<button> in a \<button>, however.)

.collapse indicates an initial state, "collapsed," for the indicated content (try putting it on any element in the scope of "nav"). .navbar-collapse makes the content appear below the navbar and not on its right side. The collapsed content needs an ID that accords with the data-target of the collapse-toggler.

.nav-link affects the styling of the anchor tags (applies navbar stylings). Removing .nav-item from the \<li>'s does not appear to cause major problems.
### Display Utility
* replaces e.g. .hidden-sm with .d-{bp}-{v} e.g. .d-flex-sm
### Flexbox
### Navs
### Grid
### Pattern Project
### Grid Flexbox
### Museum of Candy