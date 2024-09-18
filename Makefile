include .env
export

build:
	docker compose --profile $(ENVIRONMENT) up -d --build --remove-orphans

down:
	docker compose down