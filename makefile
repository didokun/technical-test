start:
	@docker-compose up -d --force-recreate --build

stop:
	@docker-compose stop

restart:
	@docker-compose restart
