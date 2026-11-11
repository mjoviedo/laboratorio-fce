import { Article, Conference, HackdayInfo, Project, Proposal, Workshop } from '../types';

export const LAB_IMAGES = {
  workspace: '/src/assets/images/idea_lab_workspace_1793917168350.jpg',
  immersiveViz: '/src/assets/images/idea_immersive_viz_1793917169568.jpg',
  vintageHardware: '/src/assets/images/idea_vintage_hardware_1793917169865.jpg',
  workshopHackday: '/src/assets/images/idea_workshop_hackday_1793917170379.jpg',
};

export const WORK_LINES = [
  {
    name: 'Formación',
    description: 'Espacios continuos de alfabetización y profundización técnica en Python, R, desarrollo web e IA para todos los claustros.',
    focus: 'Democratización de habilidades computacionales y pensamiento algorítmico en ciencias económicas.'
  },
  {
    name: 'Investigación y Diseño',
    description: 'Experimentación aplicada en el cruce de modelos económicos, diseño de interacción, simulaciones y pedagogías contemporáneas.',
    focus: 'Desarrollo de prototipos exploratorios sin la rigidez de productos comerciales cerrados.'
  },
  {
    name: 'Extensión universitaria',
    description: 'Articulación activa con actores productivos, organismos públicos territoriales, cooperativas y la comunidad regional.',
    focus: 'Transferencia recíproca de conocimiento libre e impacto tangible en el territorio cordobés.'
  },
  {
    name: 'Gestión universitaria',
    description: 'Optimización de circuitos institucionales, automatización ética de trámites, digitalización de legajos y gobierno de datos abierto.',
    focus: 'Herramientas abiertas para que la universidad pública gestione mejor sus recursos y tiempos.'
  },
  {
    name: 'Innovación',
    description: 'Saltos creativos basados en la reutilización de tecnologías existentes frente al imperativo del consumo de novedades tecnológicas.',
    focus: 'Cultura maker, software y hardware libre, hackdays y prototipado ágil con sentido social.'
  }
] as const;

export const WORK_AXES = [
  {
    name: 'Economía',
    tagline: 'Modelos de plataformas, dinámicas de precios, economía del juego y econometría territorial.',
    iconName: 'TrendingUp'
  },
  {
    name: 'Tecnología',
    tagline: 'Inteligencia artificial, LLMs locales, herramientas libres (Git, OpenBoard, Excalidraw) y código abierto.',
    iconName: 'Cpu'
  },
  {
    name: 'Educación',
    tagline: 'Recursos educativos abiertos (REA), simuladores pedagógicos interactivos y aprendizaje inmersivo.',
    iconName: 'GraduationCap'
  },
  {
    name: 'Trabajo',
    tagline: 'Transformación del empleo profesional, automatización ética y dinámicas interclaustro colaborativas.',
    iconName: 'Briefcase'
  },
  {
    name: 'Artes mediales',
    tagline: 'Instalaciones audiovisuales, cartografías económicas con IDECOR y patrimonio tecnológico interactivo.',
    iconName: 'Palette'
  }
] as const;

