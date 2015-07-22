# General Outline

## Why?
- Big picture: 
	-who, how, when, what - maybe why?
- Benchmarking
- Measure response to changes
- Before/after

## What is Unified Analytics?
- count all the things
- using GA, GTM, Google Webmaster Tools
- Tag Manager allows customization of tracking w/o code changes

## Google Tag Manager
- a "container" or placeholder
- UI for management
- [Google Analytics Academy Course](https://analyticsacademy.withgoogle.com/course05/preview)
	- certificate until 7/24

## GTM Uses
- multitude of "tag" types
	- mostly small JavaScript...scripts:
		- web analytics (vendor independence)
		- performance measurement (New Relic)
		- advertising conversion pixels
		- custom JavaScript (user research tools)

## Preparation

### What *should* you be tracking?
- Crawl primary .gov domain
	- working on OSS solution for this
	- Screaming Frog SEO Spider
		- GUI, < 500 pages free
- List all non .gov
	- Google is your friend

### What *are* you tracking?
- any current analytics properties?
- any other tracking tools (Adobe _formerly Omniture_, Open Analytics, etc)
- compare with 1st list
	- [Example](https://pulse.cio.gov/analytics/domains/)

Note: Link to properties working sheet 

# HOMEWORK:

## Deploy Tag Manager
- [Create a Google Tag Manager Account](https://support.google.com/tagmanager/answer/2574370?hl=en)
- [Deploy "empty" Tag Manager container](Link)
	- This snippet will go in every (page|template|site) 
	- Immediately after `<body>`:

```
<!-- Google Tag Manager [example.gov] -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5WL4TR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WL4TR');</script>
<!-- End Google Tag Manager -->
```


## Set up Google Analytics
- Do you have legacy GA tracking?
- Migrate to legacy GA to GTM?
	- Remove GA snippet at same time

## Google Analytics Setup
- Recommendation: new/clean GA Profile and
	- 3 Views:
		- Example.gov Reporting
		- Example.gov Testing
		- Example.gov No Filters

# TOGETHER:

## Import GTM Configuration 
- [Container Assistant](https://gtm.cityanalytics.org/)
- adds Google Analytics "tag"
- adds custom [dimensions](https://support.google.com/analytics/answer/1033861?hl=en)
- adds custom events
	

## What is in this thing?
- [adds addt'l data to GA](http://www.simoahava.com/analytics/improve-data-collection-with-four-custom-dimensions/)
- tracks document downloads (like PDFs)
