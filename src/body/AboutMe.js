import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/body.css';

class AboutMe extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="body body-text">
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              className="body-left">
              <br></br>
              <h2 className="curriculum-title">SOBRE MIM</h2>
              <div className="body-center">
                <img className="body-img body-left" src="images/memongo.jpg" alt="Eu no HQ do MongoDB" />
              </div>
              <p>
              Na sessão <b>Sobre Mim</b> falarei de forma um pouco mais abrangente e livre sobre minha vida, 
              formação e experiências. Se quiser uma leitura mais sucinta e direta, sinta-se livre para visitar a aba <b>Curriculum</b>.
              </p>
              <br></br>
              <h3 className="curriculum-sub-title">This.state</h3>
              
              <p>
              Meu nome é <b>Diego Sulzbeck Villalobos</b>, tenho 27 anos e sou estudante de Engenharia Elétrica Com Ênfase em Computação na POLI-USP e 
              Consultor Analista de Dados para uma empresa Israelense no território LATAM.
              </p>
              <p>
              Atualmente estou morando em São Paulo, capital.
              </p>
              <br></br>
              <h3 className="curriculum-sub-title">This.getHistory()</h3>
              
              <p>
              Nasci em <b>São Paulo</b> e estudei até meus 12 anos no colégio espanhol Miguel de Cervantes.
              Posteriormente, minha família se mudou para Santiago, Chile, e lá estudei durante 5 anos. Durante esse periodo, comecei a me interessar por programação. Um amigo meu me mostrou uma IDE de desenvolvimento de jogos, simples e intuitiva, 
              chamada <b>Game Maker</b> (desenvolvida pelo excelentíssimo professor Markus Hendrik Overmars).
              Inicialmente com o método de drag-and-drop, e logo utilizando scripts para comportamentos mais complexos e personalizados, 
              o grupo de três amigos fazia e jogava os jogos um do outro.
              
              </p>
              <br></br>
              <h3 className="curriculum-sub-title">GoTo("Brazil", this)</h3>
              
              <p>
              Retornando me fechei bastante nos estudos e entrei na Escola Politécnica com 19 anos, após um ano de cursinho. 
              Mochilei antes de ingressar na Universidade pela Espanha, Catalunha e Inglaterra.
              </p>
              <p>
              Devido a alguns contratempos e foco em oportunidades incríveis na área de segurança que tive a sorte de ter, O curso acabou 
              se alongando, e hoje representa uma carga horária baixa com previsão de conclusão em 2020.
              </p>
              <p >
              Paralelamente comecei a trabalhar na área de segurança do Itaú em 2015, e essa foi uma experiência indescritível. Entrei por um programa de 
              talentos e tive em todo momento acompanhamento na estruturação do meu PDI - ter objetivos tangíveis e práticos além da Universidade foi uma grande motivação 
              para mim. Nessa época, aprendi muitas das linguagens que apresentarei na aba <b>Curriculum</b>, participei e ganhei com meu grupo o hackathon de 2015 da Ambev, 
              terminei cursos e livros relacionados a segurança e forneci serviços de consultoria de segurança como free-lancer em duas empresas de médio porte.
              </p>
              <p >
              Hoje tenho uma carreira estreitamente ligada com segurança bancaria, passei pelos times de seguranças do Itaú e do Bradesco e ainda trabalho 
              junto a eles e outros muitos bancos no território LATAM através da BioCatch, empresa israelense de Behavioral Security.
              </p>
              <br></br>
              <h3 className="curriculum-sub-title">This.nextState</h3>
              
              <p >
              A experiência de trabalhar internacionalmente com segurança, observando o cenário bancario de mais de 10 bancos na américa latina e central 
              é extremamente enriquecedora, hoje mais do que nunca vejo e posso auxiliar na Big Picture da fraude LATAM. Tenho muito a aproveitar dessa 
              oportunidade que tenho com a BioCatch estes próximos anos.
              </p>
            </ReactCSSTransitionGroup>
       </div>
      </div>
    );
  }
}

export default AboutMe;
