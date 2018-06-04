import java.io.*;
import java.uti.*;
public class Charfreq{
	public static void main(String[] arg){

		int len,i,k;
		char ch,c;
		String str;
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the String");
		str=sc.nextLine();
		len=str.length();

		for(c='A';c<="z";c++){
			k=0;
			for(j=0;j<=len-1;j++){
				ch=str,charAt(j);
				if(ch==c){
					k++
				}
			}
			if(k>0){
				System.out.println(c+"occurs"+" "+k);
			}
		}
	}
}