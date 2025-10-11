#!/bin/bash

# Update a post by ID
POST_ID="68e91b24d9ce0b6a6f616bf1"
TITLE="My third Post"
CONTENT="This is the updated content"

curl -v -X PUT http://localhost:3000/api/notes/$POST_ID \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\", \"content\": \"$CONTENT\"}"