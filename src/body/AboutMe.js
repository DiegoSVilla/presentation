import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactDOM from 'react-dom';
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
              Meu nome é <b>Diego Sulzbeck Villalobos</b>, tenho 24 anos e sou estudante de Engenharia Elétrica na POLI-USP. Como ênfase do curso, optei por Computação, 
              o que resulta numa grade com menos elétrica e bastante eletrônica, organização e arquitetura de computadores, engenharia de software, 
              entre outras disciplinas que seguem essa linha.
              </p>
              <p>
              Atualmente estou morando em São Paulo, capital, e trabalhando como engenheiro de segurança
              (Cybersecurity) no Itaú.
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
              Ao retornar para minha pátria, me fechei bastante nos estudos e entrei na Escola Politécnica com 19 anos, após um ano de cursinho e um ano perdido na troca de país. 
              Mochilei antes de ingressar na Universidade, passando pela Espanha (Madrid e Barcelona, 2 semanas) e Reino Unido (Inglaterra  
              e Escocia, 1 mês e meio).
              </p>
              <p>
              Os dois primeiros anos da Escola Politécnica, período conhecido como Biênio, são formulados de maneira extremamente teórica e distante da área específica.
              Deste modo, posso admitir que não fui um aluno exemplar. Recuperei o foco nos meus estudos no terceiro ano, quando as matérias passaram 
              a ser específicas para Computação.
              </p>
              <p >
              No quarto ano de universidade, comecei a trabalhar na área de segurança do Itaú, e essa foi uma experiência indescritível. Entrei por um programa de 
              talentos e tive em todo momento acompanhamento na estruturação do meu PDI - ter objetivos tangíveis e práticos além da Universidade foi uma grande motivação 
              para mim. Nessa época, aprendi muitas das linguagens que apresentarei na aba <b>Curriculum</b>, participei e ganhei com meu grupo o hackathon de 2015 da Ambev, 
              terminei cursos e livros relacionados a segurança e forneci serviços de consultoria de segurança como free-lancer em duas empresas de médio porte.
              </p>
              <p >
              Além do aprendizado mais técnico, a vivência no mercado de trabalho foi muito importante para mim, e as lições aprendidas - seja no maior banco privado 
              do brasil ou como consultor em uma empresa de médio porte - fizeram de mim uma pessoa mais profissional e madura.
              </p>
              <br></br>
              <h3 className="curriculum-sub-title">This.nextState</h3>
              
              <p >
              Estou no 5º ano do meu curso, com previsão de me formar em 4 semestres. Apesar do meu ritmo lento na Universidade desde que comecei a trabalhar, acredito que experiência de mercado durante a formação vale mais que qualquer adicional.
              </p>
            </ReactCSSTransitionGroup>
       </div>
      </div>
    );
  }
}

export default AboutMe;