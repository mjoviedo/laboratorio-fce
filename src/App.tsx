/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LinesAndAxes } from './components/LinesAndAxes';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { MethodologySection } from './components/MethodologySection';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';
import { ActivityDetailModal } from './components/ActivityDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { ProposalModal } from './components/ProposalModal';

import { PROJECTS, INITIAL_PROPOSALS } from './data/labData';
import { Article, Conference, Project, Proposal, Workshop, WorkAxis, WorkLine } from './types';

export default function App() {
  const [selectedAxis, setSelectedAxis] = useState<WorkAxis | 'Todos'>('Todos');
  const [selectedLine, setSelectedLine] = useState<WorkLine | 'Todas'>('Todas');

  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [proposals, setProposals] = useState<Proposal[]>(INITIAL_PROPOSALS);

  // Modals state
  const [activeActivity, setActiveActivity] = useState<Conference | Workshop | null>(null);
  const [activityType, setActivityType] = useState<'conference' | 'workshop' | null>(null);

  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [proposalModalType, setProposalModalType] = useState<'proyecto' | 'taller'>('proyecto');

  const handleOpenProposal = (type: 'proyecto' | 'taller') => {
    setProposalModalType(type);
    setIsProposalModalOpen(true);
  };

  const handleAddProposal = (newProposal: Proposal) => {
    setProposals((prev) => [newProposal, ...prev]);
  };

  const handleSelectConference = (conf: Conference) => {
    setActiveActivity(conf);
    setActivityType('conference');
  };

  const handleSelectWorkshop = (ws: Workshop) => {
    setActiveActivity(ws);
    setActivityType('workshop');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* Top Bar Nav */}
      <Header onOpenProposal={handleOpenProposal} />

      {/* Main Content Sections */}
      <main className="grow">
        <Hero onOpenProposal={handleOpenProposal} />

        <LinesAndAxes
          selectedAxis={selectedAxis}
          onSelectAxis={setSelectedAxis}
          selectedLine={selectedLine}
          onSelectLine={setSelectedLine}
        />

        <ActivitiesSection
          onSelectConference={handleSelectConference}
          onSelectWorkshop={handleSelectWorkshop}
          onOpenProposal={handleOpenProposal}
          selectedAxis={selectedAxis}
        />

        <ProjectsSection
          projects={projects}
          proposals={proposals}
          onOpenProposal={handleOpenProposal}
          selectedAxis={selectedAxis}
          selectedLine={selectedLine}
        />

        <ArticlesSection onSelectArticle={setActiveArticle} />

        <MethodologySection />

        <ReferencesSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Activity Details Modal (Conferences & Workshops) */}
      <ActivityDetailModal
        activity={activeActivity}
        type={activityType}
        onClose={() => {
          setActiveActivity(null);
          setActivityType(null);
        }}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      {/* Propose a Project or Workshop Modal */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        initialType={proposalModalType}
        onAddProposal={handleAddProposal}
      />
    </div>
  );
}
