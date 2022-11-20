#!/bin/bash

RED='\033[0;31m'  
NC='\033[0m' # No Color

red_text() {
    echo -e "${RED}>>>>>>>>> [${FUNCNAME[1]}] $1${NC}"
}

usage(){
	echo "Usage: -b (Build for browser)"
    echo "       -i (Build for ios)"
    echo "       -a (Build for android)"
    echo "       -c (Clean old build files)"
    echo "       -r (Release build)"
	exit 1
}

add_plugins() {
    red_text "** Adding cordova plugins"
    ionic cordova plugin add cordova-plugin-splashscreen
    ionic cordova plugin add cordova-plugin-statusbar
    # ionic cordova plugin add cordova-plugin-googlemaps
    ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps.git#0b8ea76ad34fb2a202a9de1b9d0e051a82ad9443
    ionic cordova plugin add com-badrit-base64
    ionic cordova plugin add cordova-plugin-ionic-webview
    ionic cordova plugin add cordova-plugin-inappbrowser
    ionic cordova plugin add cordova-plugin-geolocation
    ionic cordova plugin add cordova-plugin-advanced-http
    ionic cordova plugin add cordova-plugin-androidx-adapter
}

setup_node_npm() {
    red_text "Setting up node and npm versions"
    
    if [ ! -d ~/.nvm ]; then
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
    fi

    export NVM_DIR=$HOME/.nvm;
    source $NVM_DIR/nvm.sh;

    NVM_VERSION_REQUIRED="v16.18.1"
    NVM_VERSION_CURRENT=$(nvm version)
    if [[ "${NVM_VERSION_CURRENT}" != "${NVM_VERSION_REQUIRED}" ]]; then
        nvm install v16.18.1
        nvm use v16.18.1
    else
        red_text "node version: ${NVM_VERSION_CURRENT}"
    fi
}

setup_ionic() {
    if ! [ -x "$(command -v ionic)" ]; then
        red_text "** Installing ionic cli globally"
        npm install -g @ionic/cli @ionic/cordova-builders native-run cordova-res cordova 
    else
        red_text "** Updating ionic cli globally"
        npm update -g @ionic/cli @ionic/cordova-builders native-run cordova-res cordova 
    fi
}

install_npm_deps() {
    red_text "** Installing other npm dependencies"
    npm update --save 

    red_text "** Running npm audit fix"
    npm audit fix
}

clean_old_build() {
    red_text "!! Removing platforms"
    ionic cordova platform rm browser

    red_text "!! Deleting platform folder"
    rm -rf platform
    red_text "!! Deleting node_module folder"
    rm -rf node_modules
    red_text "!! Deleting plugins folder"
    rm -rf plugins
    red_text "!! Deleting www folder"
    rm -rf www
}

build_for() {
    PLATFORM=$1

    red_text ">>>> Building for ${PLATFORM}"
    install_npm_deps
    red_text ">>>> ionic cordova platform add ${PLATFORM} --confirm --no-interactive"
    ionic cordova platform add "${PLATFORM}" --confirm --no-interactive

    red_text ">>>> ionic build ${PLATFORM}" 
    if [[ "${RELEASE_BUILD}" -eq "true" ]]; then
        ionic  build "${PLATFORM}" --release --prod --prod  --minifyjs   --minifycss  --optimizejs
    else
        ionic  build "${PLATFORM}"
    fi
}

########
# main #
########
RELEASE_BUILD=false
setup_node_npm
setup_ionic

[[ $# -eq 0 ]] && usage
while getopts "abcir" option; do
   case $option in
      c) # Clean old build files
         clean_old_build
         ;;
      r) # Android release build
         RELEASE_BUILD=true
         ;;
      b) # Build for browser
         build_for browser
         ;;
   esac
done






