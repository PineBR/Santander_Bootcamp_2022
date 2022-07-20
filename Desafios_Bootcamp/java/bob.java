/*
BOB CONDUITE
Você tem em mãos dois cabos circulares de energia. O primeiro cabo tem raio R1 e o segundo raio R2. 
Você precisa comprar um conduite circular de maneira a passar os dois cabos por dentro dele:
Qual o menor raio do conduite que você deve comprar? 
Em outras palavras, dado dois círculos, qual o raio do menor círculo que possa englobar ambos os dois?
*/
// package - um pacote em Java é usado para agrupar classes relacionadas, como uma pasta em um diretório de arquivos
package Desafios_Bootcamp.java;
// use o import para usar uma classe ou um pacote
// A file classe od java.io pacote, permite trabalhar com arquivos
//Importa a classe IOException para lidar com erros
import java.io.IOException;
// java.util é um pacote e o Scanner é uma classe desse pacote
import java.util.Scanner;
// a classe tem que ter o mesmo nome do aquivo
public class bob {
    // String[] armazena um número fixo de strings
    // args é um array que recebe dados da linha de comando, no momento que executamos a aplicação enviamos uma informações por meio dele
    // public - modificador de acesso usado para classes, atributos, métodos e construtores, tornando-se acessíveis por qualquer outra classe
    // static - modificador sem acesso usado para métodos e atributos
    // void - chave indica que o método não deve retornar um valor
    // throws - chave que indica qual tipo de execução pode ser lançada por um método
    public static void main(String[] args) throws IOException {
        // nextInt() é um método que verifica o próximo token dos dados de entrada como um int
        // Quando ocorre um erro do IOException use o try ... catch
        // Scanner é uma classe do pacote java.util para obter a entrada dos tipos primitivos como int, double, strings ...
        // Scanner é uma maneira mais fácil de ler a entrada, lê uma linha interira e divide a linha em tokens (pequenos elementos para o compilador Java)
        // O "new" cria um objeto Scanner
        try (Scanner scan = new Scanner(System.in)) {
            int T = scan.nextInt();
            
            for (int i = 0; i < T; i++) {
                int R1 = scan.nextInt();
                int R2 = scan.nextInt();
        // System é uma classe integrada que contém membros, como o out = saída
        // println() abreviação de print line, usad para imprimir o valor na tela
                System.out.println(R1 + R2);
              
            }
        }
      
    }
}