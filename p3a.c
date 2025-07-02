// Write a C program to remove empty files from the given directory.

#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/stat.h>
#include<fcntl.h>
#include<dirent.h>

int main() {
    DIR *dp = opendir(".");
    struct dirent *dir;

    while((dir = readdir(dp)) != NULL) {
        int fd = open(dir->d_name, 0);
        int size = lseek(fd, 0, 2);
        if(!size) unlink(dir->d_name);
    }
    return 0;
}

// ./a.out 