// Features.tsx - ОБНОВЛЕННАЯ ВЕРСИЯ
import React from 'react';
import {
  FeaturesContainer,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './Features.styles';

export const Features: React.FC = () => {
  const features = [
    {
      icon: '🧭',
      title: 'Точная навигация',
      description: 'Отработка работы с VOR, ILS, NDB и другими навигационными системами в реалистичных условиях с полной симуляцией радиосигналов.'
    },
    {
      icon: '🌪️',
      title: 'Метеоанализ',
      description: 'Анализ METAR/TAF сводок и принятие решений на основе реальных погодных условий с визуализацией фронтов.'
    },
    {
      icon: '📈',
      title: 'Статистика прогресса',
      description: 'Детальная статистика ваших успехов с графиками и аналитикой для глубокого анализа эффективности обучения.'
    },
    {
      icon: '🎮',
      title: 'Интерактивные симуляторы',
      description: 'Управление самолетом в реальном времени с физикой полета для отработки навигационных задач.'
    },
    {
      icon: '📱',
      title: 'Адаптивный дизайн',
      description: 'Обучение на любом устройстве: от компьютера до мобильного телефона с сохранением всех функций.'
    },
    {
      icon: '⚡',
      title: 'Автономная работа',
      description: 'Полная функциональность без обрвщения на сервер с локальным хранением всех данных и прогресса.'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <SectionTitle>Возможности платформы</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            className="feature-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};