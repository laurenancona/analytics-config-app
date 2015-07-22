
## Why?
---
- Big picture: 
	- users: who, how, when, what - maybe why?
- Benchmarking, progress
- Measure response to changes
- [Transparency](http://analytics.phila.gov)



## What is Unified Analytics?
---
- count all the things
- using GA, GTM, Google Webmaster Tools
- Tag Manager allows customization of tracking w/o code changes



## Google Tag Manager
---
- a "container" or placeholder
- UI for management
- [Google Analytics Academy Course](https://analyticsacademy.withgoogle.com/course05/preview)
	- certificate until 7/24



## GTM Uses
---
- multitude of "tag" types
	- mostly small JavaScript...scripts:
		- web analytics (vendor independence)
		- performance measurement (New Relic)
		- advertising conversion pixels
		- custom JavaScript (user research tools)



### Preparation
## What *should* you be tracking?
---
- Crawl primary .gov (.org, .net) domain
	- [Screaming Frog SEO Spider](http://www.screamingfrog.co.uk/seo-spider/)
		- GUI, < 500 pages free
Note: Need to know where you're going, so tracking audit. For short term, if your site is huge, start crawl with just the subdir of the dept you're working with. This will also tell you where GA is or is not already present




## The fun part
---
- List all non .gov (yep, Google)
Note: I thought we were alone in having many non .gov sites; every 1-off initiative has a vanity URL. No one had a list.



<!-- .slide: <iframe data-src="http://hakim.se"></iframe> -->
### What *are* you tracking?
- any current analytics properties?
- any other tracking tools (Adobe _formerly Omniture_, Open Analytics, etc)
- compare with 1st list
	- [Example](https://pulse.cio.gov/analytics/domains/)
Note: Link to properties working sheet 



## Current Properties
---
City | Analytics | Notes
------ | -------- | -------- 
Boston | UA-2187282-1 | 
New Orleans | UA-18797759-10, -3  | 
Lexington (KY) | UA-50592121-1 | 
Fontana (CA) | UA-53370514-1 (404) | HTTPS
Orlando | UA-45327637-4 | 



## What is in this thing?
- [adds addt'l data to GA](http://www.simoahava.com/analytics/improve-data-collection-with-four-custom-dimensions/)
- tracks document downloads (like PDFs)
- useful for later reporting




### TOGETHER:
## Import GTM Configuration 
---
- [Upload container](unified-analytics.json)
- adds Google Analytics "tag"
- adds custom [dimensions](https://support.google.com/analytics/answer/1033861?hl=en)
- adds custom events
	


## In Google Analytics
---
Need to add the following [custom dimensions](img/custom-dimension.gif)



### HOMEWORK:
## Deploy Tag Manager
---
- [Deploy Tag Manager container](Link)
	- This snippet will go in every page/template/site
	- If more than 1 current 'template,' start w/department
	- Once deployed, test
Note: see toolbox at end



## The snippet
	<!-- Google Tag Manager [example.gov] -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-1234AB"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-1234AB');</script>
	<!-- End Google Tag Manager -->



### Toolbox
---
- [Google Tag Assistant (Chrome)](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en)
- [Page Analytics (Chrome)](https://chrome.google.com/webstore/detail/page-analytics-by-google/fnbdnhhicmebfgdgglcdacdapkcihcoh)




### Resources
---
- [GTM Deploy](https://github.com/laurenancona/unified-analytics/blob/gh-pages/deploy-tag-manager.md)
Note: UI changes all the time, these notes will change, sharing with you early