export const CONFERENCES: Conference[] = [
  {
    id: 'conf-plataformas',
    title: 'Economía de plataformas: Algoritmos de precios, gobernanza de datos y mercados bilaterales',
    subtitle: 'Nuevas arquitecturas de valor en la era digital',
    date: 'Jueves 26 de Noviembre de 2026',
    time: '18:00 a 20:00 hs',
    location: 'Aula Magna FCE y Streaming en vivo UNC',
    speaker: 'Dra. Silvina Arrieta & Mgter. Lucas Valenzuela',
    speakerRole: 'Investigadores en Economía Digital y Políticas de Plataformas (FCE - Conicet)',
    axis: 'Economía',
    summary: 'Análisis crítico sobre la fijación dinámica de precios, la concentración de información en grandes intermediarios y las alternativas cooperativas de código abierto.',
    abstract: 'Las plataformas digitales han modificado sustancialmente la coordinación de mercados, transformando relaciones de empleo y mecanismos de precios. En esta conferencia se examinarán casos locales e internacionales, desde plataformas de delivery hasta marketplaces de servicios, discutiendo el rol de los algoritmos de recomendación y las oportunidades regulatorias desde la perspectiva de las Ciencias Económicas públicas.',
    topics: [
      'Modelos de negocio en mercados de dos lados (two-sided markets)',
      'Precios dinámicos y algoritmos de optimización',
      'Extracción de rentas informacionales vs. eficiencia distributiva',
      'Plataformas cooperativas y soberanía tecnológica universitaria'
    ],
    prerequisites: 'Abierto a estudiantes, docentes, graduados y público general. No requiere conocimientos previos de programación.'
  },
  {
    id: 'conf-juegos',
    title: 'Economía de juegos online: Mercados virtuales, microtransacciones y economía de la atención',
    subtitle: 'Diseño de incentivos e intercambios en ecosistemas lúdicos digitales',
    date: 'Miércoles 2 de Diciembre de 2026',
    time: '18:30 a 20:30 hs',
    location: 'Espacio IDEA (Planta Baja FCE) y Sala Híbrida',
    speaker: 'Lic. Mateo Pereyra & Lic. Camila Rossi',
    speakerRole: 'Especialistas en Microeconomía Aplicada y Diseño de Mercados Virtuales',
    axis: 'Economía',
    summary: 'Cómo los videojuegos masivos crearon sistemas monetarios complejos, hiperinflación virtual, mercados secundarios de skins y lecciones de política monetaria para economistas.',
    abstract: 'Desde EVE Online hasta las economías de skins de Counter-Strike y los mundos de Roblox, los videojuegos operan hoy como verdaderos laboratorios vivientes de teoría económica. En esta sesión exploraremos cómo se diseñan sumideros monetarios (gold sinks), cómo se arbitran activos digitales entre monedas fiat y criptoactivos, y qué herramientas de la econometría clásica permiten entender la conducta de millones de agentes interactuando en tiempo real.',
    topics: [
      'Microeconomía del ocio y disposición a pagar en bienes intangibles',
      'Sistemas monetarios virtuales: inflación, emisión y bancos centrales ficticios',
      'Mercados de intercambio entre pares y arbitraje transfronterizo',
      'Aspectos regulatorios: cajas de botín (loot boxes) y protección a consumidores'
    ],
    prerequisites: 'Abierto a la comunidad interesada en teoría económica contemporánea y cultura digital.'
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-vibecoding',
    title: 'Vibecoding de simuladores educativos para Ciencias Económicas',
    duration: '2 encuentros presenciales (6 hs totales)',
    date: 'Viernes 13 y 20 de Noviembre de 2026 · 15:00 a 18:00 hs',
    instructor: 'Equipo Laboratorio IDEA & Docentes Cátedra Economía General',
    instructorRole: 'Especialistas en EdTech y Prototipado Asistido por IA',
    axis: 'Educación',
    summary: 'Aprende a transformar explicaciones teóricas abstractas (oferta-demanda, elasticidad, IS-LM) en simuladores interactivos web usando modelos de IA generativa y React sin fricción técnica.',
    syllabus: [
      'Introducción al paradigma vibecoding: del concepto didáctico al artefacto ejecutable',
      'Técnicas de estructuración de prompts para fórmulas matemáticas y gráficas SVG dinámicas',
      'Parametrización en tiempo real: sliders, excedentes de mercado y shocks exógenos',
      'Despliegue libre en la web para uso de cátedras y libre acceso estudiantil'
    ],
    toolsUsed: ['Node.js', 'Vite', 'Tailwind CSS', 'OpenAI/Gemini CLI', 'Vercel / GitHub Pages'],
    targetAudience: 'Docentes, adscriptos, auxiliares y estudiantes interesados en innovación pedagógica.',
    capacity: 24
  },
  {
    id: 'ws-multimedia',
    title: 'Uso de estudio de grabación multimedia y producción de cápsulas abiertas',
    duration: '1 encuentro práctico intensivo (4 hs)',
    date: 'Martes 24 de Noviembre de 2026 · 14:00 a 18:00 hs',
    instructor: 'Área de Medios FyPE & Laboratorio IDEA',
    instructorRole: 'Productores Audiovisuales y Diseñadores Instruccionales',
    axis: 'Tecnología',
    summary: 'Aprovechamiento integral del equipamiento de audio y video del laboratorio: microfonía, iluminación para set educativo, teleprompter y edición ágil para Recursos Educativos Abiertos.',
    syllabus: [
      'Configuración de microfonía condenser y dinámicos para podcasts y microclases',
      'Esquemas de iluminación tres puntos con bajo presupuesto',
      'Uso de software libre para captura y emisión (OBS Studio, Audacity)',
      'Buenas prácticas para cápsulas breves de alto impacto pedagógico'
    ],
    toolsUsed: ['OBS Studio', 'Audacity', 'Estudio Insonorizado FCE', 'Cámaras Mirrorless'],
    targetAudience: 'Comunidad FCE interesada en crear material audiovisual educativo de calidad.',
    capacity: 16
  },
  {
    id: 'ws-agile',
    title: 'Metodologías ágiles aplicadas a proyectos universitarios e interclaustro',
    duration: '2 encuentros (4 hs totales)',
    date: 'Jueves 3 y 10 de Diciembre de 2026 · 16:00 a 18:00 hs',
    instructor: 'Mgter. Germán Calvo',
    instructorRole: 'Facilitador Ágil & Consultor Organizacional FCE',
    axis: 'Trabajo',
    summary: 'Herramientas Scrum y Kanban adaptadas a los ritmos de investigación, cátedras y extensión. Gestión visual de tareas, retrospectivas y sincronización sin burocracia.',
    syllabus: [
      'Por qué los proyectos académicos fallan por sobrediseño y falta de iteración rápida',
      'Tableros Kanban físicos y digitales (Nextcloud Deck, Kanboard libre)',
      'Dinámica de sprints de 2 semanas y reuniones de sincronización de 15 minutos',
      'Cómo organizar equipos híbridos docentes-estudiantiles sin verticalismos'
    ],
    toolsUsed: ['Nextcloud Deck', 'Excalidraw', 'Kanban Board FCE'],
    targetAudience: 'Equipos de investigación, adscriptos, secretarías y centros de estudiantes.',
    capacity: 30
  },
  {
    id: 'ws-git',
    title: 'Uso de repositorios Git y GitLab UNC para docencia y ciencia abierta',
    duration: '1 encuentro teórico-práctico (3.5 hs)',
    date: 'Lunes 14 de Diciembre de 2026 · 15:30 a 19:00 hs',
    instructor: 'Lic. Ignacio Duarte',
    instructorRole: 'Desarrollador de Sistemas & Miembro Laboratorio IDEA',
    axis: 'Tecnología',
    summary: 'Control de versiones indispensable para compartir programas en R, Python, material didáctico colaborativo y datasets reproducibles entre cátedras.',
    syllabus: [
      'Conceptos esenciales: commits, ramas, conflictos y pull requests desmitificados',
      'Configuración de llaves SSH y uso del servidor GitLab institucional de la UNC',
      'Repositorios de cátedra: cómo recibir trabajos prácticos de alumnos con control de autoría',
      'Licencias abiertas (GPL, MIT, Creative Commons) para proteger y compartir la producción pública'
    ],
    toolsUsed: ['Git', 'GitLab UNC', 'VS Code', 'GitHub Desktop'],
    targetAudience: 'Docentes, investigadores y estudiantes con o sin experiencia previa.',
    capacity: 25
  }
];

