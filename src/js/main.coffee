app = {}
#=include parts/module.coffee
app.init = ->
	app.module()

$ ->
	app.init()