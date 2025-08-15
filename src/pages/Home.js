import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

function contratarPlano(nomePlano) {
  // Futuro: salvar plano no contexto ou localStorage
  console.log("Plano selecionado:", nomePlano);
  localStorage.setItem('planoSelecionado', nomePlano);

  // Redirecionar para login
  navigate('/login');
}

  return (
    <main>
      <header>
        <nav>
          <h1>
            <a href="/">
            <img style={{textAlign: 'Left'}} className="image" src="logosemfundogimp.png" alt="logo da academia"/>
            </a>
          </h1>
          <div className="menu">
          <a href='/#servicos'>Serviços</a>
          <a href='/#unidades'>Unidades</a>
          <a href="/#planos">Planos</a>
          <a id='areadoaluno' href='/aluno'>Area do Aluno</a>
          </div>
        </nav>
      </header>

      <section id="banner">
        <h2>Transforme seu corpo hoje</h2>
        <p>Treine como uma pantera</p>
      </section>

      <section id="servicos">
        <h2>Conheça Nossos Serviços</h2>
        <div id="caixa-lorem">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo turpis in sapien varius, vel gravida orci faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut ipsum ut velit elementum tempor. Fusce eget augue ut felis hendrerit commodo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
          <div className="cards-servico">
            <div className="servico">
              <h3>Musculação</h3>
              <a>Maquinas e equipamentos de alto nivel para sua melhor performance</a>
            </div>

            <div className="servico">
              <h3>Funcional</h3>
              <a>Treinamento de alta intensidade para fazer seu corpo performar em alto nivel</a>
            </div>

            <div className="servico">
              <h3>Cardio</h3>
              <a>Maquinas com a melhor qualidade para você fazer o seu cardio com total segurança</a>
             </div>
          </div>
      </section>

      <section id="banner2">
        <p>Nenhum cidadão tem o direito de ser um amador em matéria de treinamento físico. Que desgraça é para o homem envelhecer sem nunca ver a beleza e a força do que o seu corpo é capaz.</p>
        <a><img src='socrates.png' alt='socrates'></img><span>Socrates</span></a>
      </section>

<section id="unidades" style={{ padding: '30px', backgroundColor: '#1a1a1a' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '30px',fontSize:'40px' }}>Nossas Unidades</h2>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  }}>
    {[
      {
        nome: 'ZER0GYM - Bairro Exemplo',
        endereco: 'Av. das Palmeiras, 123 - Bairro Exemplo, Várzea Grande - MT',
        imagem: '/imgs/unidade.png',
        maps: 'https://www.google.com/maps'
      },
      {
        nome: 'ZER0GYM - Centro',
        endereco: 'Rua Principal, 456 - Centro, Cuiabá - MT',
        imagem: '/imgs/unidade.png',
        maps: 'https://www.google.com/maps'
      },
      {
        nome: 'ZER0GYM - Não Centro',
        endereco: 'Rua Não é do Centro, 456 - Não Centro, Várzea Grande - MT',
        imagem: '/imgs/unidade.png',
        maps: 'https://www.google.com/maps'
      }
    ].map((u, index) => (
      <a
        key={index}
        href={u.maps}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '300px'
        }}
      >
        <div style={{
          border: '1px solid #ccc',
          borderColor: 'red',
          borderRadius: '10px',
          padding: '15px',
          backgroundColor: '#1d1d1dff',
          textAlign: 'center',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={u.imagem} alt={u.nome} style={{ width: '100%', borderRadius: '8px' }} />
          <h3>{u.nome}</h3>
          <p>{u.endereco}</p>
        </div>
      </a>
    ))}
  </div>
</section>

      <section id="planos">
        <h2 style={{fontSize:'40px'}}>Nossos Planos</h2>
        <div className="cards-planos">
          <div className="plano">
            <h3>Mensal</h3>
            <p>R$ 89,90</p>
            <ul>
              <li>Acesso livre à musculação</li>
              <li>Treino personalizado</li>
              <li>Sem fidelidade</li>
            </ul>
            <button className="btn-contratar"onClick={() => contratarPlano('Mensal')}>
              Contratar
            </button>
          </div>

          <div className="plano">
            <h3>Trimestral</h3>
            <p>R$ 249,90</p>
            <ul>
              <li>Todos os benefícios do plano mensal</li>
              <li>+ Avaliação física grátis</li>
            </ul>
            <button className="btn-contratar"onClick={() => contratarPlano('Trimestral')}>
              Contratar
            </button>
          </div>

          <div className="plano">
            <h3>Semestral</h3>
            <p>R$ 449,90</p>
            <ul>
              <li>Todos os benefícios anterior</li>
              <li>Leve até 3 amigos para treinar com você</li>
            </ul>
            <button className="btn-contratar"onClick={() => contratarPlano('Semestral')}>
              Contratar
            </button>
          </div>

          <div className="plano">
            <h3>Anual</h3>
            <p>R$ 799,90</p>
            <ul>
              <li>Todos os benefícios anteriores</li>
              <li>+ Camiseta exclusiva da academia</li>
            </ul>
            <button className="btn-contratar"onClick={() => contratarPlano('Anual')}>
              Contratar
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>Academia zer0 GYM – &copy; Todos os direitos reservados</p>
        <ul>
        <a href="https://instagram.com/zer0.gym" target="_blank" rel="noopener noreferrer">
        <img src="Instagram_icon.png" alt="Instagram" style={{ width: '24px', height: '24px', marginRight: '8px',fontSize:'20px' }} />@zer0.gym</a>
        <a href="https://wa.me/5565992916556" target="_blank" rel="noopener noreferrer">
        <img src="whatsapp.png" alt="whatsapp" style={{ width: '24px', height: '24px', marginRight: '8px' }} />(65)99291-6556</a>
        </ul>
        <a href="/sobre">Sobre</a>
      </footer>
    </main>
  );
}
