// Write a C program to display various details of a file using stat structure (At least 5 fields).

#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/stat.h>

int main(int c, char **v) {
    struct stat st;
    stat(v[1], &st);

    printf("file name: %s\n", v[1]);
    printf("file size: %lld\n", st.st_size);
    printf("file inode: %lld\n", st.st_ino);
    printf("file links: %hu\n", st.st_nlink);
    printf("file mode: %hu\n", st.st_mode);
    printf("file atime: %s", ctime(&st.st_atime));
    printf("file mtime: %s", ctime(&st.st_mtime));
    printf("Perms: %o\n", st.st_mode & 0777);
    printf("file uid: %d\n", st.st_uid);
    printf("file guid: %d\n", st.st_gid);

    return 0;
}

// ./a.out test.txt