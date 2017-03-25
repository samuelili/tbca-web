#!/usr/bin/env bash

echo "readying files to be deployed..."
gulp clean
gulp copy
gulp build

echo "Deploying files. This will take some time..."
firebase deploy

sensible-browser "https://tbca-web.firebaseapp.com"