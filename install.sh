#!/bin/bash

scp -r www/* ubuntu@faisneis.net:~/www/
ssh -t  ubuntu@faisneis.net "/home/ubuntu/go.sh"
