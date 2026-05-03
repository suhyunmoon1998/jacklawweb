export interface PracticeArea {
  id: string;
  titleEs: string;
  titleEn: string;
  titleZh: string;
  descEs: string;
  descEn: string;
  descZh: string;
  detailEn: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'wrongful-termination',
    titleEn: 'Wrongful Termination',
    titleEs: 'Despido Injusto',
    titleZh: '不当解雇',
    descEn: 'Fired for speaking up, taking protected leave, reporting unlawful conduct, or refusing to violate the law? We help employees determine whether a termination was unlawful.',
    descEs: '¿Lo despidieron por hablar, tomar licencia protegida, denunciar conductas ilegales o negarse a violar la ley? Ayudamos a empleados a determinar si el despido fue ilícito.',
    descZh: '因发声、请受保护假期、举报违法行为或拒绝违法而被解雇？我们帮助雇员判断解雇是否违法。',
    detailEn: 'Fired for speaking up, taking protected leave, reporting unlawful conduct, or refusing to violate the law? We help employees determine whether a termination was unlawful. California employees are protected from being fired for discriminatory reasons, in retaliation for exercising workplace rights, or in violation of public policy. If you believe your termination was unjust, you may have a legal claim for lost wages, emotional distress, and other damages.',
  },
  {
    id: 'discrimination',
    titleEn: 'Workplace Discrimination',
    titleEs: 'Discriminación Laboral',
    titleZh: '职场歧视',
    descEn: 'California employees are protected from discrimination based on race, sex, disability, pregnancy, age, religion, national origin, sexual orientation, gender identity, and other protected traits.',
    descEs: 'Los empleados de California están protegidos contra la discriminación por raza, sexo, discapacidad, embarazo, edad, religión, origen nacional, orientación sexual, identidad de género y otras características protegidas.',
    descZh: '加州雇员受到保护，免受基于种族、性别、残疾、怀孕、年龄、宗教、国籍、性取向、性别认同等受保护特征的歧视。',
    detailEn: 'California employees are protected from discrimination based on race, sex, disability, pregnancy, age, religion, national origin, sexual orientation, gender identity, and other protected traits. The California Fair Employment and Housing Act (FEHA) provides broad protections against discriminatory treatment in hiring, firing, promotion, compensation, and other terms of employment. If you have been treated unfairly because of who you are, you may have a valid claim.',
  },
  {
    id: 'sexual-harassment',
    titleEn: 'Sexual Harassment & Hostile Work Environment',
    titleEs: 'Acoso Sexual y Ambiente Hostil',
    titleZh: '性骚扰与敌对工作环境',
    descEn: 'No employee should have to endure sexual harassment, offensive conduct, threats, intimidation, or a workplace that feels unsafe or abusive.',
    descEs: 'Ningún empleado debe soportar acoso sexual, conducta ofensiva, amenazas, intimidación o un ambiente de trabajo que se sienta inseguro o abusivo.',
    descZh: '任何雇员都不应忍受性骚扰、冒犯性行为、威胁、恐吓或感觉不安全或有虐待性的工作环境。',
    detailEn: 'No employee should have to endure sexual harassment, offensive conduct, threats, intimidation, or a workplace that feels unsafe or abusive. Sexual harassment includes unwelcome sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature. A hostile work environment based on sex, gender, or other protected characteristics is also unlawful. Both the harasser and the employer may be held liable.',
  },
  {
    id: 'retaliation',
    titleEn: 'Retaliation',
    titleEs: 'Represalias',
    titleZh: '报复',
    descEn: 'Employers cannot punish employees for exercising workplace rights, reporting illegal conduct, requesting accommodations, filing complaints, or opposing discrimination or harassment.',
    descEs: 'Los empleadores no pueden castigar a los empleados por ejercer derechos laborales, denunciar conductas ilegales, solicitar adaptaciones, presentar quejas o oponerse a la discriminación o el acoso.',
    descZh: '雇主不得因雇员行使工作权利、举报违法行为、申请合理便利、提出投诉或反对歧视或骚扰而对其进行惩罚。',
    detailEn: 'Employers cannot punish employees for exercising workplace rights, reporting illegal conduct, requesting accommodations, filing complaints, or opposing discrimination or harassment. Retaliation can take many forms — termination, demotion, reduced hours, schedule changes, or a hostile work environment. California law provides strong protections against retaliation, and employees who experience it may be entitled to significant compensation.',
  },
  {
    id: 'wage-hour',
    titleEn: 'Wage & Hour Claims',
    titleEs: 'Reclamos de Salarios y Horas',
    titleZh: '工资和工时索赔',
    descEn: 'We handle claims involving unpaid wages, unpaid overtime, minimum wage violations, off-the-clock work, improper deductions, inaccurate pay statements, and employee misclassification.',
    descEs: 'Manejamos reclamos por salarios no pagados, horas extras no pagadas, violaciones del salario mínimo, trabajo fuera del horario, deducciones indebidas, registros de pago inexactos y clasificación incorrecta de empleados.',
    descZh: '我们处理涉及未支付工资、未支付加班费、最低工资违规、下班后工作、不当扣款、工资单不准确以及雇员错误分类的索赔。',
    detailEn: 'We handle claims involving unpaid wages, unpaid overtime, minimum wage violations, off-the-clock work, improper deductions, inaccurate pay statements, and employee misclassification. California requires 1.5x pay for daily overtime (over 8 hours) and weekly overtime (over 40 hours), and double time for hours over 12 in a day. Wage theft is among the most common violations California workers face.',
  },
  {
    id: 'meal-rest-breaks',
    titleEn: 'Meal & Rest Break Violations',
    titleEs: 'Violaciones de Comidas y Descansos',
    titleZh: '餐饮和休息时间违规',
    descEn: 'California law provides important break protections for many nonexempt employees. We help workers pursue claims for missed, interrupted, shortened, or unpaid meal and rest breaks.',
    descEs: 'La ley de California ofrece importantes protecciones de descanso para muchos empleados no exentos. Ayudamos a los trabajadores a presentar reclamos por comidas y descansos omitidos, interrumpidos, acortados o no pagados.',
    descZh: '加州法律为许多非豁免雇员提供重要的休息保护。我们帮助工人就错过、中断、缩短或未支付的餐饮和休息时间提出索赔。',
    detailEn: 'California law provides important break protections for many nonexempt employees. Employees are entitled to a 30-minute unpaid meal period for shifts over 5 hours, and a paid 10-minute rest break for every 4 hours worked. If your employer failed to provide these breaks, you may be entitled to one additional hour of pay for each violation. These penalties can add up significantly over time.',
  },
  {
    id: 'leave-rights',
    titleEn: 'Medical Leave, Pregnancy Leave & Sick Leave',
    titleEs: 'Licencia Médica, Embarazo y Enfermedad',
    titleZh: '医疗假、产假和病假',
    descEn: 'Employees may have rights to protected time off for serious health conditions, pregnancy-related disability, bonding with a new child, caring for family members, paid sick leave, and other qualifying reasons.',
    descEs: 'Los empleados pueden tener derecho a tiempo libre protegido por condiciones de salud graves, discapacidad relacionada con el embarazo, vinculación con un nuevo hijo, cuidado de familiares, licencia médica pagada y otras razones calificadas.',
    descZh: '雇员可能有权享受受保护的假期，用于严重健康状况、与妊娠相关的残疾、与新生儿建立联系、照顾家庭成员、带薪病假及其他符合条件的原因。',
    detailEn: 'Employees may have rights to protected time off for serious health conditions, pregnancy-related disability, bonding with a new child, caring for family members, paid sick leave, and other qualifying reasons. California provides some of the most comprehensive leave protections in the country through CFRA, FMLA, PDL, and paid sick leave laws. Employers who deny, interfere with, or retaliate against employees for taking protected leave may be liable.',
  },
  {
    id: 'disability-accommodations',
    titleEn: 'Disability Accommodations',
    titleEs: 'Adaptaciones por Discapacidad',
    titleZh: '残疾合理便利',
    descEn: 'Employees with disabilities may be entitled to reasonable accommodations and an interactive process with their employer.',
    descEs: 'Los empleados con discapacidades pueden tener derecho a adaptaciones razonables y a un proceso interactivo con su empleador.',
    descZh: '残疾雇员可能有权获得合理便利安排，以及与雇主进行互动程序的权利。',
    detailEn: 'Employees with disabilities may be entitled to reasonable accommodations and an interactive process with their employer. Under California\'s FEHA, employers with five or more employees must engage in a good-faith interactive process to determine appropriate accommodations. Failing to accommodate a disability, refusing to engage in the interactive process, or retaliating against an employee for requesting accommodations may give rise to legal claims.',
  },
  {
    id: 'whistleblower',
    titleEn: 'Whistleblower Claims',
    titleEs: 'Denunciantes / Whistleblower',
    titleZh: '举报人索赔',
    descEn: 'Workers who report unlawful conduct, safety concerns, wage violations, fraud, or other misconduct may be protected from retaliation.',
    descEs: 'Los trabajadores que denuncian conductas ilegales, preocupaciones de seguridad, violaciones salariales, fraude u otras irregularidades pueden estar protegidos contra represalias.',
    descZh: '举报违法行为、安全隐患、工资违规、欺诈或其他不当行为的工人可能受到反报复保护。',
    detailEn: 'Workers who report unlawful conduct, safety concerns, wage violations, fraud, or other misconduct may be protected from retaliation under California and federal whistleblower laws. These protections apply whether you reported internally to a supervisor or externally to a government agency. If your employer took adverse action against you for reporting wrongdoing, you may have a whistleblower retaliation claim.',
  },
  {
    id: 'severance-agreements',
    titleEn: 'Severance & Employment Agreements',
    titleEs: 'Liquidaciones y Contratos de Empleo',
    titleZh: '遣散协议与劳动合同',
    descEn: 'We review severance agreements, employment contracts, arbitration agreements, releases, and restrictive covenants so employees understand what they are being asked to sign.',
    descEs: 'Revisamos acuerdos de liquidación, contratos de empleo, acuerdos de arbitraje, liberaciones y cláusulas restrictivas para que los empleados entiendan qué se les pide que firmen.',
    descZh: '我们审查遣散协议、劳动合同、仲裁协议、免责声明及限制性条款，帮助雇员了解所签文件的含义。',
    detailEn: 'We review severance agreements, employment contracts, arbitration agreements, releases, and restrictive covenants so employees understand what they are being asked to sign. Signing a severance agreement typically waives important legal rights. Before you sign anything, it is important to understand what claims you may be releasing, whether the severance amount is fair, and whether any restrictions on future employment are enforceable.',
  },
];
