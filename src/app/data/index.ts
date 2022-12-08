import imageArticle0 from "../../assets/images/rights.jpg"
import imageArticle1 from "../../assets/images/rights1.jpg"
import imageArticle2 from "../../assets/images/rights2.jpg"

export interface IArticle {
  title: string
  description: string
  content: string
  image: string
  authors: string[]
  status: string
  active: boolean
  publication: string
}

export const articleMain: IArticle =
  {
    title: "Violação dos Direitos dos Venezuelanos no Brasil",
    description: "Por conta do autoritarismo de Nicolás Maduro, milhares de venezuelanos migram em busca de melhores condições de vida.",
    image: "",
    content: '<p>Após a morte do Presidente da Venezuela, Hugo Chaves, o seu vice, Nicolás Maduro assume o poder em 2012, onde por sua vez, não possuía o carisma do seu antecessor, tendo uma grande rejeição do seu povo e por conta do seu autoritarismo, recebeu várias sanções de outros países, gerando a maior crise de sua história fazendo com que milhares de venezuelanos migrem em busca de melhores condições, pois alegam uma grande falta de alimento e escassez de energia.<p></p>Atualmente, a Venezuela enfrenta uma grave crise humanitária, pois parte considerável de sua população sofre com a falta de alimentos, o que a força a ter que se refugiar em países vizinhos. O país segue em crise, a tensão maior é por uma possível intervenção dos Estados Unidos, visto por muitos como uma forma dos americanos de se apropriarem das reservas petrolíferas, o Brasil apesar da oposição segue com uma postura de não intervenção. A situação da Venezuela ainda é indefinida, e muito provavelmente só uma mudança democrática no governo seria a solução para acabar com a crise do país.</p>',
    authors: ["Thauana Ribeiro"],
    status: "destaque",
    active: true,
    publication: "08 de dezembro de 2022"
  }

