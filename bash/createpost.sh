#!/bin/bash
TITLE="My fifth Post"
CONTENT="This is the post content"

curl -v -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\", \"content\": \"$CONTENT\"}"