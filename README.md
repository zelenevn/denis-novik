# Static web site by Denis Novik design template

## Run project

You can run this site using docker

1. Clone github repo
```bash
git clone https://github.com/c-addict/denis-novik.git
cd denis-novik
```

2.Build docker image
```bash
docker build -t <image-name:tag> .
```
-t – Image name and tag. Example: denis-novik-site:latest

3.Run docker container
```bash
docker run -d -p <local port:container port> <image name:tag>
```

-d – Detached mode(run container in background).
-p – Post. Example: 80:80.
