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
### Navbars
### Display
### Flexbox
### Navs
### Grid
### Pattern Project
### Grid Flexbox
### Museum of Candy