#!/usr/bin/env node
var fs = require('fs');

const PERMISSIONS_TO_REMOVE = ['RECORD_AUDIO'],
    MANIFEST = 'platforms/android/AndroidManifest.xml';

var manifestLines = fs.readFileSync(MANIFEST).toString().split('\n'),
    newManifestLines = [];

const permissionsRegex = PERMISSIONS_TO_REMOVE.join('|');

manifestLines.forEach(function(line) {
    if(!line.match(permissionsRegex)) {
        newManifestLines.push(line);
    }
});

fs.writeFileSync(MANIFEST, newManifestLines.join('\n'));

