function SimplNumber(){
    for(i = 2; i<=10; i++)
    {
        count = 0;
        for(j=1; j<=i; j++)
        {
            if(i%j==0)
            {
                count+=1;
            }
        }
        if(count == 2)
        {
            alert(i);
        }
    }
}

