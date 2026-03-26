docker stop web-jornadas
docker rm web-jornadas
docker build -t webpage-jornadas .
docker run -d -p 8069:80 --name web-jornadas webpage-jornadas:latest