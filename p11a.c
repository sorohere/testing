// Write a program to differentiate between dup and dup2 functions

#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <string.h>

int main(int c, char **v) {

    int fd1 = open("sample.txt", O_WRONLY);
    int fd2 = dup(fd1);
    int fd3 = dup2(fd1, 10);

    write(fd1, "Writing via fd1 \n", 16);
    write(fd2, "Writing via fd2 \n", 16);
    write(fd3, "Writing via fd3 (dup2)\n", 50);

    return 0;
}

// ./a.out