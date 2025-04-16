/*
  -128 to + 127 -----> byte [1-byte]
  -32768 to + 32767--> short [2-byte]
  -2^31 to 2^31-1:- -2147483648 to 2147483647 
 */
class TestMain{
    public static void main(String args[]){
       int a,b,c;
       a = 2147483647;
       b = 3;
       c = a + b;
       System.out.println(c);
    }
}