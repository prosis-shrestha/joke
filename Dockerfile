FROM prosisstha/funny-jokes-cli:latest

WORKDIR /app

# Install express for server
RUN npm install -g express

# Add server code
COPY server.js .

EXPOSE 3000

CMD ["node", "server.js"]
