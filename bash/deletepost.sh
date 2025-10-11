#!/bin/bash

# Delete a post by ID
POST_ID="68e9173bd9ce0b6a6f616be7"

curl -v -X DELETE http://localhost:3000/api/notes/$POST_ID \
  -H "Content-Type: application/json"




# First, get all posts to find the ID
##   ./getposts.sh

# Then delete with the specific ID
##    POST_ID="507f1f77bcf86cd799439011" ./deletepost.sh