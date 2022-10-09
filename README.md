# Static web site by Denis Novik design template

## Run project

You can run this site using docker

### From source
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
docker run -d -p <local port:container port> <image-name:tag>
```

-d – Detached mode(run container in background). <br>
-p – Port binding. Example: 80:80.

### Using published docker image

1. Pull docker image
```bash
docker pull ghcr.io/c-addict/denis-novik-site:latest
```

2. Run docker container
```bash
docker run -d -p 80:80 denis-novik-site:latest
```
