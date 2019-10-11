FROM node:7
RUN npm install sails -g
RUN npm install sails-mysql -g
ENV NODE_ENV development
WORKDIR C:/Manpreet_Singh/MACS/2_Term/3_Cloud Computing/Assignments/Assignment_3/A3_B00821998_Backend
COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*","./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift