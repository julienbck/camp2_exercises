echo $1
echo $2
echo $3
curl -d "body=\"$1\"&title=\"$2\"&userId=\"$3\"" -X POST 'http://jsonplaceholder.typicode.com/posts'
t
