# Website for Ecovisum

A rough content plan and outline for the new [Ecovisum website](https://daveeveritt.github.io/ecovisum-site/), as a static single page built from Markdown files compiled with [Showdown.js](https://github.com/showdownjs/showdown/wiki/Showdown-options). Just edit the markdown, push and the live site is updated.

Test: free hosting etc. from GitHub to Render.com: [ecovisum.onrender.com](https://ecovisum.onrender.com/).

## TO DO: content

- [ ] add impressum when ready
- [ ] add Twitter and Discourse email (Graeme backwards/forwards CSS)
- [ ] add awards (Green Gown, [Class 2020](https://www.dmu.ac.uk/about-dmu/news/2019/december/dmu-spin-out-company-wins-global-sustainability-award.aspx))
- [ ] Verify the [EcoVisum domain name on GitHub](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain)
- [x] rewrite content (this is a straight copy)
- [x] decide on whether we need a contact form (not yet)

## TO DO: code

- [ ] set virtualHosts file and DNS for .eu and .de domains
- [ ] transfer .de to UK FasHosts account
- [ ] contain code in an IIFE
- [ ] do mobile menu
- [ ] minify .js files
- [ ] fix overflow scroll (see below)
- [x] move this repo to the ecovism GitHub organisation
- [x] map through an object storing the markdown file paths and HTML destinations
- [x] concatenate .js files
- [x] make 2 repos: Ecovisum, Markdown-GitHub Pages
- [x] git push to server when ready
- [x] make Markdown converter generic

### Overflow scroll resources

use this first: leave room for header with `scroll-margin-top` and read [scroll-margin](https://css-tricks.com/almanac/properties/s/scroll-margin/)

- [scroll-bouncing](https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/)
- [ios-overflow](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
- [webkkit overflowscrolling](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling)
- [overflowscroll slow](https://stackoverflow.com/questions/33601165/scrolling-slow-on-mobile-ios-when-using-overflowscroll)
- [scroll-snap](https://developers.google.com/web/updates/2018/07/css-scroll-snap)
- [safari+mobile+inertia+scroll ](https://books.google.co.uk/books?id=uLVrCgAAQBAJ&pg=PA112&lpg=PA112&dq=safari+mobile+inertia+scroll+responsive+web+design&source=bl&ots=hxP7YRCXYR&sig=ACfU3U1mGAcNnUdhuxS85N778lrTi0KTZA&hl=en&sa=X&ved=2ahUKEwiq1LDqyOTlAhVUT8AKHQWvD_IQ6AEwEHoECAkQAQ#v=onepage&q=safari%20mobile%20inertia%20scroll%20responsive%20web%20design&f=false)