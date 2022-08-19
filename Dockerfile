FROM node:16-alpine

WORKDIR /usr/app

COPY package.json ./

# ARG NODE_ENV
# RUN if ["$NODE_ENV" = "development"]; \
#     then npm install; \
#     else npm install --only=production; \
#     fi

RUN npm install

COPY . .

EXPOSE 5000

RUN npm install -g pm2

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]