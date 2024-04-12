#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main(){
    srand(time(0));
    int num=rand()%20+1;
    cout<<"You are given 10 chnages to guess the number from 1 to 100";
    for(int i=0;i<10;i++)
    {
        cout<<"Enter he Number";
        int n;
        cin>>n;
        if(n<1||n>20){
            cout<<"Invalid Number";
        }
        else if(n==num){
            cout<<"You are correct"<<endl;
        }
        else if(n<num){
            cout<<"You have enter the less than required number"<<endl;
        }
        else{
            cout<<"You have enter the more than required number"<<endl;
        }
    }
}

