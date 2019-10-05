package MyQuest;

public class forStatementSamples {
	public static void main(String[] args) {
		//Syntax for(initialization; condition; increment/decrement)
		
		//1. For loops
		for(int i=3; i <= 12; ++i )
		{
			System.out.print("Course Day - ");
			System.out.println(i);
		}	
		
		//2. Nested for loops 
		for(int i=1; i <= 365; ++i )
		{
			System.out.print("Course Day - ");
			System.out.println(i);
			for(int j=1; j <= 5; ++j )
			{
				System.out.print("\t\tDrink water count - ");
				System.out.println(j);				
			}
		}	
	}
}
