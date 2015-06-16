service_assessments
===================

# Introduction
Static site providing a HTML form to host the prompts for service assessors, delivery managers, product owners and development teams in preperation for going through the Alpha, Beta, Live assessments of digital products.

# System dependencies

- Ruby 2.1.2
- s3_website to deploy to AWS.
- jekyll 2.5.3
- jekyll-asset-pipeline
- jekyll-redirect-from


# Project setup

To install the app dependencies clone the repo then CD to the directory, then run the following if bundler is already installed. If you need to install Bundler, run Gem install Bundler first. 

    bundle install

Then starting the app with:

    jekyll s

# For info see

* https://github.com/jekyll/jekyll-redirect-from
* https://github.com/laurilehmijoki/s3_website