FROM node:18-alpine

WORKDIR /usr/src/app

# Install CLI and express
RUN npm install -g funny-jokes-cli express

# Copy server script
COPY server.js .

EXPOSE 3000

CMD ["node", "server.js"]
