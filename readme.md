
<a href="#titaniumxml2json">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/warning-sign-area51.png" width="80%" />
		<img src="https://cdn.secure-api.org/images/border-line-3.png" width="70%" height="50" />
	</p>
</a>


# @titanium/xml2json

[![@titanium/xml2json](https://img.shields.io/npm/v/@titanium/xml2json.png)](https://www.npmjs.com/package/@titanium/xml2json)


> Configurable, lightweight XML to JSON converter for Titanium native mobile apps.  Based on https://github.com/metatribal/xmlToJSON by [metatribal](https://github.com/metatribal)   


* [📝 Description](#-description)
	* [Features](#features)
* [🚀 Getting Started](#-getting-started)
* [Usage](#usage)
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