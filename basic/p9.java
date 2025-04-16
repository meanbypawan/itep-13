class TestMain{
    public static void main(String args[]){
        System.out.println("7/2 : "+(7/2)); // 3
        System.out.println("7.0/2 : "+(7.0/2)); // 3.5
        System.out.println("7%2 : "+(7%2)); // 1
        System.out.println("-7%2 : "+(-7%2)); // -1
        System.out.println("7%-2 : "+(7%-2)); // 1
        System.out.println("-7%-2 : "+(-7%-2)); // 
        System.out.println("2%7 : "+(2%7)); //  2
        //System.out.println("7/0 : "+(7/0)); // AE
        System.out.println("7.0/0 : "+(7.0/0));
        System.out.println("-7.0/0 : "+(-7.0/0));
        //System.out.println("7%0 : "+(7%0));
        System.out.println("7.0%0 : "+(7.0%0));
        System.out.println("0%-2 : "+(0%-2)); // 0

        int x = 123;
        x = x%10;
        System.out.println(x);
    }
}


