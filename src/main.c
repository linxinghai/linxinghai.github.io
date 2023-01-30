#include <stdio.h>
int main(void)
<%
    int arr<:5:> = {1, 2, 3, 4, 5};
    printf("%d\n", 2<:arr:>);
    return 0;
%>