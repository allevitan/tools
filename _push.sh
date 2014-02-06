#!/bin/bash

s3cmd sync --exclude '/.*' --exclude '_push.sh' --exclude '*.git*' --exclude '*~'  ./ s3://tools.abe.io 
