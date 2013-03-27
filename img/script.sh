#! /bin/bash

convert in/* -resize 1600x800^ +level-colors midnightblue,whitesmoke -channel blue -quality 80% -set filename:fname 'out/%t' +adjoin '%[filename:fname].jpg'
