<template>
  <b-container class="conditions">
    <BackToHome />
    <h5>Définitions</h5>
    <p>
      Les termes utilisés ont la définition suivante :
    </p>
    <ul>
      <li>
        Le Site : désigne le site internet accessible à l'adresse URL de la présente politique ;
      </li>
      <li>
        L'éditeur : désigne l'organisation responsable du Site, telle que définie dans les Mentions Légales accessibles
        sur le Site ;
      </li>
      <li>
        Visiteur : désigne toute personne qui navigue et utilise le Site ;
      </li>
      <li>
        « Conditions Générales d’Utilisation » et « CGU » : termes désignant les présentes, y incluant la Politique de
        Protection des données accessible sur le Site.
      </li>
    </ul>
    <h5>Objet</h5>
    <p>
      Les présentes Conditions Générales d’Utilisation (ci-après « les CGU ») déterminent les règles d’accès, les
      modalités d’utilisation des services du Site, ainsi que les droits et responsabilités applicables à tout Visiteur
      du
      Site. Les CGU sont librement accessibles et consultables par toute personne naviguant/utilisant le Site.

      Les CGU doivent être acceptées sans réserve et dans leur intégralité par toute personne souhaitant accéder,
      naviguer
      et utiliser le Site.
    </p>
    <br>
    <h5>Description des services fournis</h5>
    <p>
      Le Site a pour objet de mettre en relation des personnes à des visées d'entraide à destination des français
      résidant
      ou voyageant hors des frontières nationales.
    </p>
    <br>
    <h5>Accès au service</h5>
    <p>
      Le Site est normalement accessible à tout moment aux utilisateurs.
    </p>
    <br>
    <h5>Limitations de responsabilité</h5>
    <p>
      L'éditeur s’efforce de fournir sur le Site des informations aussi précises que possible. Toutefois, il ne pourra
      être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de
      son
      fait ou du fait des tiers partenaires qui lui fournissent ces informations.

      Toutes les informations indiquées sur le Site sont données à titre indicatif, et sont susceptibles d’évoluer. Par
      ailleurs, les renseignements figurant sur le Site ne sont pas exhaustifs. Ils sont donnés sous réserve de
      modifications ayant été apportées depuis leur mise en ligne.

      L'éditeur est un tiers aux correspondances et relations entre les Demandeurs et les Volontaires, et exclut de ce
      fait toute responsabilité à cet égard.

      L'éditeur ne saurait en aucun cas être tenue responsable des conséquences liées à la mise en relations des
      personnes
      mises en relation par l’intermédiaire du Site.

      Les Demandeurs et Volontaires sont seuls responsables des discussions et entraides réalisées et de leurs
      conséquences.
    </p>
    <br>
    <h5>Respect des personnes</h5>
    <p>
      Dans la mesure ou des espaces interactifs pourraient être mis à la disposition des utilisateurs, le directeur de
      publication se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace
      qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la
      protection
      des données.

      Le cas échéant, le directeur de publication se réserve également la possibilité de mettre en cause la
      responsabilité
      civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou
      pornographique, quel que soit le support utilisé (texte, photographie, vidéo, …).
    </p>
    <br>
    <h5>Modification des CGU</h5>
    <p>
      L'éditeur se réserve le droit d’apporter tout changement et corrections/évolutions aux présentes CGU. Les
      nouvelles
      CGU annuleront et remplaceront toutes les Conditions Générales d’Utilisation antérieures.
    </p>
    <br>
    <h5>Loi applicable</h5>
    <p>Les présentes CGU sont régies par le droit français.</p>
    <br>
  </b-container>
</template>

<script>
  import BackToHome from '../components/BackToHome'

  export default {
    name: 'ConditionsDUtilisation',
    components: { BackToHome }
  }
</script>

<style scoped>
  .conditions {
    max-width: 1000px;
    margin: auto;
  }
</style>
