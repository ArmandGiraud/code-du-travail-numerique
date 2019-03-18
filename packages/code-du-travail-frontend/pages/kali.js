import React from "react";
import { withRouter } from "next/router";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { Button } from "@cdt/ui";
import { ExternalLink } from "react-feather";
import Answer from "../src/common/Answer";
import ArticleIcon from "../src/icons/ArticleIcon";
import { PageLayout } from "../src/layout/PageLayout";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

// const KALI_API_URL = "https://api.kali.num.social.gouv.fr";
const KALI_API_URL = "http://localhost:3005";

const fetchKali = ({ slug }) =>
  fetch(`${API_URL}/items/kali/${slug}`).then(r => r.json());

const fetchConventionStructure = ({ id }) => {
  const url = `${KALI_API_URL}/v1/base/KALI/conteneur/${id}/structure?includeArticles=true`;
  return fetch(url).then(r => r.json());
};

const fetchArticle = ({ id }) =>
  fetch(`${KALI_API_URL}/v1/base/KALI/article/${id}`).then(r => r.json());

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, data: null };
  }

  async componentDidMount() {
    const { id } = this.props;
    const article = await fetchArticle({ id });
    this.setState({ data: article.data, loaded: true });
  }

  render() {
    const { loaded, data } = this.state;
    return (
      <div>
        {!loaded && "loading..."}
        {loaded && (
          <div dangerouslySetInnerHTML={{ __html: data.bloc_textuel }} />
        )}
      </div>
    );
  }
}

const Calipso = ({ calipso }) => (
  <div
    key={calipso}
    style={{
      display: "inline-block",
      backgroundColor: "rgb(0, 83, 179)",
      color: "#fff",
      borderRadius: "2px",
      margin: "2px",
      fontSize: "0.8rem",
      padding: "2px 10px"
    }}
  >
    {calipso}
  </div>
);

class SummaryItem extends React.Component {
  constructor(props) {
    super(props);
    const { type, level, maxLevel } = props;
    this.state = {
      expanded: type !== "article" && level <= maxLevel ? true : false
    };
  }

  toggleExpanded() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { type, children, id, titre, calipsos, level, maxLevel } = this.props;
    const { expanded } = this.state;
    const borderColor = 0 + level * 50;
    let style = {};
    if (level > 0) {
      style = {
        marginLeft: `5px`,
        paddingLeft: `10px`,
        borderLeft: `1px solid rgba(${borderColor}, ${borderColor}, ${borderColor}, 1)`
      };
    }
    return (
      <div style={style}>
        <a
          onClick={() => this.toggleExpanded()}
          onKeyUp={() => this.toggleExpanded()}
          role="button"
          tabIndex={0}
          style={{
            color: "black",
            textDecoration: "none",
            cursor: "pointer"
          }}
        >
          {expanded && <span>-&nbsp;</span>}
          {!expanded && <span>+&nbsp;</span>}
          {titre}
        </a>
        {calipsos &&
          calipsos
            .split(",")
            .map(calipso => <Calipso calipso={calipso} key={calipso} />)}
        {expanded && type == "article" && <Article id={id} />}
        {expanded &&
          children &&
          children.map(c => (
            <SummaryItem
              key={c.id}
              level={level + 1}
              maxLevel={maxLevel}
              {...c}
            />
          ))}
      </div>
    );
  }
}

class Kali extends React.Component {
  constructor(props) {
    super(props);
    this.state = { structure: null };
  }

  static async getInitialProps({ query }) {
    const data = await fetchKali(query);
    const structure = await fetchConventionStructure({
      id: data._source.id
    });
    return { data, structure };
  }

  render() {
    const { data, structure } = this.props;
    const calipsos = [
      "CHAMP_APPLICATION",
      "PERIODE_ESSAI",
      "PREAVIS",
      "INDEMNITES_LICENCIEMENT",
      "SALAIRES",
      "CONGES_EXCEPTIONNELS"
    ];
    if (data.status === 404) {
      return (
        <Answer emptyMessage="Cette convention collective n'a pas été trouvée" />
      );
    }
    return (
      <PageLayout>
        <Answer
          title={data._source.title}
          emptyMessage="Cette convention collective n'a pas été trouvée"
          footer="Informations fournies par la DILA"
          sourceType="Convention collective"
          icon={ArticleIcon}
        >
          <div style={{ margin: "20px 0" }}>
            Filtrer les articles de la convention :
            {calipsos.map(c => (
              <Calipso key={c} calipso={c} />
            ))}
          </div>
          <hr />
          <SummaryItem {...structure} level={0} maxLevel={3} />
          <p>
            Cliquez sur le lien ci dessous pour accéder à la convention
            collective sur LegiFrance :
          </p>
          <a target="_blank" rel="noopener noreferrer" href={data._source.url}>
            <Button primary>
              <ExternalLink
                style={{ verticalAlign: "middle", marginRight: 10 }}
              />
              Contenu intégral de la convention sur Legifrance
            </Button>{" "}
          </a>
        </Answer>
      </PageLayout>
    );
  }
}

export default withRouter(Kali);
