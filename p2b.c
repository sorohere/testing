// Write a C program to simulate system function.

#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/wait.h>

int solve(char *cmd) {
    if(fork() == 0) 
        execl("/bin/sh", "sh", "-c", cmd, NULL);
    
    int status;
    wait(&status);
    return status;
}

int main(int c, char **v) {
    int status = solve("ls -l");
    printf("code status: %d\n", status);
    return 0;
}

// ./a.out