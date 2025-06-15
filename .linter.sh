#!/bin/bash
cd /home/kavia/workspace/code-generation/echoguard-cyberprivacy-nexus-44097-d54870d9/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

