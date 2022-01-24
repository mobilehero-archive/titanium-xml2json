[//]: # (header-start)


<h1 align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
		Axway Amplify End-of-Life Announcement
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; See API FAQ below  &nbsp; 👇
</h2>	


<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>

<hr>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h4 align="center">
🛑 &nbsp;&nbsp; All products affected by the announcements will not be supported by Axway effective their EOL dates in 2022.
</h4>

<h4 align="center">
Some Open-Source versions of Axway products will live on after End-of-Life (EOL) Axway Amplify product announcements.  However, some products are closed-source and will NOT continue after the shut down in 2022.  
	</h4>
</a>
<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; Stay tuned for more info as plans are being made to save the Titanium project and move it under the control of a independent group of developers.

<p>&nbsp;</p>
<hr>

## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)



<p>&nbsp;</p>
<hr>

<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)

# @titanium/xml2json

[![@titanium/xml2json](https://img.shields.io/npm/v/@titanium/xml2json.png)](https://www.npmjs.com/package/@titanium/xml2json)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-xml2json)](https://dependabot.com)


> Configurable, lightweight XML to JSON converter for Titanium native mobile apps.  Based on https://github.com/metatribal/xmlToJSON by [metatribal](https://github.com/metatribal)   


* [📝 Description](#-description)
	* [Features](#features)
* [🚀 Getting Started](#-getting-started)
* [Usage](#usage)
	* [Options](#options)
* [🔗 Related Links](#-related-links)
* [📚 Learn More](#-learn-more)
* [📣 Feedback](#-feedback)
* [©️ Legal](#️-legal)

## 📝 Description

### Features

* no external dependencies
* small (~3kb minified)
* simple parsing.  pass either a string or xml node and get back a javascript object ( use JSON.stringify(obj) to get the string representation )
* supports attributes, text, cdata, namespaces, default namespaces, attributes with namespaces... you get the idea
* lots of rendering of options
* consistent, predictable output
* browser support - it works on IE 9+, and nearly every version of Chrome, Safari, and Firefox as well as iOS, Android, and Blackberry.  (xmlToJSON will work for IE 7/8 as well if you set the xmlns option to false)


## 🚀 Getting Started

Install using npm:

```
npm install @titanium/xml2json
```

## Usage

 ```javascript
const xml2json = require('@titanium/xml2json');
const testString = '<xml><a>It Works!</a></xml>';  	// get some xml (string or document/node)
const result = xml2json.parseString(testString);	// parse
 ```
 The (prettified) result of the above code is
 ```javascript
{
    "xml": {
        "a": [
            {
                "text": "It Works!"
            }
        ]
    }
}
```

### Options

```javascript
// These are the option defaults
var options = { 
	mergeCDATA: true,	// extract cdata and merge with text nodes
	grokAttr: true,		// convert truthy attributes to boolean, etc
	grokText: true,		// convert truthy text/attr to boolean, etc
	normalize: true,	// collapse multiple spaces to single space
	xmlns: true, 		// include namespaces as attributes in output
	namespaceKey: '_ns', 	// tag name for namespace objects
	textKey: '_text', 	// tag name for text nodes
	valueKey: '_value', 	// tag name for attribute values
	attrKey: '_attr', 	// tag for attr groups
	cdataKey: '_cdata',	// tag for cdata nodes (ignored if mergeCDATA is true)
	attrsAsObject: true, 	// if false, key is used as prefix to name, set prefix to '' to merge children and attrs.
	stripAttrPrefix: true, 	// remove namespace prefixes from attributes
	stripElemPrefix: true, 	// for elements of same name in diff namespaces, you can enable namespaces and access the nskey property
	childrenAsArray: true 	// force children into arrays
};	

// you can change the defaults by passing the parser an options object of your own
var myOptions = {
	mergeCDATA: false,
	xmlns: false,
	attrsAsObject: false
}

result = xml2json.parseString(xmlString, myOptions);
```

A more complicated example (with xmlns: true)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<xml xmlns="http://default.namespace.uri">
    <a>
        <b id="1">one</b>
        <b id="2"><![CDATA[some <cdata>]]>two</b>
        <ns:c xmlns:ns="http://another.namespace" ns:id="3">three</ns:c>
    </a>
</xml>
```

results in
```javascript
{
        "xml": [{
                "attr": {
                        "xmlns": {
                                "value": "http://default.namespace.uri"
                        }
                },
                "a": [{
                        "b": [{
                                "attr": {
                                        "id": {
                                                "value": 1
                                        }
                                },
                                "text": "one"
                        }, {
                                "attr": {
                                        "id": {
                                                "value": 2
                                        }
                                },
                                "text": "some <cdata>two"
                        }],
                        "c": [{
                                "attr": {
                                        "xmlns:ns": {
                                                "value": "http://another.namespace"
                                        },
                                        "id": {
                                                "value": 3
                                        }
                                },
                                "text": "three"
                        }]
                }]
        }]
}
```

## 🔗 Related Links

- [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.
- [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.
- [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool

## 📚 Learn More

- [Axway Developer Portal](https://developer.axway.com)

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/xml2json/issues)! 

## ©️ Legal

Alloy is developed by Appcelerator and the community and is Copyright © 2012-Present by Appcelerator, Inc. All Rights Reserved.

Alloy is made available under the Apache Public License, version 2. See their license file for more information.

Appcelerator is a registered trademark of Appcelerator, Inc. Titanium is a registered trademark of Appcelerator, Inc. Please see the LEGAL information about using trademarks, privacy policy, terms of usage and other legal information at http://www.appcelerator.com/legal.