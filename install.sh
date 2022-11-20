#!/bin/bash

echo "*******  Copying to faisneis.net (54.220.97.106)  ***********"
scp -i ~/Downloads/LightsailDefaultKey-eu-west-1.pem -r www/* bitnami@54.220.97.106:~/htdocs/
# echo "*******  Running script on faisneis,net  ********"
# ssh -t  ubuntu@faisneis.net "/home/ubuntu/go.sh"
