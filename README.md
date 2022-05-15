### Technology
- express
- bcrypt
- jsonwebtoken
- sequelize
- mysql

### Installation
```
npm i # for your IDE
docker-compose up -d --build
docker-compose exec app npx sequelize db:migrate
docker-compose exec app npx sequelize db:seed:all
```
base url: http://localhost:3000

#### Rebuild
```
docker-compose down -v
docker-compose up -d --build
```

### Usage
API LIST:  
- /api/register
  - username: string|unique
  - password: string|min:8
- /api/login
  - username: string
  - password: string|min:8


### Adminer credentials
url: http://localhost:8080  
server: mysql  
username: root  
password: secret
