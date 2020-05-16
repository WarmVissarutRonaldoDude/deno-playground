#!/bin/bash

if [[ "$1" == "bundle" ]];
then
  echo "Bundling..."
  . ./bundle.sh
fi

if [[ "$1" == "prod" ]] || [[ "$1" == "bundle" ]];
then
  echo "Running via bundle!"
  deno run --allow-read --allow-env --allow-net app.js
else
  echo "Running via src/index.ts!"
  deno run --allow-read --allow-env --allow-net src/index.ts
fi
