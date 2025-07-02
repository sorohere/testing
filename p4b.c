// b) Write a C program to
    // i. To create a child process.
    // ii. The child should execute an interpreter file by passing a few arguments 
    // iii. Create an interpreter file that has the path of echoall.c file and pass one argument
    // iv. Create echoall.c file which prints the arguments received from both child process and interpreter file.

// main.c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int c, char **v) {
    if(fork() == 0) {
        execl("./run.sh", "run.sh", "arg1", "arg2", NULL);
    }
    wait(NULL);
    return 0;
}

// interpreter.sh
#!/bin/bash
./test myarg "$1"


// use this cmd to make it executable
// chmod +x interpreter.sh


// echoall.c
#include <stdio.h>

int main(int c, char**v) {
    for(int i = 0; i < c; i++) {
        printf("argv[%d]: %s\n", i, v[i]);
    }
}