# Gravtail Theme

The **Gravtail** Theme is made for [Grav CMS](http://github.com/getgrav/grav).  
## Description

This grav theme uses the [Tailwindcss](https://tailwindcss.com) framework and is based on the landing page made bij [Tailwindtoolbox.com](https://tailwindtoolbox.com)

Pictures of the demo by [Undraw](https://undraw.co), logo icon by [freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/) 

## Tailwind
Tailwind files are no longer added in the vendor/tailwindcss directory, but can easily be installed via npm - see paragraph "Extending Tailwindcss" 
For more information about Tailwindcss please refer to the documentation of [Tailwindcss](https://tailwindcss.com)

## Extending Tailwindcss  
If you want to extend tailwind css using your own classes, you can do so by adapting the base.css file and/or the tailwind.config.js file.  
First you will need to install tailwindcss and dependencies.  Navigate with a CLI tool to the gravtail directory and run npm install.  You can now adapt the above mentioned files and recreate the gravtail.css file using CLI command npm run build which shortcuts to "npx tailwindcss build css/base.css -o css/custom.css".  
Do not forget to empty caches to see the result.  
Please refer to the [Tailwindcss docs](https://tailwindcss.com) for more information.

## Installation	
### GPM Update 
Currently not supported as gravtail is not listed yet.
	
### Manual installation
To install this theme, just download the zip version of this repository and unzip it under /your/site/grav/user/themes. Then, rename the folder to gravtail. 

You should now have all the theme files under the gravtail directory

## Setup

If you want to set gravtail theme as the default theme, you can do so by following these steps:  
if you have the admin panel installed:  
* go to themes and click on the activate button under the theme name

Without the admin panel:
* Navigate to `/your/site/grav/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `theme: gravtail`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

## Configuration
The theme has several configuration settings for the social links, the terms & condition link, the company address.  They can easily be accessed in the admin panel by clicking on the theme picture.  
Without the admin panel the parameters have to be filled in manually in the gravtail.yaml file.  
The names of the different parameters can be found in the blueprint.yaml file of the theme.


## Demo
Demo can be found [here](https://gravtail.outsmartit.be).