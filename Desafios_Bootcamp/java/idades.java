package Desafios_Bootcamp.java;
import java.io.IOException;
import java.util.Scanner;

public class idades {
    public static void main(String[] args) throws IOException {
        try (Scanner leitor = new Scanner(System.in)) {
            int cont = 0;
            int soma = 0;
            int n = leitor.nextInt();
            
            while (n >= 1){
                if (n >= 0) {
                    soma+=n;
                    cont++;
                }
                n = leitor.nextInt();
            }
            // Double.valueOf retorna um objeto double o valor double pelo argumento 
            double media =  Double.valueOf(soma) / Double.valueOf(cont) ;
            // %.2f para núemro de ponto flutuante
            System.out.println(String.format("%.2f",  media ));
        }
    }
}
