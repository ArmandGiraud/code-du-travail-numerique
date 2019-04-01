---
name: Section
menu: Component
---
import "@cdt/css";
import { Playground, PropsTable } from "docz";
import Section from ".";

## \<Section/\>

<Playground>
  <Section light>
    <h2>
      Quelles sont les obligations de l'employeur en matière de congés payés ?
    </h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </Section>
  <Section dark>
    <h2>
      Une période de chômage permet-elle de valider des trimestres de retraite ?
    </h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </Section>
</Playground>

<PropsTable of={Section} />