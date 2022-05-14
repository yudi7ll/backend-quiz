FROM node:16-alpine 

WORKDIR /app
COPY . /app
RUN npm i
# RUN npm run build

EXPOSE 3000

# CMD "npm" "start"
CMD "npm" "run" "start:dev"
