/*
Seu Júlio é proprietário de um grande apiário situado no interior da Paraíba. 
Todo ano, semestralmente, seu Júlio coleta o mel produzido pelas abelhas da sua propriedade e armazena-o em um recipiente de formato CILÍNDRICO para que facilite o transporte do mel para os estabelecimentos que encomendam esse produto natural para a comercialização.
Certa vez seu Júlio percebeu que devido a um crescimento na produção do mel, em relação ao semestre anterior, o recipiente que possuia não suportaria o volume de mel produzido por suas abelhas. 
Seu Júlio precisa agora que você faça um programa que informado o volume de mel em cm3 e o diâmetro da parte interna do recipiente em cm, calcule e mostre:
- Qual deve ser a altura(em cm) da parte interna do recipiente;
- A área(em cm2) da boca(entrada) do recipiente.
Obs.: Considere π = 3.14
*/
package Desafios_Bootcamp.java;
import java.io.IOException;
// DecimalFormat é uma subclasse que possibilita analisar e formatar núemros em qualquer localidade, incluindo suporte para dígitos e diferentes tipos de números
import java.text.DecimalFormat;
import java.util.Scanner;

public class mel {
    public static void main(String[] args) throws IOException {
    	try (Scanner leitor = new Scanner(System.in)) {
            DecimalFormat df = new DecimalFormat("0.00");
            double V, D, R, area, altura;
        // hasNext() é um método usado para verificar se há algum elemento restante na lista, é do tipo booleano que retorna apenas verdadeiro ou falso
        // nextDouble() é um método da classe Java Scanner usado para escanear o próximo token de entrada como um double 
            while (leitor.hasNext()) {
            	V = leitor.nextDouble();
            	D = leitor.nextDouble();
            	R = D/2;
            	area = 3.14 * (R*R);
            	altura = V / (3.14 * (R*R));
                // df.format = formato double
            	System.out.println("ALTURA = " + df.format(altura));
            	System.out.println("AREA = " + df.format(area));
            }
        }
    }	
}