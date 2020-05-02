import React from "react";

import SearchBar from "../../Components/SearchBar";
import Card, { JobCard } from "./Card";

import { useGlobalState } from "../../Redux/reducers/state";

import Language from "../../Constants/Language";

import style from "./style.module.scss";

const Jobs: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].jobs;

  const cards: Array<JobCard> = [
    {
      text: `Lar fizesse tornava nao pagasse entendo. Tu romancista no ii interrogou realisacao verdadeira auxiliarem. Barreiras pae tormentos linguagem trabalhar perverter mas vez. Dou encanto valvula sumindo paz haveres esqueca feicoes. Pau faze boas pois arma has veu bem alto. Volveu teu outras lucrar sou nas ate. Mo no lh juro la voce dira suor. Va avancado horrores ao resoluto ah. Ver dirigem sou matarem parecia replica revolta.

      Dragaovos commocoes abandonar descambou se da. Te habitava so ah rodeados mettidas. Queira oh miguel crueis mo voltou de ja. Continuou simulacao assentava ve assumptos as deixassem. De momento entrega fortuna compete justica ha. Dize nos que mata fino nao tens mau esta. Repellir tu naturaes pe escuteis adoravel entramos. So sr aqui na popa toda cuja ecco fico.

      Meu for sem coberto vez covilha dizendo relogio possuir. Ver morto chama sao raiva temos vicio sim. Le cavallos no obedecer apartado ja arranjar esqueceu. Personagem atormentar distinguir semelhavam escravisar do do realisacao. Es os mariola altivez arrasta pe querera. Era acabar tao luctas hirtos horror veo recuar sei. Religiao la so admissao ar disposto designio completo caracter um. Pronunciar levantaram tao obedeceres valdevinos nem encontrava rir caexplicou.

      Paedisse desvario virtuosa se eu explicou. Adeus ve susto lavar no oh. As oh abysmo alumno notado ve voltar recebi ha. Radiante meu tom confusao portanto mas mim corticas. Mellonao ouvireis murmurou admittia riu has terrivel. Condicao trabalho ha fallemos indicada ja transpol de la lamurias. Vocedisse invalidos hypotheca me os mo economico conquista decidiste.

      Desprezo portanto maneiras das bem malandro sua procural sagradoa. Quer do maos vale eu as um suas novo ouco. Dar justos por seguro minhas odiosa decide porque. Dar igual aba mudos vol barba que fazes. Principiou adivinhado tu hesitacoes eu igualmente um. Ha teimoso preciso ha rosnova. Haja vou teu noto amas tens dize ide. Minima dir nao sua sou firmar patria ameaca metade chamma. Liberdade habituado conservar fim vou paciencia mao.

      Reclamo lagrima casacos va pe so. Litigantes agoradisse do em la pe abundancia. Dize veo unha cha deus nao. Belchiore ha estendida sacerdote dissesses ma. Velar capuz ouves sei menos treva fim risca. Avancando furibundo tormentos ha descrever os contentam oh. Ah pelo iv caco seja tu. Mao romper provas fallar luctas pae busque amavam.

      Admittido estendida ao sympathia commissao no la. Iv caloteiros um pronunciar no as vivacidade. Adivinhado ve os ja auxiliarem tu associacao. As oppostas eu te em garganta pelintra. Exigencia em affeicoas em liberrimo ensinando captivava. Olhosdisse secretaria que voz nem importunal nos permanente encolhendo. Beber dizer beira viu hia lia foi. Realise ler vae noticia nao proprio estamos partido importa nao. Mal sabio naipe mundo cuida ate capuz tem nao.

      Grosseira ia catadupas no desculpal ah. Isto peor fico caro juro ama dor viva. Ah proferiste gravemente eu companhias la apparecido lh. Louca gotas cre damos tenue tocou julgo dou. Atormentar as chimericas proferiste es sympathias sorridente va. Proseguiu ao os vilissima soffridos oh um lamentava expremido commovida. Carregado fez rapaselho pretendes apparecer for habituara soubesses meu nas. Postaspelo um papeismais na se habituarem. Vaga eu quiz tu caro hade hora. Ha soubesses entretido escrupulo confianca ha.

      Ja te na perfilhei ha distincta sociedade soffresse principal. Despenhava divagacoes os repelliria delicadeza ii. As le completado persuadido concederam ao ou nobilitado. Theoria pareceu ou fazerem em creados perigos de ao. Has obstante ido dobrando apparece dourados. Combater proprias vez arrecear bem exemplos fui chamavam vendados. Cre galanteios servilheta personagem jesuiticas meu bem sacrificam. Esvaecida mas contentam asperrima sei dar abandonar.

      Empatar creados acceito queriam emphase sae com fiz. Sombrios sciencia confusao ia as. Cinco has salvo frias iraou vende custa com. Penosos enormes enganou foi has sao humilde. Nao embora ordens tornou sim gostam. Fel nos olhe cujo isto ella caiu. Convencoes mao fallaremos sacrificam respectivo competente poe. Me qual ah ha es viva move.

      `,
      medals: ["star", "crown"],
      skills: ["php", "javascript", "nodejs", "star"]
    },
    {
      text: `dagsdjhagdajhdgdsaadjhads asdadhgajhdgadas
      dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads adsad ada dasddsa
      ads aasd ads adad asdad ads dagsdjhagdajhdgdsaadjhadsdadad as
      dagsdjhagdajhdgdsaadjhadsdadsadagsdjhagdajhdgdsaadjhads
      asdadhgajhdgadas dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads
      adsad ada dasddsa ads aasd ads adad asdad ads
      dagsdjhagdajhdgdsaadjhadsdadad as
      dagsdjhagdajhdgdsaadjhadsdadsadagsdjhagdajhdgdsaadjhads
      asdadhgajhdgadas dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads
      adsad ada dasddsa ads aasd ads adad asdad ads
      dagsdjhagdajhdgdsaadjhadsdadad as dagsdjhagdajhdgdsaadjhadsdadsa`,
      medals: ["star", "crown", "dollar-sign"],
      skills: ["php", "javascript", "star", "star"]
    },
    {
      text: `dagsdjhagdajhdgdsaadjhads asdadhgajhdgadas
      dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads adsad ada dasddsa
      ads aasd ads adad asdad ads dagsdjhagdajhdgdsaadjhadsdadad as
      dagsdjhagdajhdgdsaadjhadsdadsadagsdjhagdajhdgdsaadjhads
      asdadhgajhdgadas dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads
      adsad ada dasddsa ads aasd ads adad asdad ads
      dagsdjhagdajhdgdsaadjhadsdadad as
      dagsdjhagdajhdgdsaadjhadsdadsadagsdjhagdajhdgdsaadjhads
      asdadhgajhdgadas dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads
      adsad ada dasddsa ads aasd ads adad asdad ads
      dagsdjhagdajhdgdsaadjhadsdadad as dagsdjhagdajhdgdsaadjhadsdadsa`,
      medals: ["star", "crown", "dollar-sign", "star"],
      skills: ["php", "javascript", "star", "star"]
    },
    {
      text: `dagsdjhagdajhdgdsaadjhads asdadhgajhdgadas
      dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads adsad ada dasddsa
      ads aasd ads adad asdad ads dagsdjhagdajhdgdsaadjhadsdadad as
      dagsdjhagdajhdgdsaadjhadsdadsadagsdjhagdajhdgdsaadjhads
      asdadhgajhdgadas dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads
      adsad ada dasddsa ads aasd ads adad asdad ads
      dagsdjhagdajhdgdsaadjhadsdadad as
      dagsdjhagdajhdgdsaadjhadsdadsadagsdjhagdajhdgdsaadjhads
      asdadhgajhdgadas dagsdjhagdajhdgdsaadjhadsdaasdasd ada dadasd asads
      adsad ada dasddsa ads aasd ads adad asdad ads
      dagsdjhagdajhdgdsaadjhadsdadad as dagsdjhagdajhdgdsaadjhadsdadsa`,
      medals: ["star", "crown", "dollar-sign", "star", "star"],
      skills: ["php", "javascript", "star", "star"]
    }
  ];

  return (
    <div className={style["container"]}>
      <SearchBar placeholder={lang.searchBar}>
        <div className={style["filters"]}></div>
      </SearchBar>
      <div className={style["cards"]}>
        {cards.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            medals={card.medals}
            skills={card.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
