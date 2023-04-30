run:
	docker run -d -p 3000:3000 --rm --name enlish-app-container english-app
stop:
	docker stop enlish-app-container