// Write a C program
// i. To read the first 20 characters from a file
// ii. seek to 10th byte from the beginning and display 20 characters from there
// iii. seek 10 bytes ahead from the current file offset and display 20 characters
// iv. Display the file size


// C program to demonstrate lseek with numeric constants

#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

int main(int argc, char **v) {
    int fd = open(v[1], 0);
    char buf[25];

    read(fd, buf, 20);
    write(1, buf, 20);
    write(1, "\n", 1);

    lseek(fd, 10, 0);  // SEEK_SET = 0
    read(fd, buf, 20);
    write(1, buf, 20);
    write(1, "\n", 1);

    lseek(fd, 10, 1);  // SEEK_CUR = 1
    read(fd, buf, 20);
    write(1, buf, 20);
    write(1, "\n", 1);

    int size = lseek(fd, 0, 2);  // SEEK_END = 2
    printf("Size of file: %d bytes\n", size);

    close(fd);
    return 0;
}