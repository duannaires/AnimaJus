interface AboutScreenProps {
  pageTitle: string;
}

export function AboutScreen({ pageTitle }: AboutScreenProps) {
  return (
    <div className="container">
      <div className='d-flex flex-column'>
        <h1 className="mt-4 aj-text-red">{ pageTitle }</h1>
        <p>A ÂnimaJus é uma revista acadêmica que surge como pré-requisito avaliativo e produto final da Unidade Curricular Teoria Geral do Direito, da Universidade Potiguar.</p>

        <p>Com o intuito de fomentar a pesquisa e o pensamento crítico dos alunos do Primeiro ano do curso Direito, foi sugerido que eles pesquisassem e escrevessem um artigo informativo que retratasse alguma violação de direitos, para que pudesse ser publicado na revista, que eles mesmo criariam.</p>
        
        <p>Foi percebendo a necessidade dos acadêmicos do curso de Direito de se ter um veículo de informação, no qual os alunos pudessem não só aperfeiçoar o contato com a escrita, como também um canal onde conseguissem se expressar e promover um debate de temas tão complexos e necessários que são discutidos em sala, que ÂnimaJus aponta e promete trazer inovação nas relações e socializações da vida acadêmica.</p>

        <p>Completamente construída, elaborada e mantida pelos acadêmicos do primeiro ano do Curso de Direito, a ÂnimaJus dá o primeiro passo e caminha para o seu aperfeiçoamento, com intuito de semestralmente, trazer inovações e adequações necessárias. Colocamos ao seu dispor, um canal de informação, entretenimento, conhecimento e muita arte. Seja bem vindo(a) e pode entrar, a casa é sua.</p>

      </div>
    </div>
  )
}