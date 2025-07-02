// Write a C program to create a child process and show how parent and child processes 
// will share the text file and justify that both parent and child share the same file offset.

#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>
#include <sys/wait.h>

int main(int c, char **v) {
    int f = open(v[1], 0);
    char b[11];
    
    pid_t pid = fork();
    
    if (pid == 0) {
        read(f, &b, 10); 
        b[10] = 0;
        printf("Child: %s\n", b);
    } 
    else {
        wait(0);
        read(f, &b, 10); 
        b[10] = 0;
        printf("Parent: %s\n", b);
    }
    return 0;
}

// ./a.out test.txt