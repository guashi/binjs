# This file initializes our Sinatra-powered blog.

# Require the necessary libraries.
require 'rubygems'
require 'sinatra'

root = File.expand_path(File.dirname(__FILE__))
set :public, root + '/'

get "/" do
  File.read(File.join(File.dirname(__FILE__),"spec", "SpecRunner.html"))
end
puts root
