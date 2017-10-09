all: docker docker-run

docker:
	docker build -t jcaple007/gliphy_search .

docker-run:
	docker run -p 8000:8000 -d jcaple007/gliphy_search

docker-stop:
	docker stop `docker ps | grep jcaple007 | cut -d" " -f1`

docker-clean: docker-stop
	docker rmi jcaple007/gliphy_search