import React from 'react';
import { Glossary } from './Glossary';
import { IndicatorTypeCard } from './IndicatorTypeCard';
import type { IndicatorType } from './IndicatorTypeCard';
import './TheorySection.css';

const indicatorTypes: IndicatorType[] = [
  {
    id: 'cdi',
    name: 'Классический VOR-индикатор (CDI)',
    description: 'Наиболее распространенный тип индикатора, часто совмещенный с ILS. Имеет одну стрелку отклонения от курса (CDI) и индикатор TO/FROM.',
    keyFeatures: [
      'Стрелка Course Deviation Indicator (CDI) - показывает отклонение от выбранного радиала',
      'Индикатор TO/FROM - указывает направление относительно станции',
      'Ручка OBS - для выбора желаемого радиала',
      'Окно настройки частоты'
    ]
  },
  {
    id: 'hsi',
    name: 'HSI (Horizontal Situation Indicator)',
    description: 'Более современный и наглядный пилотажно-навигационный прибор, объединяющий функции VOR-индикатора и гирополукомпаса.',
    keyFeatures: [
      'Вращающаяся картушка курса - визуально показывает выбранный курс',
      'Стрелка отклонения (CDI) - расположена в центре',
      'Индикатор TO/FROM - в виде стрелок',
      'Может одновременно показывать информацию от нескольких навигационных систем'
    ]
  }
];

const glossaryTerms = [
  {
    id: 'vor',
    term: 'VOR (VHF Omnidirectional Range)',
    definition: 'Наземная радионавигационная система, работающая в УКВ-диапазоне. Предназначена для определения азимута (пеленга) воздушного судна относительно наземной станции.',
    icon: '📡'
  },
  {
    id: 'radial',
    term: 'Радиал (Radial)',
    definition: 'Угол, заключенный между северным направлением магнитного меридиана, проходящего через радиостанцию, и выбранным направлением. Например, радиал 360° ведет на север от станции, радиал 090° — на восток.',
    icon: '🧭'
  },
  {
    id: 'cdi',
    term: 'CDI (Course Deviation Indicator)',
    definition: 'Стрелка на индикаторе VOR-приемника. Показывает отклонение самолета от выбранного радиала. Центрированная стрелка означает нахождение на луче.',
    icon: '↔️'
  },
  {
    id: 'obs',
    term: 'OBS (Omni Bearing Selector)',
    definition: 'Ручка на VOR-приемнике для выбора желаемого радиала (курса), который пилот хочет захватить или отслеживать.',
    icon: '🎛️'
  },
  {
    id: 'to-from',
    term: 'Индикатор TO/FROM',
    definition: 'Указывает, находится ли самолет по направлению к станции (TO) или от нее (FROM). Определяется положением самолета относительно выбранного на OBS радиала.',
    icon: '🔁'
  }
];

export const TheorySection: React.FC = () => {
  return (
    <div className="theory-section">
      <h2>Основы VOR-навигации</h2>
      
      <section className="theory-subsection">
        <h3>📊 Типы индикаторов</h3>
        <div className="indicators-grid">
          {indicatorTypes.map(indicator => (
            <IndicatorTypeCard key={indicator.id} indicator={indicator} />
          ))}
        </div>
      </section>

      <section className="theory-subsection">
        <h3>📖 Глоссарий</h3>
        <Glossary terms={glossaryTerms} />
      </section>
    </div>
  );
};