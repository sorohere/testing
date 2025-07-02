#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/stat.h>
#include<fcntl.h>
#include<dirent.h>
#include<time.h>
#include<utime.h>

int main() {
    DIR *dp = opendir(".");
    struct dirent *dir;

    while((dir = readdir(dp)) != NULL) {
        struct stat st;
        stat(dir->d_name, &st);

        printf("file name: %s\n", dir->d_name);
        printf("file size: %lld\n", st.st_size);
        printf("file inode: %lld\n", st.st_ino);
        printf("file links: %hu\n", st.st_nlink);
        printf("file mode: %hu\n", st.st_mode);
        printf("file atime: %s", ctime(&st.st_atime));
        printf("file mtime: %s", ctime(&st.st_mtime));
        printf("Perms: %o\n", st.st_mode & 0777);
        printf("file uid: %d\n", st.st_uid);
        printf("file guid: %d\n", st.st_gid);

        printf("\n\n");
    }
    return 0;
}

// ./a.out