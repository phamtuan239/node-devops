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

CMD ["node", "./src/index.js"]