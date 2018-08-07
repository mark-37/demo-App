echo 'Choose proxy Format...'

msg='Setting up the NPM proxy...'


proxy_host=''
port=8080

npm config set proxy http://$proxy_host:$port
npm config set https-proxy http://$proxy_host:$port

echo 'Done!'

