if [ $# -eq 0 ]; then
	echo $0
	exit 1
fi

count=0;
for val in "$@"; do
	echo "$val"
	count=$((count + 1))
	[ $count -eq 3 ] && break
done
