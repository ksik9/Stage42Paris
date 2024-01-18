#!/bin/bash

if [ $# -eq 0 ]; then
	echo $0
	exit 1
fi

for val in "$@"; do
	mkdir "ex${val}"
done
ls -l
