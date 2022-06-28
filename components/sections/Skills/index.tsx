import Section from '@/components/Section';
import { Ansible } from '@/components/skills/ansible';
import { Apollo } from '@/components/skills/apollo';
import { Aws } from '@/components/skills/aws';
import { Css3 } from '@/components/skills/css3';
import { Docker } from '@/components/skills/docker';
import { ESLint } from '@/components/skills/eslint';
import { EtherJS } from '@/components/skills/etherjs';
import { Firebase } from '@/components/skills/firebase';
import { Git } from '@/components/skills/git';
import { GoLang } from '@/components/skills/golang';
import { Graphql } from '@/components/skills/graphql';
import { Hardhat } from '@/components/skills/hardhat';
import { Html5 } from '@/components/skills/html5';
import { Jest } from '@/components/skills/jest';
import { Kubernetes } from '@/components/skills/kubernetes';
import { Lighthouse } from '@/components/skills/lighthouse';
import { LoadBalancer } from '@/components/skills/load-balancer';
import { NestJS } from '@/components/skills/nestjs';
import { NextJS } from '@/components/skills/nextjs';
import { Postgres } from '@/components/skills/postgres';
import { Prettier } from '@/components/skills/prettier';
import { Rancher } from '@/components/skills/rancher';
import { ReactIcon } from '@/components/skills/react';
import { Redux } from '@/components/skills/redux';
import { Rollup } from '@/components/skills/rollup';
import { Solidity } from '@/components/skills/solidity';
import { SolidJS } from '@/components/skills/solidjs';
import { Storybook } from '@/components/skills/storybook';
import { SystemDesign } from '@/components/skills/system-design';
import { Tailwind } from '@/components/skills/tailwind';
import { Turborepo } from '@/components/skills/turborepo';
import { Typescript } from '@/components/skills/typescript';
import { Vite } from '@/components/skills/vite';
import { VSCode } from '@/components/skills/vscode';
import { Vue } from '@/components/skills/vue';
import { WebVitals } from '@/components/skills/web-vitals';
import { Webpack } from '@/components/skills/webpack';
import { Yarn } from '@/components/skills/yarn';
import Skill from './SkillItem';

const SkillSet: React.FC = () => {
  return (
    <Section id="skill" intro="check out my" title="skills">
      <article className="rounded-3xl md:bg-white md:p-12 dark:md:bg-slate-800">
        <h2 className="pb-4">Development</h2>
        <div className="grid grid-cols-96px gap-4">
          <Skill name="Typescript">
            <Typescript />
          </Skill>
          <Skill name="React/RN">
            <ReactIcon />
          </Skill>
          <Skill name="Vue">
            <Vue />
          </Skill>
          <Skill name="SolidJS">
            <SolidJS />
          </Skill>
          <Skill name="Tailwind">
            <Tailwind />
          </Skill>
          <Skill name="GraphQL">
            <Graphql />
          </Skill>
          <Skill name="NextJS">
            <NextJS />
          </Skill>
          <Skill name="Redux">
            <Redux />
          </Skill>
          <Skill name="Apollo">
            <Apollo />
          </Skill>
          <Skill name="NestJS">
            <NestJS />
          </Skill>
          <Skill name="Go">
            <GoLang />
          </Skill>
          <Skill name="Solidity">
            <Solidity />
          </Skill>
          <Skill name="PostgreSQL">
            <Postgres />
          </Skill>
          <Skill name="EtherJS">
            <EtherJS />
          </Skill>
          <Skill name="HTML">
            <Html5 />
          </Skill>
          <Skill name="CSS">
            <Css3 />
          </Skill>
        </div>

        <h2 className="py-4 font-semibold">Tools and Framework</h2>
        <div className="grid grid-cols-96px gap-4">
          <Skill>
            <Turborepo />
          </Skill>
          <Skill name="Vite">
            <Vite />
          </Skill>
          <Skill name="Jest">
            <Jest />
          </Skill>
          <Skill name="Storybook">
            <Storybook />
          </Skill>
          <Skill name="VSCode">
            <VSCode />
          </Skill>
          <Skill name="Webpack">
            <Webpack />
          </Skill>
          <Skill name="Rollup">
            <Rollup />
          </Skill>
          <Skill name="ESLint">
            <ESLint />
          </Skill>
          <Skill name="Prettier">
            <Prettier />
          </Skill>
          <Skill name="Yarn">
            <Yarn />
          </Skill>
          <Skill name="Hardhat">
            <Hardhat />
          </Skill>
          <Skill name="Web Vitals">
            <WebVitals />
          </Skill>
          <Skill name="Lighthouse">
            <Lighthouse />
          </Skill>
          <Skill name="Git">
            <Git />
          </Skill>
        </div>

        <h2 className="py-4 font-semibold">DevOps</h2>
        <div className="grid grid-cols-96px gap-4">
          <Skill name="AWS">
            <Aws />
          </Skill>
          <Skill name="Firebase">
            <Firebase />
          </Skill>
          <Skill name="Docker">
            <Docker />
          </Skill>
          <Skill name="Kubernetes">
            <Kubernetes />
          </Skill>
          <Skill name="Rancher">
            <Rancher />
          </Skill>
          <Skill name="Ansible">
            <Ansible />
          </Skill>
        </div>
        <h2 className="py-4 font-semibold">Architecture</h2>
        <div className="grid grid-cols-96px gap-4">
          <Skill name="Microservices">
            <Aws />
          </Skill>
          <Skill name="System Design">
            <SystemDesign />
          </Skill>
          <Skill name="HA">
            <LoadBalancer />
          </Skill>
        </div>
      </article>
    </Section>
  );
};

export default SkillSet;
