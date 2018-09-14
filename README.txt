docker build -t tomnolane/node-web-app .
docker run -p 444:443 -d tomnolane/node-web-app
pug -w oferta.pug
docker push tomnolane/node-web-app