#include <fcntl.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    char buff[10];
    int src = open(argv[1], 0);
    int dest = open(argv[2], O_WRONLY | O_CREAT | O_TRUNC, 0644);
    ssize_t n;

    while ((n = read(src, buff, sizeof(buff))) > 0) {
        write(dest, buff, n);
    }

    return 0;
}