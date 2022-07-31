startPath=$(pwd)
scriptPath=$(realpath $(dirname "${BASH_SOURCE[0]}"))

cd $scriptPath

. create-node-alias.sh
nodebox npm run build

cd $startPath
