#!/bin/bash

rm -rf www

ionic cordova platform rm browser

rm -rf platform/*

ionic cordova platform add browser

ionic cordova prepare browser --prod

#ionic cordova resources ios
#ionic cordova resources android

ionic build --prod  --minifyjs   --minifycss  --optimizejs
