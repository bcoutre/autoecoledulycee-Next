# autoecoledulycee-Next

## Build : 

`dkb . -f CICD/AELycee.dockerfile -t aelycee`  

## Run  
`dk stop aelycee`  
`dk rm aelycee`  
`dkr -d --name aelycee --restart unless-stopped -p 3001:3000 aelycee`  