// Write a program to read n characters from a file and append them back to the 
// same file using dup2 function.

#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main(int argc, char *argv[]) {
    char buf[8];
    int fd1 = open(argv[1], 2);
    int fd2 = dup2(fd1, 1);

    read(fd1, buf, 8);
    lseek(fd2, 0, 2);
    write(fd2, buf, 8);

    return 0;
}

// ./a.out test.txt