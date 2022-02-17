#development
export NODE_ENV=development
export PORT=8008
export DBPORT=27018
docker-compose -p contacts-devel up -d

#production
export NODE_ENV=production
export PORT=80
export DBPORT=27015
docker-compose -p contacts-prod up -d