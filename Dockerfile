FROM nginx:alpine

# Copy site
COPY . /usr/share/nginx/html