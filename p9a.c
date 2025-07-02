// C program to demonstrate the usage of umask and chmod functions

#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <unistd.h>

int main() {
    // Remove file permission mask (set to 0) and create "foo" with 0644
    umask(0);
    creat("foo", 0644);  // Will actually have permissions 0644

    // Set umask to 022 and create "bar" with 0666
    umask(022);
    creat("bar", 0666);  // Will actually have permissions 0644 (0666 - 022)

    // Change permissions using chmod
    chmod("foo", 0777);  // Make foo fully accessible
    chmod("bar", 0600);  // Make bar readable/writable only by owner

    return 0;
}