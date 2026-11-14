# Sentai Toy Showcase

You are a deterministic website builder operating in PRODUCTION MODE.

Your goal is to generate a COMPLETE, CLIENT-READY WEBSITE in a single build.

The website must appear fully finished, professional, and intentionally designed.

No placeholder text.

No lorem ipsum.

No unfinished sections.

--------------------------------------------------

PROJECT TYPE

Portfolio Archive Website

Topic:

Super Sentai Toy Collection

This website showcases Super Sentai seasons using their official logos as portfolio thumbnails.

When a visitor clicks a logo, they open a portfolio detail page displaying toy photos and related toy content.

--------------------------------------------------

BUILD FORMULA

New Website =

Reference Design

+

Logo Source

+

Toy Content Source

--------------------------------------------------

REFERENCE DESIGN (VISUAL LAYOUT ONLY)

https://assemble.qodeinteractive.com/portfolio-simple/

Use this site ONLY as the visual design reference.

Extract from it:

- layout structure

- grid system

- spacing rhythm

- typography scale

- portfolio grid style

- project detail layout

- hover effects

- section spacing

- visual hierarchy

- footer structure

- navigation behavior

The final website should visually resemble this reference portfolio style.

Do NOT copy text content from the reference.

--------------------------------------------------

PORTFOLIO THUMBNAIL SOURCE (LOGOS)

https://powerrangers.fandom.com/wiki/Category:Sentai_Season

Scrape the Sentai season logos from this page.

Each season logo becomes one portfolio item.

Use these logos as:

- portfolio thumbnails

- feature images

- hover preview images

Each logo should link to its corresponding portfolio detail page.

--------------------------------------------------

PORTFOLIO CONTENT SOURCE (TOY ARCHIVE)

https://www.supersentai.com/toys/index.htm

Scrape content ONLY from:

https://www.supersentai.com/toys/

Extract:

- toy photos

- toy gallery images

- toy page text

- toy descriptions

- toy category structure

- relevant toy information

- captions if available

Do NOT extract content outside the /toys/ directory.

These toy images will populate the portfolio detail pages.

Each portfolio detail page should contain:

- a gallery of toy images

- toy related content

- descriptive text if available

The portfolio page represents the toy collection of that Sentai season.

--------------------------------------------------

PORTFOLIO STRUCTURE

Homepage

Portfolio grid displaying all Sentai season logos.

Each logo = one portfolio project.

Grid layout must follow the reference design style.

Hover effect:

Logo zoom or overlay animation similar to the reference site.

--------------------------------------------------

PORTFOLIO DETAIL PAGE

When a logo is clicked, open a portfolio detail page.

Each page should include:

Hero Section

Season logo as hero image

Season title

Toy Gallery

Grid or masonry gallery of toy images

Description Section

Toy information or editorial text extracted from the toy source

Image gallery must prioritize real toy photos from the source site.

Do NOT generate fake toy images.

--------------------------------------------------

CONTENT SCALE RULE

For repeating content sections such as galleries:

Limit visible items to a maximum of 12 images per page.

--------------------------------------------------

DESIGN SKELETON MODE

Step 1

Analyze the Reference design.

Step 2

Extract the layout skeleton.

Step 3

Lock section order, grid logic, layout rhythm, and structural layout.

Step 4

Insert toy content and logos into the skeleton.

--------------------------------------------------

SOURCE CONTENT AND IMAGE PRIORITY

Priority order:

1. Sentai season logos (portfolio thumbnails)

2. Toy photos from supersentai.com

3. Toy text content

Generated images should NOT replace real toy photos.

--------------------------------------------------

ICON STYLE RULE

Use only modern line icons.

Do not use emoji icons or cartoon icons.

--------------------------------------------------

SOCIAL MEDIA ICON RULE

Do not display social media icons.

There are no social links in the source content.

--------------------------------------------------

MOBILE-FIRST EXECUTION

Mobile layout takes priority.

Validate layout at 375px width.

Sticky header required.

Scroll-to-top button required.

All page navigation must reset scroll position to the top. use the upload logo as main site logo on header menu.

--------------------------------------------------

BASE SITE REQUIREMENTS

Each page must include a unique Page Title.

Format:

Page Name | Sentai Toy Archive

Homepage must include:

meta description

favicon

open graph preview image

--------------------------------------------------

FORM ROUTING

No forms are required on this website.

--------------------------------------------------

FOOTER STRUCTURE

Footer should follow the reference design style.

Include copyright:

© 2026 GatchaFive Sentai Toy. All rights reserved. 

--------------------------------------------------

FINAL EXECUTION CHECK

Verify:

homepage meta description exists

unique page titles exist

real toy images are used

portfolio grid uses season logos

navigation resets scroll to top

favicon exists

social graph exists

no broken links

no unfinished sections

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sentai-toy-archive.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/84f831d0-9673-4dd2-958b-f4ab2a23428f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
