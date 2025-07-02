// Write a C program to display the file content in reverse order using lseek system call.

#include <fcntl.h>
#include <unistd.h>

int main(int c, char **v) {
    int f = open(v[1], 0);
    int s = lseek(f, 0, 2);

    char ch;
    while (s--) {
        lseek(f, s, 0);
        read(f, &ch, 1);
        write(1, &ch, 1);
    }
    write(1, "\n", 1);
}


// ./a.out test.txt