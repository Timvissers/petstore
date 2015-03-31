update node	
    
    update node -g
    
install ruby for sass	

    sudo gem install sass
install mongodb	

    install and start mongodb after creating /data/db (mongodb)

https://github.com/DaftMonk/generator-angular-fullstack	

    npm install generator-angular-fullstack
	yo angular-fullstack (javascript, html, sass, ui-router, bootstrap, socket.io, ...)
	
build cycle	

    grunt for building, grunt serve for preview, and grunt serve:dist for a preview of the built app.

heroku setup in dist folder!	
    
    https://devcenter.heroku.com/articles/getting-started-with-nodejs
	heroku create javascriptpetstore
	git remote add heroku git@heroku.com:javascriptpetstore.git
	heroku addons:add mongolab
	foreman start web (to run locally)
	follow instructions of heroku git for commit and deploy!
	git push heroku master (this is to deploy)
	
it works now: https://javascriptpetstore.herokuapp.com/	
    
    This way we have to build dist locally and commit the dist to heroku git in order to deploy!
    