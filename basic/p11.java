class TestMain{
    public static void main(String args[]){
        int x,y;
        x = 5;
        y = ++x - --x * x++ / ++x;
        System.out.println("x : "+x+" y : "+y);
    }
}