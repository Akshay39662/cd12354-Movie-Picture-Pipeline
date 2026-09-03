FROM  public.ecr.aws/docker/library/node:18.14.2-alpine3.17

ENV REACT_APP_MOVIE_API_URL=http://abfaaef0681d94cc89f4d497c6f6eff0-1890282453.us-east-1.elb.amazonaws.com

WORKDIR /app

# Copy dependdency files
COPY package*.json ./

# Install packages
RUN npm ci

# Copy code
COPY . .

# Build the app
RUN npm run build

# Expose the port used by the React app
EXPOSE 3000

# Start the React app when the container starts
CMD ["npm", "run", "serve"]
