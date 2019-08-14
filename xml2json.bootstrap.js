// code for SDK < 8.1.0.GA
// require('/ti.internal/extensions/binding')('xml2json', '/node_modules/@titanium/xml2json');
// require('/ti.internal/extensions/binding')('xmltojson', '/node_modules/@titanium/xml2json');

// Code for SDK >= 8.1.0.GA
global.binding.register('xml2json', require('@titanium/xml2json'));
global.binding.register('xmltojson', require('@titanium/xml2json'));


