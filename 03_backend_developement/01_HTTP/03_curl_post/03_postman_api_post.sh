curl  -d 'foo=bar' -X POST "https://postman-echo.com/post" | jq '.json' > 03_postman_api_post.result
