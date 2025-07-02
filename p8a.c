// Write a C program that takes the file name as an argument and prints the type of the given file.

#include <stdio.h>
#include <sys/stat.h>

int main(int argc, char *argv[]) {
    struct stat s;
    char *type;
    
    for (int i = 1; i < argc; i++) {
        lstat(argv[i], &s);
        type = (S_ISREG(s.st_mode)) ? "regular" :
               (S_ISDIR(s.st_mode)) ? "directory" :
               (S_ISCHR(s.st_mode)) ? "character special" :
               (S_ISBLK(s.st_mode)) ? "block special" :
               (S_ISFIFO(s.st_mode)) ? "fifo" :
               (S_ISLNK(s.st_mode)) ? "symbolic link" :
               (S_ISSOCK(s.st_mode)) ? "socket" : "** unknown mode **";
        printf("%s: %s\n", argv[i], type);
    }
    return 0;
}