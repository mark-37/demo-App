msg='Setting up the NPM proxy...'

proxy=''
username=''
password=''


if [ -z $1 ]
then
port=8080
else
port=$1
fi


a1=`npm config set https_proxy http://$proxy:$port`
a2=`npm config set proxy http://$proxy:$port`

b1=`npm config set https_proxy http://$username:$password@$proxy:$port`
b2=`npm config set proxy http://$username:$password@$proxy:$port`

sleep_2() {
    sleep 2
}

read_username() {
 echo 'Username:'
 read username
 

}

read_password() {
 echo 'Password:'
 read -s password
 
}


read_proxy(){
 echo 'Proxy:'
 read proxy

}



while :
do


echo '****NPM proxy setup****'
echo '1) Format = http://[proxy.company-name].com:8080'
echo '2) Format = http://[username]:[password]@[proxy.company-name].com:8080'
echo '3) Change Port'
echo '4) Enter Manual Proxy'
echo '5) Exit'

echo "Choose:"

read  opt


case $opt in

 1)
    read_proxy
    if [[ $proxy='' ]]; then
        echo 'proxy cannot be left empty'
    else
        echo $msg
        $a1
        $a2

    fi
    ;;

 2) 
    read_username
    read_password
    read_proxy
    echo $msg
    echo $b1
    echo $b2
      
    ;;

 3)
    sleep_2
    echo "Enter port";
    read port
    ;;

4)
    sleep 2
    echo "****Enter the commands****";
    read command
    $command
    ;;


 5)
   echo "Exiting now..!";
   sleep_2
   echo "Bye $USER"; 
   exit 1;;

 *) echo 'Inavlid Choice'

esac
done




#npm config set proxy http://$proxy_host:$port
#npm config set https-proxy http://$proxy_host:$port

echo 'Done!'
