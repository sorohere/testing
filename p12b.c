//main.c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    pid_t pid;
    char *env[] = { "USER=custom_user", "PATH=/custom", NULL };

    pid = fork();

    if (pid == 0) {
        execle("./echoall", "echoall", "arg1", "arg2", NULL, env);
        exit(1);  
    } else {
        wait(NULL); 
        execlp("./echoall", "echoall", "default_arg", NULL);
        exit(1);  
    }

    return 0;
}

//echoall.c
// #include <stdio.h>

int main(int argc, char *argv[], char *envp[]) {
    for (int i = 0; i < argc; i++)
        printf("argv[%d] = %s\n", i, argv[i]);

    for (int i = 0; envp[i] != NULL; i++)
        printf("envp[%d] = %s\n", i, envp[i]);

    return 0;
}

//To run:
// gcc -o main main.c
// gcc -o echoall echoall.c
// ./main