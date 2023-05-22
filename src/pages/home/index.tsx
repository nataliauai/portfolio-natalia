// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{" "}
              <Text as="span" type="heading1" color="brand1">
                love
              </Text>{" "}
              creating and{" "}
              <Text as="span" type="heading1" color="brand1">
                developing
              </Text>{" "}
              projects
            </Text>
            <Text type="body1" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="about-me">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h1" type="heading2" color="grey4">
                Sobre mim
              </Text>
              <Text as="p" type="heading5" color="grey2">
                Amante de tecnologia e finalizando o curso de Desenvolvimento
                FullStack na Kenzie Academy. Neste curso adquiri experiência em
                desenvolvimento com diversas linguagens de programação como
                Javascript, React, HTML, CSS, Node Js, Github, Express,
                TypeScript, Banco de dados SQL, PostgreSQL, Python, Django, API
                Rest, componentização, uso de bibliotecas, consumo de APIs, na
                Kenzie Academy toda semana fazemos projetos individuais e em
                grupo e praticamos muito. Vivência com Metodologias Ágeis como
                Scrum que utilizamos no projeto final de grupo, o que nos ajudou
                muito a finalizar nosso projeto até mesmo antes da data,
                aprendemos como organizar e finalizar um projeto, e também
                organização de código e clean code. Possuo Inglês Intermediário,
                já trabalhei com atendimento ao público em inglês. Foi
                extremamente desafiador iniciar uma carreira do zero mas todas
                as dificuldades só me fizeram enxergar do quanto sou capaz de
                aprender coisas novas diariamente e o quanto é estimulante
                vencer novos desafios.
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent></ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h1" type="heading2" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
