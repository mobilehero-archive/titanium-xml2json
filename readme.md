[//]: # (header-start)

<h1 align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
		Preparing for end of Axway
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; support for Amplify Cloud and Mobile   &nbsp; 👇
</h2>	

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Crash Analytics (2015 - 2022)
	</a>
</p>

<hr>
<h4 align="center">
🛑 &nbsp;&nbsp; <a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">Axway support for Amplify products has ended</a> for most products related to mobile and cloud. 
</h4>

<h4 align="center">
A few of the open-source versions of Axway Amplify products will live on after <a href="">Axway Amplify End-of-Life</a> (EOL) announcements.  However, all closed-source projects and most open-source projects are now dead.  
	</h4>

<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; A group of Axway employees, ex-Axway employees, and some developers from Titanium community have created a legal org and now officially decide all matters related to future of these products.  

<p>&nbsp;</p>
<hr>


## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [OWASP Top 10 List for API Security](https://www.youtube.com/watch?v=GLVHDj0Cpg4)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)

&nbsp;

[![Click to watch on Youtube](https://img.youtube.com/vi/GLVHDj0Cpg4/0.jpg)](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7  "Click to watch on YouTube")


> &nbsp; [↑ Watch video on YouTube ↑](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7)

&nbsp;



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