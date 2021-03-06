---
name: Article
menu: Component
---
import "@cdt/css";
import { Playground, Props } from "docz";
import Article from ".";

## \<Article/\>

<Playground>
  <Article
    title="Le licenciement pour motif personnel : qu’est ce qu’un motif personnel ?"
    tags={["licenciement", "tag2"]}
  >
    <p>
      Le licenciement pour motif personnel n’est pas nécessairement fondé sur
      une faute.
    </p>
    <p>
      D’autres motifs (insuffisance professionnelle, absences répétées ou
      prolongées entraînant l’impossibilité de maintenir le contrat de
      travail,…) peuvent être à l’origine d’un licenciement. S’il résulte d’une
      faute, celle-ci peut, selon son importance (simple, grave ou lourde),
      dispenser l’employeur du versement de certaines indemnités.La faute grave
      est celle qui provoque des troubles sérieux ou des pertes pour
      l’entreprise et rend impossible le maintien du salarié dans l’entreprise.
    </p>
    <p>
      Dans ce cas, aucun préavis ni indemnité de licenciement ne sont
      dus.Absences non autorisées, des indiscrétions, certaines fautes
      professionnelles… peuvent, selon les circonstances, constituer une faute
      simple - mais suffisante pour justifier le licenciement - ou une faute
      grave.
    </p>
    <p>
      La faute lourde a toutes les caractéristiques de la faute grave, renforcée
      par l’intention du salarié de nuire à l’employeur ou à l’entreprise (vol,
      détournement de fonds). Jusqu’à l’intervention de la décision du Conseil
      constitutionnel n° 2015-523 QPC du 2 mars 2016 (publiée au Journal
      officiel du 4 mars 2016) citée en référence, elle était également
      privative de l’indemnité de congés payés, ce qui n’est plus le cas compte
      tenu de la déclaration d’inconstitutionnalité de ces dispositions
      prononcée par le Conseil.
    </p>
    <p>
      Cette déclaration d’inconstitutionnalité a pris effet à compter du 4 mars
      2016 (date de la publication de la décision au JO) et peut être invoquée
      dans toutes les instances introduites à cette date et non jugées
      définitivement.
    </p>
    <p>
      Comme le précise le Conseil constitutionnel, le bénéfice de cette
      disposition concerne « les personnes qui, postérieurement à la date de
      publication de la décision, seront licenciées pour faute lourde, de même
      que les personnes qui, licenciées antérieurement à cette date, ont engagé
      une procédure contentieuse non définitivement close à la date de la
      présente décision ou engageront une telle procédure. En revanche, seront
      exclues du bénéfice de la censure toutes les personnes licenciées pour
      faute lourde qui ont engagé une procédure contentieuse close
      définitivement avant la publication de la décision et celles licenciées
      pour faute lourde qui seraient à cette même date hors délai pour
      introduire une requête ».
    </p>
  </Article>
</Playground>

<Props of={Article} />
