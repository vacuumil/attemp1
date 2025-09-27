import React, { useState } from 'react';
import { SpeedTriangle } from '../../components/navigation/SpeedTriangle';
import { VorPage } from '../../components/navigation/vor/VorPage';
import { IlsPage } from '../../components/navigation/ils/IlsPage';
import {
  Container,
  Title,
  TabContainer,
  Tab,
  ModulesGrid,
  ModuleCard,
  ModuleIcon,
  ModuleTitle,
  DescriptionText
} from './Navigation.styles';

type TabType = 'overview' | 'map' | 'vor' | 'ils' | 'triangle';

interface NavigationModule {
  icon: string;
  title: string;
  description: string;
  id: TabType;
}

export const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const modules: NavigationModule[] = [
    { 
      icon: '📡', 
      title: 'VOR', 
      description: 'Радионавигационная система',
      id: 'vor'
    },
    { 
      icon: '🛬', 
      title: 'ILS', 
      description: 'Система захода на посадку',
      id: 'ils'
    },
    { 
      icon: '🔺', 
      title: 'Треугольник скоростей', 
      description: 'Расчет параметров полета',
      id: 'triangle'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'triangle':
        return <SpeedTriangle />;
      case 'vor':
        return <VorPage />;
      case 'ils':
        return <IlsPage />;
      case 'overview':
      default:
        return (
          <>
            <DescriptionText>
              Освойте современные системы навигации в интерактивной среде. 
              Выберите модуль для начала обучения.
            </DescriptionText>
            
            <ModulesGrid>
              {modules.map((module, index) => (
                <ModuleCard 
                  key={index} 
                  className="float-animation"
                  onClick={() => setActiveTab(module.id)}
                >
                  <ModuleIcon>{module.icon}</ModuleIcon>
                  <ModuleTitle>{module.title}</ModuleTitle>
                  <p>{module.description}</p>
                </ModuleCard>
              ))}
            </ModulesGrid>
          </>
        );
    }
  };

  return (
    <Container>
      <Title>Модуль навигации</Title>
      
      <TabContainer>
        <Tab 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
        >
          Обзор
        </Tab>
        <Tab 
          active={activeTab === 'vor'} 
          onClick={() => setActiveTab('vor')}
        >
          VOR
        </Tab>
        <Tab 
          active={activeTab === 'ils'} 
          onClick={() => setActiveTab('ils')}
        >
          ILS
        </Tab>
        <Tab 
          active={activeTab === 'triangle'} 
          onClick={() => setActiveTab('triangle')}
        >
          Треугольник скоростей
        </Tab>
      </TabContainer>

      {renderContent()}
    </Container>
  );
};