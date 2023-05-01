/*

    ALERTA: Este Projeto Tem como objetivo criar e emular um terminal web para baixar programas e fazer testes/analises
      de segurança, com isso o programa não tem como objetivo ser usado para fins criminais, mas sim para estudos da área
      da segurança da informação, portanto informo aqui que o não que responsabilizo pelo mal uso deste software e qualquer problema
      o responsável por usar esta ferramenta deverá responder pelos seus atos!

*/
jQuery(function($, undefined) {
    $('#term_web').terminal(function(command) {
      if (command == 'help') {
        this.echo("\n1. --version [Versão do sistema]")
        this.echo("2. clear [Limpa o terminal]");
        this.echo("3. projetos + [Exibe os projetos criados]");
        this.echo("4. Programa1 + [Exibe informações do projeto (nome do programa)]");
        this.echo("5. download + (nome do programa) [Inicia o download do projeto]\n");
      } 
    
    //  if (command == 'social'){ .  This was wrong. 
      else if (command == '--version'){
        this.echo("\n[version - V1.0]\n")
      }
      else if (command == 'projetos +'){
        this.echo("\n#############################################################################")
        this.echo("#                                                                           #")
        this.echo("#                                Projetos                                   #")
        this.echo("#                                                                           #")
        this.echo("# 1°  Programa1 (Digite a descrição do programa)                            #")
        this.echo("# 2°  Programa2 (Digite a descrição do programa)                            #")
        this.echo("# 3°  Programa3 (Digite a descrição do programa)                            #")
        this.echo("# 4°  Programa4 (Digite a descrição do programa)                            #")
        this.echo("# 5°  Programa5 (Digite a descrição do programa)                            #")                                                  
        this.echo("# 6°  Programa6 (Digite a descrição do programa)                            #")
        this.echo("# 7°  Programa7 (Digite a descrição do programa)                            #")
        this.echo("# 8°  Programa8 (Digite a descrição do programa)                            #")
        this.echo("# 9°  Programa9 (Digite a descrição do programa)                            #")
        this.echo("# 10° Programa10 (Digite a descrição do programa)                           #")
        this.echo("# 11° Programa11 (Digite a descrição do programa)                           #")
        this.echo("# 12° Programa12 (Digite a descrição do programa)                           #")
        this.echo("# 13° Programa13 (Digite a descrição do programa)                           #")
        this.echo("# 14° Programa14 (Digite a descrição do programa)                           #")
        this.echo("# 15° Programa15 (Digite a descrição do programa)                           #")
        this.echo("# 16° Programa16 (Digite a descrição do programa)                           #")
        this.echo("#                                                                           #")
        this.echo("#                                                                           #")
        this.echo("# obs: para baixar um dos programas digite o comando:                       #")
        this.echo("# download + (nome do programa)                                             #")
        this.echo("#                                                                           #")
        this.echo("#############################################################################\n")
      }
      else if (command == 'download + Programa1'){
        this.echo("\nDownload iniciado!\n")
        function dowloadP() {
          var downloadP = document.getElementById('downP');
          downloadP.click();
      }
      dowloadP()
      }
      else if (command == 'Programa1 +'){
        this.echo("\nPrograma1 (sistema de preparação de área de trabalho). Este programa tem como objetivo instalar e configurar automaticamente"+
        "softwares de desenvolvimento e \nprogramas de análise de vulnerabilidade\n")
      }
   
      else {
        if (command !== '') {
          try {
            var result = window.eval(command+'\n');
            if (result !== undefined) {
              this.echo(new String(result+'\n'));
            }
          } catch(e) {
            this.error(new String(e+'\n'));
          }
        } else {
          this.echo('\n');
        }
      }
    
   
    }, {
    greetings: 'Terminal web [versão - V1.0]\nEste sistema foi criado por um estudante e pesquisador da área da segurança'+
    ' Cuja o seu objetivo é realizar a infecção de dispositivos para investigação \ncoleta e controle de dados, fornecendo'+
    ' ferramentas para facilitar a conclusão do seus objetivos!\n',
    name: 'C:\User\(hacker)> ',
    prompt: 'C:\User\(hacker)> ',
    color: 'blue'
    });
   });

   /*

    ALERTA: Este Projeto Tem como objetivo criar e emular um terminal web para baixar programas e fazer testes/analises
      de segurança, com isso o programa não tem como objetivo ser usado para fins criminais, mas sim para estudos da área
      da segurança da informação, portanto informo aqui que o não que responsabilizo pelo mal uso deste software e qualquer problema
      o responsável por usar esta ferramenta deverá responder pelos seus atos!

*/
