docker build -t  docker-nodeapp .

docker run --name node-server -d --rm -p 8088:8088 -v C:\xampp\htdocs\node-js-server/src/:/usr/src/app/src/ docker-nodeapp



docker run --rm -d -p 27017:27017 --name mongodb mongo


git stash
    save [name]
    pop

git log --graph --oneline --decorate