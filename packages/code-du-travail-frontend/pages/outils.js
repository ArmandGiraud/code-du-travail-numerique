import React from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import { Container, Alert } from "@cdt/ui";

import SeeAlso from "../src/common/SeeAlso";
import Search from "../src/search/Search";
import CalculateurIndemnite from "../src/outils/indemniteLicenciement";
import { PageLayout } from "../src/layout/PageLayout";
import { SimulateurEmbauche } from "../src/outils/simulateur-emauche";

const BigError = ({ children }) => (
  <Container style={{ fontSize: "2em", textAlign: "center", margin: "20%" }}>
    <Alert warning>{children}</Alert>
  </Container>
);

const OutilIntrouvable = () => <BigError>Cet outil est introuvable</BigError>;

const Source = ({ name }) => (
  <div
    style={{
      background: "var(--color-light-background)",
      padding: 10,
      marginTop: 50,
      textAlign: "center"
    }}
  >
    {name}
  </div>
);

const getOutilFromCode = function(code) {
  switch (code) {
    case "indemnite-licenciement":
      return {
        title: "Calculer une indemnité de licenciement",
        outil: CalculateurIndemnite
      };
    case "simulateur-embauche":
      return {
        title: "Simalateur d'embauche",
        outil: SimulateurEmbauche
      };
    default:
      return {
        title: "Outil introuvable",
        outil: OutilIntrouvable
      };
  }
};

class Outils extends React.Component {
  static async getInitialProps({ query }) {
    // we don't request data from api since outils are client side only
    return { data: { _source: { slug: query.slug } } };
  }
  render() {
    const { data, router } = this.props;
    const { outil: Outil, title } = getOutilFromCode(data._source.slug);
    return (
      <PageLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <Search />
        <Outil q={router.query.q} />
        <Source name="-" />
        <SeeAlso />
      </PageLayout>
    );
  }
}

export default withRouter(Outils);
