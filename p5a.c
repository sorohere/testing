// Write a program to copy access and modification time of a file to another 
// file using utime function.

#include <stdio.h>
#include <sys/stat.h>
#include <utime.h>
#include <time.h>

int main(int argc, char* argv[]) {
    struct stat s1, s2;
    struct utimbuf times;

    stat(argv[1], &s1);
    stat(argv[2], &s2);

    printf("Before Copying ...\n\n");
    printf("Access Time: %sModification Time: %s\n", ctime(&s1.st_atime), ctime(&s1.st_mtime));

    times.actime = s2.st_atime;
    times.modtime = s2.st_mtime;
    utime(argv[1], &times);

    stat(argv[1], &s1);
    
    printf("\nAfter Copying ...\n\n");
    printf("Access Time: %sModification Time: %s\n", ctime(&s1.st_atime), ctime(&s1.st_mtime));

    return 0;

}
// ./a.out fileinfotobechanged.txt desfile.txt