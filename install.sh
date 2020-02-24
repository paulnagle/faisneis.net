#!/bin/bash

./build.sh
echo "*******  Copying to faisneis.net ***********"
scp -r www/* ubuntu@faisneis.net:~/www/
echo "*******  Running script on faisneis,net  ********"
ssh -t  ubuntu@faisneis.net "/home/ubuntu/go.sh"
