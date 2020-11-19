db:
	docker-compose run --service-ports --rm --name open-salary-db postgres

in:
	docker exec -it open-salary-db /bin/bash

psql:
	docker exec -it open-salary-db psql -U postgres -d open_salary