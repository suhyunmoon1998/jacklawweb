export interface PracticeArea {
  id: string;
  icon: string;
  titleEs: string;
  titleEn: string;
  titleZh: string;
  descEs: string;
  descEn: string;
  descZh: string;
  detailEs: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'despido-injusto',
    icon: '⚖️',
    titleEs: 'Despido Injusto',
    titleEn: 'Wrongful Termination',
    titleZh: '不当解雇',
    descEs: 'Si fue despedido por motivos discriminatorios, en represalia o en violación de la ley, puede tener un reclamo legal.',
    descEn: 'If you were fired for discriminatory reasons, in retaliation, or in violation of law, you may have a legal claim.',
    descZh: '如果您因歧视性原因、报复行为或违反法律而被解雇，您可能有合法索赔权。',
    detailEs: 'En California, los empleados están protegidos contra el despido injusto. Esto incluye despidos motivados por raza, género, edad, religión, discapacidad, orientación sexual, embarazo u otras características protegidas. También puede haber un despido injusto cuando se despide a un empleado por denunciar actividades ilegales o por ejercer derechos legales como tomar licencia médica. Si usted fue despedido y cree que fue injusto, puede tener derecho a compensación por salarios perdidos, daños emocionales y otros perjuicios. Cada situación es diferente y los resultados dependen de los hechos específicos del caso.',
  },
  {
    id: 'overtime',
    icon: '⏰',
    titleEs: 'Overtime No Pagado',
    titleEn: 'Unpaid Overtime',
    titleZh: '未支付加班费',
    descEs: 'California exige pagar 1.5 veces el salario por horas extras. Si no le pagaron correctamente, puede tener un reclamo por salarios.',
    descEn: 'California requires 1.5x pay for overtime hours. If you were not paid correctly, you may have a wage claim.',
    descZh: '加州要求加班时间支付1.5倍工资。如果您的工资支付不正确，您可能有工资索赔权。',
    detailEs: 'La ley de California requiere que los empleadores paguen tiempo y medio (1.5x) por todas las horas trabajadas más de 8 en un día o más de 40 en una semana. Las horas trabajadas en exceso de 12 en un día deben pagarse al doble (2x). Muchos empleadores clasifican incorrectamente a los trabajadores como exentos o independientes para evitar pagar overtime. Si usted trabajó más de 8 horas al día o 40 horas a la semana sin recibir el pago correcto, es posible que pueda recuperar los salarios que le deben, intereses y honorarios de abogado.',
  },
  {
    id: 'discriminacion',
    icon: '🤝',
    titleEs: 'Discriminación Laboral',
    titleEn: 'Employment Discrimination',
    titleZh: '就业歧视',
    descEs: 'La ley protege a los empleados contra la discriminación por raza, género, edad, discapacidad, religión y otras características.',
    descEn: 'The law protects employees from discrimination based on race, gender, age, disability, religion, and more.',
    descZh: '法律保护雇员免受基于种族、性别、年龄、残疾、宗教等方面的歧视。',
    detailEs: 'La Ley de Empleo y Vivienda Justa de California (FEHA) prohíbe la discriminación en el lugar de trabajo basada en características protegidas como raza, color, origen nacional, sexo, embarazo, orientación sexual, identidad de género, edad (40 o más), discapacidad, religión y estado civil. Si usted fue tratado de manera injusta debido a una de estas características, puede tener derecho a presentar una queja y buscar compensación.',
  },
  {
    id: 'acoso-sexual',
    icon: '🛡️',
    titleEs: 'Acoso Sexual',
    titleEn: 'Sexual Harassment',
    titleZh: '性骚扰',
    descEs: 'Nadie debe tolerar el acoso sexual en el trabajo. La ley de California ofrece protecciones sólidas para los trabajadores.',
    descEn: 'No one should tolerate sexual harassment at work. California law provides strong protections for workers.',
    descZh: '任何人都不应忍受工作中的性骚扰。加州法律为工人提供强有力的保护。',
    detailEs: 'El acoso sexual en el lugar de trabajo es ilegal en California. Puede incluir comentarios inapropiados, conducta física no deseada, solicitudes de favores sexuales, o la creación de un ambiente de trabajo hostil. Tanto los empleadores como los compañeros de trabajo pueden ser responsables. Si usted ha sido víctima de acoso sexual, tiene derecho a trabajar en un ambiente libre de acoso y puede tener derecho a compensación por daños.',
  },
  {
    id: 'comidas-descansos',
    icon: '🍽️',
    titleEs: 'Comidas y Descansos',
    titleEn: 'Meal & Rest Breaks',
    titleZh: '餐饮和休息时间',
    descEs: 'California exige pausas para comer y descansar. Si se las negaron o interrumpieron, puede tener derecho a compensación.',
    descEn: 'California requires meal and rest breaks. If yours were denied or interrupted, you may be entitled to compensation.',
    descZh: '加州要求提供餐饮和休息时间。如果您的休息时间被拒绝或中断，您可能有权获得赔偿。',
    detailEs: 'En California, los empleados tienen derecho a una pausa de comida de 30 minutos sin interrupciones por cada 5 horas trabajadas, y un descanso de 10 minutos por cada 4 horas trabajadas. Si su empleador no le proporcionó estos descansos, o si le hizo trabajar durante ellos, puede tener derecho a una hora de pago adicional por cada violación. Estas violaciones son comunes y pueden acumularse significativamente con el tiempo.',
  },
  {
    id: 'robo-salarios',
    icon: '💰',
    titleEs: 'Robo de Salarios y Propinas',
    titleEn: 'Wage Theft & Tip Violations',
    titleZh: '工资盗窃和小费违规',
    descEs: 'No cobrar el salario mínimo, retener propinas o no pagar por todo el tiempo trabajado puede ser robo de salarios.',
    descEn: 'Failing to pay minimum wage, withholding tips, or not paying for all hours worked may constitute wage theft.',
    descZh: '未支付最低工资、扣留小费或未支付所有工作时间的工资可能构成工资盗窃。',
    detailEs: 'El robo de salarios ocurre cuando un empleador no paga el salario mínimo, retiene propinas, no paga por todo el tiempo trabajado incluyendo tiempo de "off-the-clock", realiza deducciones ilegales del cheque de pago, o no paga el salario final a tiempo. En California, la ley es muy clara: todos los trabajadores merecen recibir el pago completo por su trabajo. Si su empleador le ha robado salarios, puede tener derecho a recuperar el dinero que le deben más penalidades adicionales.',
  },
  {
    id: 'represalias',
    icon: '📢',
    titleEs: 'Represalias / Whistleblower',
    titleEn: 'Retaliation / Whistleblower',
    titleZh: '报复/举报人',
    descEs: 'Si fue castigado por reportar actividades ilegales o ejercer sus derechos laborales, puede estar protegido por la ley.',
    descEn: 'If you were punished for reporting illegal activity or exercising your workplace rights, you may be protected by law.',
    descZh: '如果您因举报非法活动或行使工作场所权利而受到惩罚，您可能受到法律保护。',
    detailEs: 'En California, es ilegal que un empleador tome represalias contra un empleado por reportar violaciones de la ley, negarse a participar en actividades ilegales, presentar una queja ante agencias gubernamentales, o ejercer derechos laborales como tomar licencia médica o reportar lesiones en el trabajo. Las represalias pueden incluir despido, reducción de horas, cambio de turno, acoso o cualquier otra acción adversa en el empleo.',
  },
  {
    id: 'licencia-medica',
    icon: '🏥',
    titleEs: 'Licencia Médica y Embarazo',
    titleEn: 'Medical & Pregnancy Leave',
    titleZh: '医疗和产假',
    descEs: 'Los empleados en California pueden tener derecho a licencias médicas y por embarazo protegidas. Negarlas puede ser ilegal.',
    descEn: 'California employees may be entitled to protected medical and pregnancy leave. Denying them may be illegal.',
    descZh: '加州雇员可能有权享受受保护的医疗和产假。拒绝提供可能是违法的。',
    detailEs: 'California ofrece algunas de las protecciones de licencia más sólidas del país. Esto incluye la Ley de Licencia Familiar de California (CFRA), la Licencia por Incapacidad por Embarazo (PDL) y el Seguro de Incapacidad del Estado (SDI). Los empleadores no pueden despedir, discriminar ni tomar represalias contra empleados por tomar licencia médica o por embarazo a la que tienen derecho. Si un empleador violó sus derechos de licencia, puede tener derecho a reincorporarse a su trabajo y buscar compensación.',
  },
  {
    id: 'class-actions',
    icon: '👥',
    titleEs: 'Acciones Colectivas / Class Actions',
    titleEn: 'Class Actions / PAGA',
    titleZh: '集体诉讼',
    descEs: 'Cuando un empleador viola los derechos de múltiples trabajadores, puede ser posible presentar una acción colectiva o demanda PAGA.',
    descEn: 'When an employer violates the rights of multiple workers, a class action or PAGA claim may be possible.',
    descZh: '当雇主侵犯多名工人的权利时，可能可以提起集体诉讼或PAGA索赔。',
    detailEs: 'Las acciones colectivas y las demandas bajo la Ley de Acciones Privadas de California (PAGA) permiten que los empleados busquen compensación colectivamente cuando un empleador tiene una práctica ilegal que afecta a muchos trabajadores. Esto puede ser especialmente efectivo cuando las violaciones individuales son pequeñas pero el patrón de conducta es sistemático. PAGA también permite a los empleados actuar en nombre del Estado de California para cobrar penalidades.',
  },
];