export const articles: IArticle[] = [
  {
    title: "Violação dos Direitos dos Venezuelanos no Brasil",
    description: "Após a morte do Presidente da Venezuela, Hugo Chaves, o seu vice, Nicolás Maduro assume o poder em 2012, onde por sua vez, não possuía o carisma do seu antecessor, tendo uma grande rejeição do seu povo e por conta do seu autoritarismo, recebeu várias sanções de outros países, gerando a maior crise de sua história fazendo com que milhares de venezuelanos migrem em busca de melhores condições, pois alegam uma grande falta de alimento e escassez de energia.",
    image: `${imageArticle1}`,
    content: '<p>Após a morte do Presidente da Venezuela, Hugo Chaves, o seu vice, Nicolás Maduro assume o poder em 2012, onde por sua vez, não possuía o carisma do seu antecessor, tendo uma grande rejeição do seu povo e por conta do seu autoritarismo, recebeu várias sanções de outros países, gerando a maior crise de sua história fazendo com que milhares de venezuelanos migrem em busca de melhores condições, pois alegam uma grande falta de alimento e escassez de energia.<p></p>Atualmente, a Venezuela enfrenta uma grave crise humanitária, pois parte considerável de sua população sofre com a falta de alimentos, o que a força a ter que se refugiar em países vizinhos. O país segue em crise, a tensão maior é por uma possível intervenção dos Estados Unidos, visto por muitos como uma forma dos americanos de se apropriarem das reservas petrolíferas, o Brasil apesar da oposição segue com uma postura de não intervenção. A situação da Venezuela ainda é indefinida, e muito provavelmente só uma mudança democrática no governo seria a solução para acabar com a crise do país.</p>',
    authors: ["Thauana Ribeiro"],
    status: "destaque",
    active: true,
    publication: "03 de dezembro de 2022"
  },
  {
    title: "Individualidade, preconceito e julgamentos: A dificuldade da ressocialização de um ex-presidiário",
    description: "Ao se tratar das dificuldades da ressocialização de um ex-detento, é importante analisar o ambiente no qual ele cresceu, viveu e se tornou cidadão.",
    image: `${imageArticle2}`,
    content: '<p>Ao se tratar das dificuldades da ressocialização de um ex-detento, é importante analisar o ambiente no qual ele cresceu, viveu e se tornou cidadão. Em uma comunidade fundamentada pela disparidade social e pela segregação econômica das classes de menor poder aquisitivo, advindas dos infortúnios coloniais, é evidente a dificuldade de readaptação desse sujeito. Dessa forma, conclui-se que o preconceito enraizado, derivado de uma herança histórica, se torna um fator influente no que tange a persistência da reincidência criminal.</p><p>Anos após a independência, passando pelo período imperial, das várias Repúblicas, até os dias atuais, levanta-se o seguinte questionamento: o Estado é, de fato, o maior responsável pela elevada taxa de marginalização da população brasileira? Em resposta a essas indagações, dados coletados pelo sistema do Instituto Brasileiro de Geografia e Estatística, (IBGE), no ano de 2020, destacam a desigualdade social por cor ou raça no Brasil, demonstrando que as etnias mais atingidas nesse aspecto são pretos e pardos, esclarecendo o porquê muitas pessoas entrando no mundo do crime. Desse modo, é notória a inércia estatal no que se refere a diferença de tratamento social por classe e etnia, conforme histórico brasileiro enraizado, que enfatiza o privilégio branco em detrimento das demais raças, observado nos primórdios coloniais.</p><p>A Realidade social brasileira demonstra a falha na garantia dos direitos fundamentais impostos constitucionalmente, de modo a observar a falta de educação pública de qualidade, de saúde e do mínimo existencial. Dessa forma, entende-se que o cidadão que não possui recursos suficientes para manter sua própria subsistência, acaba sucumbindo ao mundo do crime, que desperta "oportunidades" de vida jamais imaginadas para aquele que não tem o mínimo para sobreviver. Em razão disso, para punir aqueles que cometeram atitudes delituosas, o Estado busca efetivar a justiça atribuindo a devida penalidade para aquele que, inconscientemente ou não, foi vítima de sua própria incoerência, posto em condição criminosa por consequência de um Estado omisso.</p><p>Após cumprimento da pena, saindo do sistema prisional, o sujeito deveria dar início ao processo de ressocialização previsto na legislação brasileira. Contudo, há um processo ainda mais complicado de aceitação social, devido ao estigma de ser ex-presidiário. Além da incompetência governamental em relação ao sistema de ressocialização, o contexto familiar é um fator a ser acrescentado para a persistência dessa problemática, pois, sem o mínimo vital para a formação de um caráter de cidadão, o elemento acaba por se tornar o reflexo e erro dos pais, e escravo das suas necessidades, produzindo consequências negativas e drásticas de caráter. Logo, o sistema punitivo brasileiro deve se atentar não apenas a questão da penalidade, mas também na reintrodução do réu em sociedade, tema esse, inclusive, que nos leva a discorrer minuciosamente um impasse persistente, já invocado de maneira breve neste artigo: o preconceito gerado pelo estigma de ser ex-presidiário.</p> <p>Diante de tal paradigma, a palavra "preconceito", etimologicamente falando, é composta a partir de derivados de PRE, “antes”, e CONCEPTUS, “resumo”, do Latim – inicialmente algo preparado ou concebido, de (CONCIPERE), ou seja, o binômio significa uma opinião formada precipitadamente, sem maior ponderação, um conceito formado antes de se ter os conhecimentos necessários. O artigo 10 da Lei de Execução Penal dispõe sobre a assistência ao preso e ao interno como dever do Estado, objetivando prevenir o crime e orientar o retorno à convivência em sociedade, estendendo-se esta ao egresso. No entanto, a ressocialização de um ex-detento se torna difícil a cada dia, apontando as mídias digitais como fato gerador direto da dificuldade de reintegração, tendo em vista que, quando a imagem dessas pessoas vai parar nas redes sociais, ou nas emissoras, é aclarado que, independentemente de absolvição ou de condenação, este terá a imagem manchada pelo resto de sua vida.</p><p>À vista disso, o Estado tem obrigação de fornecer a assistência necessária para orientar os recém libertos ao retorno na sociedade, com o intuito de diminuir o risco de reincidência desse cidadão, objetivando o fortalecimento dos laços de apoio para que sua inserção na comunidade ocorra, mesmo diante do "natural" receio da coletividade em aceitar uma pessoa que acaba de cumprir pena.</p>',
    authors: ["Bianca Costa", "João Queiroz", "Maria Gleiciane", "Mônica Pereira", "Raissa Praxedes"],
    status: "normal",
    active: true,
    publication: "30 de novembro de 2022"
  }
]