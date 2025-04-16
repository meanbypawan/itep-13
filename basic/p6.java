/*
         No typecasint required
  ---------------------------->
  byte----short---int-----long
  <----------------------------
           Typecasting required
 
   b + b  = i
   s + s  = i
   b + s = i
   s + i = i
   b + i = i
   i + i = i
   b + l = l
   
 */
class TestMain{
    public static void main(String args[]){
        long a;
        a = 1;
        int b = 2;
        int c = a + b;
        System.out.println(c);
    }
}