export const NEXT_HACKDAY: HackdayInfo = {
  edition: 'Hackday IDEA #03 — Primavera Digital',
  date: 'Sábado 18 de Noviembre de 2026',
  time: '09:30 a 17:30 hs (Almuerzo colaborativo incluido)',
  location: 'Espacio IDEA y Sala de Coworking Planta Baja FCE, Ciudad Universitaria',
  description: 'Jornada intensiva de trabajo horizontal y colaborativo para acelerar los desarrollos de software libre, prototipos y herramientas clave de la comunidad de Ciencias Económicas.',
  projects: [
    {
      id: 'hp-chatbot',
      title: 'Chatbot bibliográfico Biblioteca Manuel Belgrano',
      lead: 'Equipo Sistemas FCE + Biblioteca Manuel Belgrano',
      objective: 'Optimizar la base de embeddings locales y refinar el indexado semántico de los programas de estudio 2026 y la colección de libros de texto obligatorios.',
      skillsNeeded: ['Python / LangChain', 'Catalogación bibliográfica', 'Diseño de interfaz conversacional', 'Testeo de consultas']
    },
    {
      id: 'hp-legajos',
      title: 'Digitalización y procesamiento documental de legajos históricos',
      lead: 'Área de Despacho FCE + Docentes de Gestión Universitaria',
      objective: 'Entrenar un pipeline OCR libre con Tesseract para indexar actas y resoluciones históricas preservando la privacidad y garantizando búsqueda por texto plano.',
      skillsNeeded: ['OCR y Python', 'Gestión documental y archivo', 'Validación de datos', 'Normativa universitaria']
    },
    {
      id: 'hp-curso-ia',
      title: 'Actualización del Curso abierto en Inteligencia Artificial y Educación Universitaria',
      lead: 'FyPE + Cátedras adheridas + Laboratorio IDEA',
      objective: 'Revisar módulos pedagógicos, redactar nuevas guías prácticas sobre vibecoding y elaborar rúbricas de evaluación formativa frente a herramientas generativas.',
      skillsNeeded: ['Docencia universitaria', 'Redacción pedagógica', 'Producción de recursos abiertos', 'Evaluación educativa']
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'curso-ia-educacion',
    title: 'Curso abierto en Inteligencia Artificial y Educación Universitaria',
    status: 'en_curso',
    line: 'Formación',
    axis: 'Educación',
    shortDescription: 'Trayecto de formación continua y abierta para docentes de la UNC sobre incorporación pedagógica crítica de modelos generativos.',
    fullDescription: 'Iniciado como una respuesta urgente y constructiva frente al desembarco masivo de modelos de lenguaje en las aulas, este curso abierto reúne a más de 450 docentes de diversas facultades de la UNC. Proporciona módulos autogestionados, talleres sincrónicos de experimentación y un banco de casos prácticos para repensar exámenes, consignas de taller y el desarrollo de pensamiento crítico.',
    partners: ['FyPE (Formación y Perfeccionamiento Docente FCE)', 'Área de Sistemas FCE', 'Laboratorio IDEA'],
    deliverables: [
      'Plataforma Moodle con acceso irrestricto y contenidos Creative Commons',
      'Guía metodológica sobre evaluación con herramientas de IA para cátedras',
      'Repositorio de prompts pedagógicos testeados en carreras de Contador, Economía y Administración'
    ],
    image: LAB_IMAGES.workshopHackday
  },
  {
    id: 'chatbot-biblioteca',
    title: 'Chatbot consulta bibliografía de Biblioteca Manuel Belgrano',
    status: 'en_curso',
    line: 'Gestión universitaria',
    axis: 'Tecnología',
    shortDescription: 'Asistente conversacional inteligente que localiza material físico, digital y artículos de cátedra en segundos con lenguaje natural.',
    fullDescription: 'Desarrollado conjuntamente con los profesionales de la Biblioteca Manuel Belgrano, este prototipo utiliza un motor RAG (Retrieval-Augmented Generation) alojado en servidores locales de la FCE para responder preguntas de estudiantes y docentes sobre ejemplares disponibles, bibliografía básica y complementaria según el programa de cada materia, enlaces directos a recursos digitales y ubicación exacta en salas de lectura.',
    partners: ['Biblioteca Manuel Belgrano FCE', 'Área de Sistemas FCE', 'Oficina de Conocimiento Abierto UNC'],
    deliverables: [
      'Asistente embebido en el portal de la biblioteca con respuestas instantáneas',
      'Indexado de más de 12.000 títulos y programas vigentes de la facultad',
      'Garantía total de privacidad: ningún dato de consulta se comparte con terceros'
    ],
    image: LAB_IMAGES.workspace,
    interactiveType: 'chatbot'
  },
  {
    id: 'vibecoding-simuladores',
    title: 'Vibecoding de simuladores educativos para Ciencias Económicas',
    status: 'en_curso',
    line: 'Innovación',
    axis: 'Educación',
    shortDescription: 'Prototipado rápido de micro-simuladores web interactivos para visualizar curvas de oferta, demanda, políticas fiscales y equilibrio macroeconómico.',
    fullDescription: 'El proyecto desafía la tradicional barrera de entrada al desarrollo de software para docentes de economía. Utilizando técnicas de "vibecoding" (programación intuitiva asistida por modelos generativos y plantillas web reactivas), los propios profesores crean aplicaciones interactivas donde los alumnos mueven deslizadores, introducen impuestos o subsidios y observan en tiempo real la traslación de curvas y el cálculo de excedentes.',
    partners: ['Cátedras de Microeconomía y Macroeconomía FCE', 'Laboratorio IDEA', 'Estudiantes adscriptos'],
    deliverables: [
      'Colección de 6 simuladores web libres listos para usar en proyector o celulares',
      'Plantilla de código abierto en GitHub para crear nuevos modelos en minutos',
      'Evaluación de impacto pedagógico en comisiones experimentales de primer y segundo año'
    ],
    image: LAB_IMAGES.workspace,
    interactiveType: 'simulator'
  },
  {
    id: 'museo-tecnologico',
    title: 'Museo Tecnológico de la FCE & Arqueología Digital',
    status: 'incubacion',
    line: 'Investigación y Diseño',
    axis: 'Artes mediales',
    shortDescription: 'Recuperación y puesta en valor del patrimonio informático histórico de la facultad: terminales de las décadas 70-90 y sistemas de cálculo.',
    fullDescription: 'La Facultad de Ciencias Económicas de la UNC fue pionera en el uso de centros de cómputo en Córdoba. Este proyecto rescata terminales IBM, calculadoras electromecánicas, tarjetas perforadas y manuales históricos, restaurándolos físicamente para armar un recorrido interactivo permanente en los pasillos de la facultad y una muestra virtual interactiva.',
    partners: ['Red de Galerías FCE', 'Área de Patrimonio FCE', 'Museo de Informática de Córdoba'],
    deliverables: [
      'Muestra física inaugurada en pasillos del primer piso',
      'Fichas técnicas y emuladores web de software administrativo histórico',
      'Catálogo audiovisual con testimonios de no docentes y docentes pioneros'
    ],
    image: LAB_IMAGES.vintageHardware
  },
  {
    id: 'video-inmersivo-idecor',
    title: 'Instalaciones de Video Inmersivo & Cartografía Económica IDECOR',
    status: 'incubacion',
    line: 'Extensión universitaria',
    axis: 'Artes mediales',
    shortDescription: 'Cruces entre economía territorial, visualización inmersiva de datos de Córdoba y experimentación audiovisual con la Facultad de Artes.',
    fullDescription: 'Articulando con el equipo de la Biblioteca FCE, la Red de Galerías y el Medialab de la Facultad de Artes, este proyecto toma las bases de datos abiertas de IDECOR (Infraestructura de Datos Espaciales de la Provincia de Córdoba) sobre valor de la tierra, uso de suelo y actividad productiva para generar instalaciones audiovisuales interactivas proyectadas en los espacios comunes de la facultad.',
    partners: ['Biblioteca Manuel Belgrano', 'IDECOR Córdoba', 'Medialab Facultad de Artes UNC', 'Red de Galerías FCE'],
    deliverables: [
      'Instalación piloto interactiva en el hall central de la FCE',
      'Dashboard geoespacial libre con cruces de datos socioeconómicos',
      'Jornadas abiertas de cartografía y visualización de datos urbanos'
    ],
    image: LAB_IMAGES.immersiveViz
  },
  {
    id: 'repositorio-rea',
    title: 'Repositorio de Recursos Educativos Abiertos (REA FCE)',
    status: 'incubacion',
    line: 'Gestión universitaria',
    axis: 'Tecnología',
    shortDescription: 'Plataforma para catalogar, reutilizar y remixar materiales pedagógicos, ejercicios, guías y videos con licencias abiertas.',
    fullDescription: 'Frecuentemente el valioso material producido por cátedras y áreas técnicas queda aislado en aulas virtuales cerradas. Este repositorio centralizado implementa estándares internacionales de metadatos educativos (LOM/OER) para que cualquier docente o alumno pueda buscar, adaptar y acreditar recursos de la FCE.',
    partners: ['FyPE', 'Área de Sistemas', 'Biblioteca Manuel Belgrano', 'Oficina de Conocimiento Abierto UNC'],
    deliverables: [
      'Buscador semántico federado con filtros por carrera y materia',
      'Protocolo de licenciamiento Creative Commons asistido para docentes',
      'Integración directa con el entorno Moodle de la FCE'
    ],
    image: LAB_IMAGES.workspace
  }
];

export const INITIAL_PROPOSALS: Proposal[] = [
  {
    id: 'prop-1',
    title: 'Visualizador de Presupuesto Universitario Abierto en D3.js',
    type: 'proyecto',
    proposerName: 'Lic. Mariano Benítez',
    claustro: 'Docente',
    email: 'mbenitez@fce.unc.edu.ar',
    line: 'Extensión universitaria',
    axis: 'Economía',
    description: 'Crear una interfaz interactiva donde la ciudadanía y la comunidad académica puedan explorar los flujos presupuestarios de la UNC de manera clara y auditable con gráficos interactivos.',
    expectedTools: 'Python para scraping/limpieza, D3.js y Tailwind para la web.',
    createdAt: '01/11/2026'
  },
  {
    id: 'prop-2',
    title: 'Taller de Automatización de Tareas Administrativas con Python',
    type: 'taller',
    proposerName: 'Sofía Carrizo',
    claustro: 'No Docente',
    email: 'scarrizo@fce.unc.edu.ar',
    line: 'Formación',
    axis: 'Trabajo',
    description: 'Enseñar scripts básicos para combinar planillas Excel de alumnos, generar certificados masivos en PDF y evitar trabajo manual repetitivo.',
    expectedTools: 'Python, Pandas, OpenPyXL, ReportLab.',
    createdAt: '03/11/2026'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'LLMs en el ecosistema bibliográfico: Experiencia del Asistente Virtual Manuel Belgrano',
    subtitle: 'Diseño de un sistema de recuperación semántica (RAG) soberano y privado para la Facultad de Ciencias Económicas',
    authors: 'Equipo Técnico Laboratorio IDEA & Personal de Biblioteca Manuel Belgrano',
    date: 'Octubre de 2026',
    readTime: '6 min de lectura',
    axis: 'Tecnología',
    line: 'Gestión universitaria',
    abstract: 'Este artículo documenta el desarrollo e implementación del prototipo de chatbot bibliográfico para la FCE de la Universidad Nacional de Córdoba. Abordamos los desafíos del indexado de programas analíticos heterogéneos, el uso de modelos de lenguaje open-weights alojados en infraestructura propia y la mejora verificada en la autonomía de búsqueda de los estudiantes de primer año.',
    content: [
      'Las bibliotecas universitarias son el corazón del acceso al conocimiento público, pero los sistemas tradicionales de catálogo en línea (OPAC) presentan altas barreras semánticas para los estudiantes que inician sus carreras. Cuando un alumno busca "cómo calcular el multiplicador keynesiano", el catálogo por palabras clave suele devolver cero resultados si el libro lleva por título "Teoría Macroeconómica".',
      'Frente a esta brecha, el Laboratorio IDEA junto al equipo de la Biblioteca Manuel Belgrano inició el desarrollo de un asistente conversacional basado en la técnica RAG (Retrieval-Augmented Generation). La premisa fundacional del proyecto fue tajante: no enviar datos de navegación estudiantil ni contenidos institucionales a proveedores comerciales cerrados que moneticen la interacción.',
      'El sistema procesó inicialmente los programas vigentes de más de 60 asignaturas de las carreras de Contador Público, Licenciatura en Economía y Licenciatura en Administración. Se generaron fragmentos contextuales (chunks) con metadatos de cátedra, estantería física y enlace al repositorio digital. Al combinarse con un modelo de lenguaje de 8 mil millones de parámetros cuantizado localmente, el asistente responde con precisión milimétrica, citando capítulo y signatura topográfica.',
      'Durante las primeras 3 semanas de prueba con 280 alumnos de comisiones piloto, el 91% de las consultas bibliográficas obtuvieron resolución satisfactoria en el primer intento, y los tiempos de atención en el mostrador físico pudieron reorientarse a asesorías de investigación de posgrado complejas.'
    ],
    keyFindings: [
      'Reducción del 74% en el tiempo promedio para localizar bibliografía obligatoria.',
      'Preservación del 100% de la privacidad: motor desplegado en servidores de la FCE.',
      'Aumento del 38% en préstamos de obras complementarias antes subutilizadas.'
    ],
    citations: [
      'Lewis, P. et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. NeurIPS.',
      'UNESCO (2021). Recomendación sobre la Ciencia Abierta y la Inteligencia Artificial.',
      'Facultad de Ciencias Económicas UNC (2025). Plan Estratégico Institucional de Transformación Digital.'
    ],
    image: LAB_IMAGES.workspace
  },
  {
    id: 'art-2',
    title: 'Vibecoding en la enseñanza de la microeconomía: De la fórmula abstracta al simulador reactivo',
    subtitle: 'Cómo docentes y estudiantes construyeron herramientas interactivas de equilibrio de mercado en dos semanas',
    authors: 'Cátedra de Economía General FCE & Red de Innovación Pedagógica IDEA',
    date: 'Septiembre de 2026',
    readTime: '8 min de lectura',
    axis: 'Educación',
    line: 'Innovación',
    abstract: 'La abstracción matemática suele distanciar a los estudiantes de los conceptos económicos fundamentales. Este trabajo expone los resultados del primer taller de "vibecoding", donde docentes sin experiencia previa en desarrollo web programaron simuladores dinámicos con soporte de inteligencia artificial generativa y los pusieron a prueba en clases masivas.',
    content: [
      'Uno de los nudos pedagógicos más persistentes en las Ciencias Económicas radica en la distancia entre la ecuación en el pizarrón y la intuición visual del fenómeno. Explicar cómo un impuesto a la producción desplaza la curva de oferta hacia la izquierda suele requerir múltiples gráficos estáticos que saturan la memoria de trabajo del alumno.',
      'A través del proyecto de Vibecoding impulsado por IDEA, se propuso un cambio de paradigma: en lugar de esperar meses a que un equipo externo desarrolle software a medida, los propios profesores de cátedra utilizaron entornos modernos asistidos por IA para escribir código reactivo en TypeScript y SVG en cuestión de horas.',
      'El resultado fue una batería de simuladores ultralivianos que se ejecutan directamente en el navegador del teléfono del estudiante. Al mover un control de deslizador de "Subsidio", las curvas se desplazan con animación suave y se calcula instantáneamente el cambio en el excedente del consumidor y la pérdida irrecuperable de eficiencia.',
      'Los exámenes parciales de las comisiones que utilizaron los simuladores mostraron una mejora del 26% en las preguntas de razonamiento conceptual y traslación de parámetros frente a los grupos de control tradicionales.'
    ],
    keyFindings: [
      'Docentes crearon prototipos funcionales en menos de 10 horas de dedicación total.',
      'Incremento del 26% en el rendimiento en resolución de problemas dinámicos de mercado.',
      'Publicación del código bajo licencia MIT en el repositorio abierto de la UNC.'
    ],
    citations: [
      'Varian, H. (2014). Intermediate Microeconomics: A Modern Approach. W. W. Norton.',
      'Papert, S. (1980). Mindstorms: Children, Computers, and Powerful Ideas.',
      'FyPE - FCE UNC (2024). Diagnóstico sobre mediaciones tecnológicas en carreras de grado.'
    ],
    image: LAB_IMAGES.workshopHackday
  },
  {
    id: 'art-3',
    title: 'Arqueología del cálculo: Puesta en valor del patrimonio informático de la Facultad de Ciencias Económicas',
    subtitle: 'Diálogo entre terminales históricas de los años 70-80 y la visualización de datos contemporánea',
    authors: 'Red de Galerías FCE, Laboratorio IDEA & Cátedra de Historia Económica',
    date: 'Agosto de 2026',
    readTime: '5 min de lectura',
    axis: 'Artes mediales',
    line: 'Investigación y Diseño',
    abstract: 'La memoria material de la informática universitaria no es chatarra obsoleta: es un testimonio vivo de la relación entre economía, automatización contable y soberanía pública. En este artículo relatamos la recuperación técnica y curatorial de 14 equipos emblemáticos hallados en los depósitos de la facultad.',
    content: [
      'En las entrañas del edificio de Ciudad Universitaria dormían decenas de artefactos que en las décadas de 1970 y 1980 procesaban las liquidaciones de sueldos, las inscripciones de miles de estudiantes y los primeros análisis econométricos de la región centro del país.',
      'A través de una convocatoria interclaustro que involucró a jubilados no docentes del área de Cómputos, estudiantes de informática y docentes de Historia Económica, el Laboratorio IDEA coordinó un minucioso trabajo de restauración física, limpieza de fuentes de poder y reemplazo de condensadores degradados.',
      'El rescate permitió poner nuevamente en funcionamiento un sistema IBM System/36 y terminales de fósforo verde. Lejos de quedar como piezas mudas tras vitrinas, los equipos se integraron a un diálogo con el presente: una pantalla moderna al lado de cada terminal muestra cómo una consulta que demoraba 40 minutos en 1984 hoy se procesa en 2 microsegundos.',
      'La muestra generó un puente intergeneracional inédito en la facultad, despertando en los estudiantes más jóvenes una profunda curiosidad sobre las limitaciones materiales del hardware y el valor de optimizar recursos computacionales.'
    ],
    keyFindings: [
      '14 equipos históricos recuperados funcional y estéticamente.',
      'Digitalización de 120 manuales y planos de arquitectura de sistemas de la FCE.',
      'Visita de más de 1.800 personas durante la Noche de los Museos UNC.'
    ],
    citations: [
      'Parikka, J. (2012). What is Media Archaeology? Polity Press.',
      'Gómez, T. (2008). Historia de la Informática en la Universidad Argentina.',
      'Red de Galerías FCE (2025). Catálogo de Patrimonio Material y Científico.'
    ],
    image: LAB_IMAGES.vintageHardware
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Detección & Convocatoria Abierta',
    duration: 'Semanas 1-2',
    description: 'Cualquier miembro de la comunidad (docentes, estudiantes, no docentes, graduados) o área institucional (Biblioteca, FyPE, Cátedras) presenta una necesidad concreta o idea de exploración transdisciplinar.',
    deliverable: 'Ficha de desafío abierta y conformación del equipo semilla interclaustro.'
  },
  {
    step: '02',
    title: 'Sprints de Prototipado Rápido',
    duration: 'Semanas 3-6',
    description: 'En lugar de planificaciones burocráticas extensas, realizamos hackdays y sprints cortos de 2 a 4 semanas. Se prioriza el artefacto funcional mínimo (código, instalación, simulación) que permita testear el salto creativo.',
    deliverable: 'Prototipo alfa interactivo funcional sobre tecnologías libres y abiertas.'
  },
  {
    step: '03',
    title: 'Testeo en Aulas y Claustros',
    duration: 'Semanas 7-9',
    description: 'El prototipo se introduce directamente en comisiones de clase, trámites reales de la facultad o espacios comunes. Se recoge retroalimentación de usuarios reales sin intermediarios ni filtros artificiales.',
    deliverable: 'Métricas de usabilidad, feedback cualitativo y matriz de iteración rápida.'
  },
  {
    step: '04',
    title: 'Documentación Abierta & Escalamiento',
    duration: 'Continuo',
    description: 'Fieles a los principios de la cultura libre, todo desarrollo se documenta abiertamente en repositorios accesibles (GitLab UNC/GitHub), con licencias abiertas para que otras unidades académicas puedan adoptarlo y mejorarlo.',
    deliverable: 'Repositorio público, guía de replicabilidad y artículo de divulgación.'
  }
];

export const REFERENCE_SPACES = [
  {
    name: 'MIT Media Lab',
    institution: 'Massachusetts Institute of Technology (EE.UU.)',
    url: 'https://www.media.mit.edu/',
    notes: 'Pionero mundial en la intersección radical de tecnología, multimedia, ciencias sociales y diseño.'
  },
  {
    name: 'Medialab Universidad de Oviedo',
    institution: 'Universidad de Oviedo (España)',
    url: 'https://medialab-uniovi.es/',
    notes: 'Espacio universitario de experimentación, cultura abierta, fabricación digital e innovación social.'
  },
  {
    name: 'CITRIS Invention Lab',
    institution: 'UC Berkeley (EE.UU.)',
    url: 'https://citris-uc.org/labs-programs/invention-lab-3/',
    notes: 'Laboratorio de prototipado rápido para investigación y emprendimientos de impacto público.'
  },
  {
    name: 'Sears Think[box]',
    institution: 'Case Western Reserve University (EE.UU.)',
    url: 'https://case.edu/thinkbox/',
    notes: 'Uno de los centros de innovación y fabricación universitaria abierta más grandes del mundo.'
  },
  {
    name: 'Invention Studio',
    institution: 'Georgia Institute of Technology (EE.UU.)',
    url: 'https://inventionstudio.gatech.edu/',
    notes: 'Espacio maker gestionado horizontalmente por estudiantes para toda la comunidad académica.'
  },
  {
    name: 'Hackerspace IFUSP',
    institution: 'Universidad de São Paulo (Brasil)',
    url: 'https://hackerspace.if.usp.br/',
    notes: 'Hackerspace radicado en el Instituto de Física para promover hardware libre y cultura hacker en América Latina.'
  },
  {
    name: 'University of Maine Hackerspace',
    institution: 'University of Maine (EE.UU.)',
    url: 'https://umaine.edu/hackerspace/',
    notes: 'Comunidad colaborativa para proyectos tecnológicos y experimentación sin barreras disciplinares.'
  }
];

// Sample questions and answers for the Manuel Belgrano Library Chatbot demo
export const LIBRARY_FAQ_DATABASE = [
  {
    keywords: ['microeconomia', 'pindyck', 'oferta', 'demanda', 'precio'],
    question: '¿Tienen el libro Microeconomía de Pindyck y Rubinfeld para la materia Economía I?',
    answer: 'Sí. El texto "Microeconomía" (Robert S. Pindyck y Daniel L. Rubinfeld, 9na edición) se encuentra disponible en la Biblioteca Manuel Belgrano con 14 ejemplares físicos en Sala de Préstamo (Signatura: 338.5 P653 9ed) y acceso al capítulo digital en el Repositorio FCE para alumnos inscriptos en comisiones de Economía I y Microeconomía General.'
  },
  {
    keywords: ['macroeconomia', 'blanchard', 'is-lm', 'inflacion', 'desempleo'],
    question: '¿Dónde consigo el libro Macroeconomía de Olivier Blanchard?',
    answer: 'El libro "Macroeconomía" de Olivier Blanchard (7ma edición) está catalogado bajo la Signatura 339 B639. Disponemos de 9 copias en Sala de Lectura Silenciosa y 5 para préstamo a domicilio por 7 días. Además, podés consultar la guía de ejercicios prácticos digitalizada en el módulo de recursos abiertos de la Cátedra.'
  },
  {
    keywords: ['estadistica', 'walpole', 'probabilidad', 'muestreo'],
    question: '¿Qué bibliografía hay para Métodos Cuantitativos y Estadística?',
    answer: 'Para Estadística disponemos de "Probabilidad y Estadística para Ingeniería y Ciencias" de Walpole, Myers & Myers (Signatura: 519.5 W218), y de "Estadística para Administración y Economía" de Anderson, Sweeney & Williams (Signatura: 519.5 A545). Ambos cuentan con guías de ejercicios resueltos en Python y R elaboradas por docentes de la FCE.'
  },
  {
    keywords: ['horarios', 'abierto', 'atencion', 'prestamo', 'sala'],
    question: '¿Cuáles son los horarios de atención de la Biblioteca Manuel Belgrano?',
    answer: 'La Biblioteca Manuel Belgrano atiende de Lunes a Viernes de 07:30 a 20:00 hs en horario corrido. Las salas de estudio grupal se reservan con credencial universitaria digital, y los puestos con computadoras cuentan con acceso a terminales Linux y software estadístico libre.'
  },
  {
    keywords: ['tesis', 'graduacion', 'formato', 'reglamento', 'entrega'],
    question: '¿Dónde consulto el reglamento y repositorio de tesis de grado?',
    answer: 'Todas las tesis de grado y trabajos finales de Licenciatura en Economía, Administración y Contador Público están depositadas en acceso abierto en el Repositorio Digital Universitario (RDU - UNC). En la sección de la biblioteca podés filtrar por director de tesis, año y materia.'
  }
];
