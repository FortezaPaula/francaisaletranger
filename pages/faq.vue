<template>
  <div>
    <section class="no-padding">
      <header>
        <h4>FAQ - Français à l’étranger : Comment réagir face à la crise du Covid-19 ?</h4>
      </header>
    </section>

    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.faq-accordion-1 block href="#" variant="info">
            Qu’est-ce que le Covid-19 et quels en sont les symptômes principaux ?
          </b-button>
        </b-card-header>
        <b-collapse id="faq-accordion-1" visible accordion="faq-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Le virus identifié en janvier 2020 en Chine est un nouveau Coronavirus qui est une grande
              famille de virus, qui provoquent des maladies allant d’un simple rhume (certains virus saisonniers sont
              des Coronavirus) à des pathologies plus sévères comme le MERS-COV ou le SRAS.Depuis le 11 mars 2020, l’OMS
              qualifie la situation mondiale du COVID-19 de pandémie ; c’est-à-dire que l’épidémie est désormais
              mondiale.
            </b-card-text>
            <b-card-text>
              Les symptômes principaux sont la fièvre ou la sensation de fièvre et des signes de difficultés
              respiratoires de type toux ou essoufflement.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.faq-accordion-2 block href="#" variant="info">
            Quels gestes sanitaires pour éviter la transmission du virus ?
          </b-button>
        </b-card-header>
        <b-collapse id="faq-accordion-2" accordion="faq-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Les recommandations sanitaires varient sensiblement en fonction du pays de localisation actuel.
              Le gouvernement français préconise les gestes barrières suivant :
            </b-card-text>
            <b-card-text>
              <ol>
                <li>Se laver les mains très régulièrement</li>
                <li>Tousser ou éternuer dans son coude ou dans un mouchoir</li>
                <li>Saluer sans se serrer la main, éviter les embrassades</li>
                <li>Utiliser des mouchoirs à usage unique et les jeter</li>
                <li>Eviter les rassemblements, limiter les déplacements et les contacts.</li>
              </ol>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.faq-accordion-3 block href="#" variant="info">
            Je suis bloqué à l’étranger après un déplacement temporaire, que faire ?
          </b-button>
        </b-card-header>
        <b-collapse id="faq-accordion-3" accordion="faq-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <ul>
                <li>Inscrivez-vous sur <a href="https://pastel.diplomatie.gouv.fr/fildariane/dyn/public/login.html" target="_blank">l’application Arianne</a>, afin que le centre de crise du Ministère de l’Europe et des affaires étrangères puisse vous localiser, vous contacter en cas de besoin, et vous envoyer des messages d’information.</li>
                <li>Consultez le <a href="https://pastel.diplomatie.gouv.fr/fildariane/dyn/public/login.html" target="_blank">site « conseil aux voyageurs</a>, qui est mis à jour régulièrement:</li>
                <li>Faites-vous connaître auprès du consulat le plus proche, si possible par mail ou téléphone, en indiquant si vous présentez des points de vulnérabilité (problèmes de santé, de logement, enfants…).</li>
                <li>Contacter les compagnies aériennes sur place pour trouver un billet si vous n’en avez pas en votre possession.</li>
                <li>Suivez sur les réseaux sociaux les groupes d’expatriés français dans votre pays ainsi que le pages des ambassades de France. N’hésitez pas à demander aux Français sur place des conseils ou de l’aide. Amis Français de l’étranger, nous comptons sur vous pour vous montrer solidaires de vos compatriotes.</li>
              </ul>
            </b-card-text>
            <b-card-text>
              <b>!</b> Si vous vous sentez en danger ou êtes en situation de vulnérabilité, vous pouvez contacter le numéro du centre de crise et de soutien du Ministère de l’Europe et des affaires étrangères, disponible 7/7, 24/24 au 01 53 59 11 37 ou au 01 53 59 11 00.
              Les consulats mettent également à disposition un numéro d’urgence sur leur site Internet.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.faq-accordion-4 block href="#" variant="info">
            Est-ce que je dois rentrer en France si je suis résident permanent à l’étranger ?
          </b-button>
        </b-card-header>
        <b-collapse id="faq-accordion-4" accordion="faq-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Si vous avez votre résidence habituelle en dehors de l’Europe, il est recommandé, dans les 30 jours à venir, d’éviter autant que possible les déplacements internationaux y compris dans le cadre d’un retour sur le territoire national à moins que des raisons impératives ne vous y contraignent.
            </b-card-text>
            <b-card-text>
              Dans le cas où votre résidence se situe dans l’espace européen mais en dehors de la France, il est conseillé d’éviter des déplacements intra-européens, même pour revenir sur le territoire national, à moins que des raisons impératives ne vous y contraignent. Si plusieurs frontières terrestres devaient être franchies pour regagner la France, des retours directs par voie aérienne devraient, dans la mesure du possible, être privilégiés.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.faq-accordion-5 block href="#" variant="info">
            Vais-je trouver un billet d’avion à un prix abordable ?
          </b-button>
        </b-card-header>
        <b-collapse id="faq-accordion-5" accordion="faq-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Le gouvernement travaille  avec les compagnies aériennes à travers le monde pour organiser un mécanisme global permettant le retour des Français à l’étranger notamment avec des tarifications maîtrisées et accessibles à nos compatriotes. En revanche, il n’y aura pas de remboursement de voyage par l’Etat qui ne peut intervenir dans la relation contractuelle vous liant avec votre compagnie de transport ou voyagiste.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.faq-accordion-6 block href="#" variant="info">
            Je n’arrive pas à joindre l’Ambassade ou le consulat sur place ?
          </b-button>
        </b-card-header>
        <b-collapse id="faq-accordion-6" accordion="faq-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Les ambassades et consulats reçoivent de très nombreux appels y compris lorsqu’ils travaillent 24h/24. Il faut renouveler son appel. Vous trouverez également un grand nombre d’information sur le site du <a href="https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/actualites-du-ministere/informations-coronavirus-covid-19/" target="_blank">ministères des Affaires étrangères</a>.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>
