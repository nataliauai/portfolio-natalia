import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { Container } from "@/styles/Global";
import { ProjectAreaWrapperColumns, ProjectsAreaSocialMediaMessage } from "@/pages/home/style";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <ProjectTitle
                as="h2"
                type="heading3"
                css={{ marginBottom: "$3" }}
                color="grey4"
              >
                Kenzinho vagas
              </ProjectTitle>

              <Text type="body1" color="grey2">
                Nosso projeto de conclusão do terceiro módulo na Kenzie foi a
                criação de um site completo de vagas, trabalhamos em equipe e
                utilizamos Scrum e ferramentas como Trello e Notion para nos
                auxiliar. Tecnologias: JSON-Server, Styled-Components,
                Bootstrap, TypeScript, Figma, Axios, React, React Hook Form,
                React Router Dom, Toastify, Yup, Vercel
              </Text>
              <ProjectLinks>
                <ProjectLink
                  target="_blank"
                  href={`https://github.com/kenzinho-vagas/kenzinho-vagas`}
                >
                  <FaGithub /> Kenzinho code
                </ProjectLink>
                {
                  <ProjectLink
                    target="_blank"
                    href={`https://kenzinho-vagas-zeta.vercel.app/login`}
                  >
                    <FaShare /> See demo
                  </ProjectLink>
                }
              </ProjectLinks>
              <ProjectTitle
                as="h2"
                type="heading3"
                css={{ marginBottom: "$3" }}
                color="grey4"
              >
                Nu Kenzie
              </ProjectTitle>

              <Text type="body1" color="grey2">
                Projeto que simula uma aplicação de controle de finanças, onde
                você adiciona entradas e saídas do mês, filtro de despesas e
                visualização de saldo mensal. Tecnologias: React, yup, React
                Hook Form, Vercel, Figma, Styled Components, Toastfiy
              </Text>
              <ProjectLinks>
                <ProjectLink
                  target="_blank"
                  href={`https://github.com/kenzinho-vagas/kenzinho-vagas`}
                >
                  <FaGithub /> Nu Kenzie code
                </ProjectLink>
                {
                  <ProjectLink
                    target="_blank"
                    href={`https://react-entrega-s1-nu-kenzie-nataliauai-32.vercel.app/`}
                  >
                    <FaShare /> See demo
                  </ProjectLink>
                }
              </ProjectLinks>
            </ProjectsAreaSocialMediaMessage>
          </ProjectAreaWrapperColumns>
        </Container>
      
    </>
  );
};
